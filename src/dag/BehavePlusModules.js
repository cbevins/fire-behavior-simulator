/**
 * @file Dag class public implementation
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

// This is a bolt-on extension of the Dag to implement BehavePlus Modules
export class BehavePlusModules {
  constructor (dag) {
    this._dag = dag
    this._dag._configureClass = this
    // Discover all the defined Module DagNodes
    this._module = {}
    this._module._nodes = this._dag.nodes().filter(node => node.key().startsWith('module.'))
    this._module._keys = this._module._nodes.map(node => node.key())
    // Assign DagNodes to their Modules by their key prefixes
    this._module._prefixes = new Map([
      ['module.surfaceFire', ['surface.primary', 'surface.secondary', 'surface.weighted']],
      ['module.surfaceSpot', ['spotting.surfaceFire']],
      ['module.crownFire', ['crown.']],
      ['module.crownSpot', ['spotting.crownFire.']],
      ['module.fireEllipse', ['surface.fire.ellipse.']],
      ['module.fireContain', ['contain']],
      ['module.scorchHeight', ['scorch.']],
      ['module.treeMortality', ['mortality.']],
      ['module.spotting', ['spotting.burningPile', 'spotting.torchingTrees']],
      ['module.ignitionProbability', ['ignition.']]
    ])
    // This is how to discover all the link DagNodes
    this._link = {}
    this._link._nodes = this._dag.nodes().filter(node => node.key().startsWith('link.'))
    this._link._keys = this._link._nodes.map(node => node.key())
    this._link._links = [
      ['link.crownFire', 'linkedToSurfaceFire', 'module.crownFire', 'module.surfaceFire'],
      ['link.crownSpot', 'linkedToCrownFire', 'module.crownSpot', 'module.crownFire'],
      ['link.fireContain', 'linkedToFireEllipse', 'module.fireContain', 'module.fireEllipse'],
      ['link.fireEllipse', 'linkedToSurfaceFire', 'module.fireEllipse', 'module.surfaceFire'],
      ['link.scorchHeight', 'linkedToSurfaceFire', 'module.scorchHeight', 'module.surfaceFire'],
      ['link.surfaceSpot', 'linkedToSurfaceFire', 'module.surfaceSpot', 'module.surfaceFire'],
      ['link.treeMortality', 'linkedToScorchHeight', 'module.treeMortality', 'module.scorchHeight']
    ]
  }

  // Sets modules in [moduleKeys] to 'active' or 'inactive'
  // if setNodes===true, then Module's DagNodes are enabled/disabled
  _activate (moduleKeys, isActive, setNodes = true) {
    if (!Array.isArray(moduleKeys)) moduleKeys = [moduleKeys]
    const moduleValue = isActive ? 'active' : 'inactive'
    this._dag.configure(moduleKeys.map(key => [key, moduleValue]))
    if (setNodes) {
      moduleKeys.forEach(moduleKey => {
        this._dag.setEnabled(this.moduleNodePrefixes(moduleKey), isActive)
      })
    }
  }

  // Activate modules specified in [<moduleKeys>]
  activate (moduleKeys, setNodes = true) { return this._activate(moduleKeys, true, setNodes) }

  // Activate all 10 modules
  activateAll (setNodes = true) { return this._activate(this.moduleKeys(), true, setNodes) }

  // Called by Dag.configure() AFTER setting the passed COnfig DagNode values,
  // but BEFORE calling Dag.setTopology()
  configure () {
    this._link._links.forEach(([linkKey, linkValue, consumerKey, producerKey]) => {
      if (this._dag.node(consumerKey).value() === 'inactive' ||
          this._dag.node(producerKey).value() === 'inactive') {
        this._dag.node(linkKey)._value = 'standAlone'
      }
    })
  }

  // De-activate modules specified in [<moduleKeys>]
  deactivate (moduleKeys, setNodes = true) { return this._activate(moduleKeys, false, setNodes) }

  // De-activate all 10 modules
  deactivateAll (setNodes = true) { return this._activate(this.moduleKeys(), false, setNodes) }

  // Returns an array of all (7) 'link.*' configuration DagNode key strings
  linkKeys () { return this._link._keys }

  // Returns an array of references to all (7) the 'link.*' configuration DagNodes
  linkNodes () { return this._link._nodes }

  // Returns an array of all (10) 'module.*' configuration DagNode key strings
  moduleKeys () { return this._module._keys }

  // Returns an array of references to all DagNodes that are members of moduleKey
  moduleMembers (moduleKey) { return this.nodesThatStartWith(this.moduleNodePrefixes(moduleKey)) }

  // Returns an array of unique DagNode key prefixes for `moduleKey`
  moduleNodePrefixes (moduleKey) { return this._module._prefixes.get(moduleKey) }

  // Returns an array of references to all (10) the 'module.*' DagNodes
  moduleNodes () { return this._module._nodes }

  // Returns an array of references to all DagNodes matching and of the [prefixes]
  nodesThatStartWith (prefixes) {
    const nodes = []
    this._dag.nodes().forEach(node => {
      const key = node.key()
      for (let idx = 0; idx < prefixes.length; idx++) {
        if (key.startsWith(prefixes[idx])) {
          nodes.push(node)
          break
        }
      }
    })
    return nodes
  }
}
