/**
 * @file DagNode updater methods that are handled internally by the Dag
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
export function bind (value) { return value }
export function config (value) { return value }
export function dangler (value) { return value }
export function fixed (value) { return value }
export function input (value) { return value }
export function link (value) { return value }

/**
 * Callback for Dag.setModule()
 *
 * Notes:
 * - module() is called via Dag.setModules() -> DagDna.setModules() -> DagSetRun.setModules()
 * - The Module values have already been set before module() is called
 * - module() should enabled/disable Nodes and set Link Nodes as appropriate
 * - After returning from module(), DagSetRun.setModules() calls config()
 *
 * @param {Dag} dag  Reference to the DagDna instance
 * @param {string} mode 'cascade', 'independent', or 'none'
 *
 * In 'independent' mode, any two modules are ALWAYS and ONLY linked WHEN they are both active.
 * Thus, if both surfaceFire and crownFire are activate, they are also linked.
 * If crownSpot is then also activated, it is also linked to crownFire and then surfaceFire.
 * This forces the client to select all active modules, just as for BehavePlus for Windows.
 *
 * If mode is 'none', then links are set just like any other configure Node.
 * For example, if the client selects the flanking spread rate, the 'link.fireEllipse'
 * configuration Node becomes 'required', and the client may then choose between
 * 'linkedToSurfaceFire' or 'standAlone'.
 */
export function module (dag, mode) {
  if (mode === 'independent') {
    moduleIndependent(dag)
  }
}

function moduleIndependent (dag) {
  const modules = [
    ['surfaceFire', ['surface.primary', 'surface.secondary', 'surface.weighted'], null],
    ['surfaceSpot', ['spotting.surfaceFire'], 'surfaceFire'],
    ['crownFire', ['crown.'], 'surfaceFire'],
    ['crownSpot', ['spotting.crownFire.'], 'crownFire'],
    ['fireEllipse', ['surface.fire.ellipse.'], 'surfaceFire'],
    ['fireContain', ['contain'], 'fireEllipse'],
    ['scorchHeight', ['scorch.'], 'surfaceFire'],
    ['treeMortality', ['mortality.'], 'scorchHeight'],
    ['spotting', ['spotting.burningPile', 'spotting.torchingTrees'], null],
    ['ignitionProbability', ['ignition.'], null]
  ]

  modules.forEach(([name, prefixes, linkName]) => {
    const modNode = dag.get('module.' + name) // *this* module Node
    const active = modNode.value === 'active'

    // Set up possible linkage
    if (linkName) {
      const linkNode = dag.get('link.' + name)
      linkNode.value = 'standAlone'
      if (active) {
        const linkMod = dag.get('module.' + linkName)
        if (linkMod.value === 'active') { // if there is a link module and its active
          linkNode.value = 'linkedTo' + linkName.charAt(0).toUpperCase() + linkName.slice(1) // link to it
        }
      }
    }

    // Enable/disable this module's Nodes
    prefixes.forEach(prefix => {
      dag.node.forEach(node => { if (node.key.startsWith(prefix)) node.isEnabled = active })
    })
  })
}
