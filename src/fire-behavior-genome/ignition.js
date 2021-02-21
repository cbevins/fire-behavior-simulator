export const genome = [
  ['ignition.firebrand.probability', [['IgnitionProbability'], [
    ['finally', 'IgnitionProbability.firebrand',
      'site.temperature.fuel',
      'site.moisture.dead.tl1h']
  ]]],
  ['ignition.lightningStrike.charge', [['IgnitionLightningChargeOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['ignition.lightningStrike.fuel.depth', [['IgnitionFuelDepth'], [
    ['finally', 'Dag.input']
  ]]],
  ['ignition.lightningStrike.fuel.type', [['IgnitionFuelTypeOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['ignition.lightningStrike.probability', [['IgnitionProbability'], [
    ['finally', 'IgnitionProbability.lightningStrike',
      'ignition.lightningStrike.fuel.type',
      'ignition.lightningStrike.fuel.depth',
      'site.moisture.dead.tl100h',
      'ignition.lightningStrike.charge']
  ]]]
]
