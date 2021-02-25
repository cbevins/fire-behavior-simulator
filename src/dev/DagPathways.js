/**
 * Returns a Map containing each of the independent pathways through the Dag,
 * which depends upon the current set of selected Nodes.
 *
 * This function first creates the producer pathway of each selected Dag Node,
 * then merges together those pathways with common producer Nodes.
 *
 * The returned Map has one entry for each independent pathway.
 * The map entry key is one of the selected Node keys,
 * and the entry value is an object containing:
 *  - an array of the selected Nodes that share this common pathway, and
 *  - an array of all the producer Nodes for this pathway (NOT in topological order)
 *
 * A DAG batch processor can step through the Map, running each pathway
 * independently, so that no unnecessary iteration occurs.
 *
 * Consider the case where a DAG has two independent pathways.
 * The first independent pathway has a selected Node at level 2, and its only other
 * required Node is its immediate producer input Node at level 1.
 *
 * The second pathway is more lengthy and complex (a typical surface fire DAG
 * would have 500 required Nodes with 10 inputs going as deep as 80 levels)
 *
 * If the first pathway's sole input has, for example, 1000 input values,
 * and the second pathways has 4 inputs with 10 values each,
 * the entire DAG could be iterated 1000 * (10 * 10 * 10 * 10) = 10,000,000 times,
 * when it could be run sequentially 1000 + (10 * 10 * 10 * 10) = 11,000 times.
 *
 * @param {*} dag
 * @return {Map} A map with 1 entry per independent pathway:
 * {
 *    key: one of this path's selected Node keys
 *    value: {
 *      producers: [],  // an array of this pathway's producer Node keys (or references) in topological order
 *      selected: [],   // an array of keys (or references) to the selected Nodes using this path
 *    }
 * }
 */

export function keyMap (dag) {
  // Construct a Map with a key for each required Node in the Dag
  // and whose value is an array of booleans, one for each of the Dag's selected Node.
  // The boolean is set TRUE if the required Node (key) is a producer of the selected Node.
  const selectedNodes = dag.selectedNodes()
  const requiredNodeMap = new Map()
  Array.from(dag.dna.required).forEach(node => {
    requiredNodeMap.set(node.key, Array(selectedNodes.length).fill(false))
  })

  // Walk each selected Node's producer pathway, mapping its producer Nodes
  selectedNodes.forEach((node, selectIdx) => { mapProducers(requiredNodeMap, node, selectIdx) })

  // Merge selected Node pathways that share common required Nodes
  const mergedMap = new Map() // Map of merged selected Node pathway sets
  requiredNodeMap.forEach(usedByArray => {
    // Get the indices of all its user selected Node
    const users = []
    usedByArray.forEach((isUsed, idx) => { if (isUsed) users.push(idx) })
    if (users.length > 1) {
      // If this Node is a producer to more than 1 selected Node,
      mergeLineages(requiredNodeMap, users) // merge them
      const targetKey = selectedNodes[users[0]].key
      // Keep track of where selected Nodes are merged
      if (!mergedMap.has(targetKey)) {
        mergedMap.set(targetKey, new Set())
      }
      const set = mergedMap.get(targetKey)
      users.forEach(idx => {
        set.add(selectedNodes[idx].key)
      })
    }
  })

  // Transform into a Map of selected Node Keys and their producer Node keys
  const selectedMap = new Map()
  selectedNodes.forEach(node => {
    selectedMap.set(node.key, { producers: [], selected: [] })
  })
  requiredNodeMap.forEach((usedByArray, key) => {
    usedByArray.forEach((isUsed, idx) => {
      if (isUsed) {
        selectedMap.get(selectedNodes[idx].key).producers.push(key)
      }
    })
  })

  // Remove empty lineages
  const empty = []
  selectedMap.forEach((data, key) => {
    if (!data.producers.length) empty.push(key)
  })
  empty.forEach(key => {
    selectedMap.delete(key)
  })

  // Add merged selections
  selectedMap.forEach((data, key) => {
    data.selected = mergedMap.has(key) ? Array.from(mergedMap.get(key)) : [key]
  })

  // Return the disjoint sets
  return selectedMap
}

/**
 * Same as keyMap() but all producer and selected Nodes are Node references instead of key strings
 *
 * @param {} dag
 */
export function nodeMap (dag) {
  const map = keyMap(dag)
  map.forEach(path => {
    path.producers = path.producers.map(key => dag.get(key))
    path.selected = path.selected.map(key => dag.get(key))
  })
  return map
}

/**
 *
 * @param {*} map The Map of [required Node keys => selected Node array]
 * @param {*} node The Node being added to the Map
 * @param {*} selectIdx The index of the selected Node for which this Node is a producer
 */
function mapProducers (requiredNodeMap, node, selectIdx) {
  const values = requiredNodeMap.get(node.key)
  values[selectIdx] = true
  node.producers.forEach(producer => {
    mapProducers(requiredNodeMap, producer, selectIdx)
  })
}

/**
 * Combines two or more common lineages into the first lineage.
 *
 * The passed Map is mutated inplace.
 *
 * @param {*} map The Map of [required Node keys => selected Node array]
 * @param {*} users An array of the selected Node indices to be merged
 */
function mergeLineages (requiredNodeMap, users) {
  // Merge the common pathways into the first pathway
  const target = users[0]
  // Examine every required Node in the Map
  requiredNodeMap.forEach(usedByArray => {
    // Examine each of the selected Nodes to be merged
    users.forEach(idx => {
      // If this required Node is a producer to this selected Node
      if (usedByArray[idx]) {
        // Merge this selected Node's pathway with the first selected Node
        usedByArray[target] = true
        usedByArray[idx] = false
      }
    })
  })
}
