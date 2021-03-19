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
    // Set *this* BehavePlusModules instance as the Dag.configure() callback hook
    this._dag._configureClass = this
    // Define the module DagNode keys and their member DagNode key prefixes
    this._modules = [
      ['module.surfaceFire', ['surface.primary.', 'surface.secondary.', 'surface.weighted.']],
      ['module.surfaceSpot', ['spotting.surfaceFire.']],
      ['module.crownFire', ['crown.']],
      ['module.crownSpot', ['spotting.crownFire.']],
      ['module.fireEllipse', ['surface.fire.ellipse.']],
      ['module.fireContain', ['contain.']],
      ['module.scorchHeight', ['scorch.']],
      ['module.treeMortality', ['mortality.']],
      ['module.spotting', ['spotting.burningPile.', 'spotting.torchingTrees.']],
      ['module.ignitionProbability', ['ignition.']]
    ]
    // Define the link DagNode keys and their linkedTo* edge and consumer and producer dagNode keys
    this._links = [
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
  activate (moduleKeys) {
    moduleKeys = Array.isArray(moduleKeys) ? moduleKeys : [moduleKeys]
    this._dag.configure(moduleKeys.map(moduleKey => [moduleKey, 'active']))
  }

  // Activate all 10 modules
  activateAll () { this._dag.configure(this._modules.map(mod => [mod[0], 'active'])) }

  // Called by Dag.configure() AFTER setting the passed Config DagNode values,
  // but BEFORE calling Dag.setTopology()
  configure () {
    // Only link adjacent Modules if they are both active
    this._links.forEach(([linkKey, linkedValue, consumerKey, producerKey]) => {
      if (this._dag.node(consumerKey).value() === 'active' &&
          this._dag.node(producerKey).value() === 'active') {
        this._dag.node(linkKey)._value = linkedValue
      } else {
        this._dag.node(linkKey)._value = 'standAlone'
      }
    })
    // Enable/disable DagNodes based on whether their Module is active/inactive
    this._modules.forEach(([moduleKey, prefixes]) => {
      this._dag.setEnabled(prefixes, this._dag.node(moduleKey).value() === 'active')
    })
  }

  // De-activate modules specified in [<moduleKeys>]
  deactivate (moduleKeys) {
    moduleKeys = Array.isArray(moduleKeys) ? moduleKeys : [moduleKeys]
    this._dag.configure(moduleKeys.map(moduleKey => [moduleKey, 'inactive']))
  }

  // De-activate all 10 modules
  deactivateAll () { this._dag.configure(this._modules.map(mod => [mod[0], 'inactive'])) }

  linkKeys () { return this._links.map(link => link[0]) }

  linkNodes () { return this._links.map(link => this._dag.node(link[0])) }

  moduleKeys () { return this._modules.map(mod => mod[0]) }

  // Returns an array of references to all DagNodes that are members of moduleKey
  moduleMembers (moduleKey) {
    const module = this._modules.find(mod => mod[0] === moduleKey)
    return (module === undefined) ? [] : this.nodesThatStartWith(module[1])
  }

  moduleNodes () { return this._modules.map(mod => this._dag.node(mod[0])) }

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
