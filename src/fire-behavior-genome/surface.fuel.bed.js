/**
 * @file Surface fuel bed genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as Life from './surface.fuel.bed.life.js'
import * as Particle from './surface.fuel.bed.particle.js'

export function genome (prefix) {
  return [
    ...Particle.dead1(prefix),
    ...Particle.derived(prefix, 'dead', '1'),
    ...Particle.dead2(prefix),
    ...Particle.derived(prefix, 'dead', '2'),
    ...Particle.dead3(prefix),
    ...Particle.derived(prefix, 'dead', '3'),
    ...Particle.dead4(prefix),
    ...Particle.derived(prefix, 'dead', '4'),
    ...Particle.dead5(prefix),
    ...Particle.derived(prefix, 'dead', '5'),
    ...Particle.live1(prefix),
    ...Particle.derived(prefix, 'live', '1'),
    ...Particle.live2(prefix),
    ...Particle.derived(prefix, 'live', '2'),
    ...Particle.live3(prefix),
    ...Particle.derived(prefix, 'live', '3'),
    ...Particle.live4(prefix),
    ...Particle.derived(prefix, 'live', '4'),
    ...Particle.live5(prefix),
    ...Particle.derived(prefix, 'live', '5'),
    ...Life.genome(prefix, 'dead'),
    ...Life.genome(prefix, 'live'),
    ...bed(prefix)
  ]
}

export function bedFuelDepth (prefix) {
  return prefix === 'crown.canopy.fuel'
    ? [
      'crown.canopy.fuel.bed.depth',
      [['FuelBedDepth'], [['finally', 'Dag.fixed', 1]]]
    ]
    : [
        `${prefix}.bed.depth`,
        [
          ['FuelBedDepth'],
          [
            [
              'finally',
              'FuelParticle.selectByDomain',
              `${prefix}.model.domain`,
              `${prefix}.model.behave.parms.depth`,
              `${prefix}.model.chaparral.parms.observed.depth`,
              `${prefix}.model.palmettoGallberry.derived.depth`,
              `${prefix}.model.westernAspen.derived.depth`
            ]
          ]
        ]
    ]
}

export function bed (prefix) {
  return [
    bedFuelDepth(prefix),
    [
      `${prefix}.bed.bulkDensity`,
      [
        ['FuelBedBulkDensity'],
        [
          [
            'finally',
            'Calc.divide',
            `${prefix}.bed.ovendryLoad`,
            `${prefix}.bed.depth`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.heatOfPreignition`,
      [
        ['FuelBedHeatOfPreignition'],
        [
          [
            'finally',
            'Calc.sumOfProducts',
            `${prefix}.bed.dead.surfaceArea.weightingFactor`,
            `${prefix}.bed.live.surfaceArea.weightingFactor`,
            `${prefix}.bed.dead.heatOfPreignition`,
            `${prefix}.bed.live.heatOfPreignition`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.heatSink`,
      [
        ['FuelHeatSink'],
        [
          [
            'finally',
            'FuelBed.heatSink',
            `${prefix}.bed.heatOfPreignition`,
            `${prefix}.bed.bulkDensity`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.noWindNoSlope.spreadRate`,
      [
        ['FireSpreadRate'],
        [
          [
            'finally',
            'FuelBed.noWindNoSlopeSpreadRate',
            `${prefix}.bed.reactionIntensity`,
            `${prefix}.bed.propagatingFluxRatio`,
            `${prefix}.bed.heatSink`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.ovendryLoad`,
      [
        ['FuelOvendryLoad'],
        [
          [
            'finally',
            'Calc.sum',
            `${prefix}.bed.dead.ovendryLoad`,
            `${prefix}.bed.live.ovendryLoad`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.open.windSpeedAdjustmentFactor`,
      [
        ['WindSpeedAdjustmentFactor'],
        [
          [
            'finally',
            'FuelBed.openWindSpeedAdjustmentFactor',
            `${prefix}.bed.depth`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.packingRatio`,
      [
        ['FuelBedPackingRatio'],
        [
          [
            'finally',
            'FuelBed.packingRatio',
            `${prefix}.bed.dead.volume`,
            `${prefix}.bed.live.volume`,
            `${prefix}.bed.depth`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.packingRatio.optimum`,
      [
        ['FuelBedPackingRatio'],
        [
          [
            'finally',
            'FuelBed.optimumPackingRatio',
            `${prefix}.bed.surfaceAreaToVolumeRatio`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.packingRatio.ratio`,
      [
        ['FuelBedPackingRatio'],
        [
          [
            'finally',
            'Calc.divide',
            `${prefix}.bed.packingRatio`,
            `${prefix}.bed.packingRatio.optimum`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.propagatingFluxRatio`,
      [
        ['FirePropagatingFluxRatio'],
        [
          [
            'finally',
            'FuelBed.propagatingFluxRatio',
            `${prefix}.bed.surfaceAreaToVolumeRatio`,
            `${prefix}.bed.packingRatio`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.reactionIntensity`,
      [
        ['FireReactionIntensity'],
        [
          [
            'finally',
            'Calc.sum',
            `${prefix}.bed.dead.reactionIntensity`,
            `${prefix}.bed.live.reactionIntensity`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.reactionVelocityExponent`,
      [
        ['Factor'],
        [
          [
            'finally',
            'FuelBed.reactionVelocityExponent',
            `${prefix}.bed.surfaceAreaToVolumeRatio`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.reactionVelocityMaximum`,
      [
        ['FireReactionVelocity'],
        [['finally', 'FuelBed.reactionVelocityMaximum', `${prefix}.bed.savr15`]]
      ]
    ],
    [
      `${prefix}.bed.reactionVelocityOptimum`,
      [
        ['FireReactionVelocity'],
        [
          [
            'finally',
            'FuelBed.reactionVelocityOptimum',
            `${prefix}.bed.packingRatio.ratio`,
            `${prefix}.bed.reactionVelocityMaximum`,
            `${prefix}.bed.reactionVelocityExponent`
          ]
        ]
      ]
    ],
    [
      `${prefix}.bed.surfaceAreaToVolumeRatio`,
      [
        ['FuelSurfaceAreaToVolumeRatio'],
        [
          [
            'finally',
            'Calc.sumOfProducts',
            `${prefix}.bed.dead.surfaceArea.weightingFactor`,
            `${prefix}.bed.live.surfaceArea.weightingFactor`,
            `${prefix}.bed.dead.surfaceAreaToVolumeRatio`,
            `${prefix}.bed.live.surfaceAreaToVolumeRatio`
          ]
        ]
      ]
    ],
    [`${prefix}.bed.savr15`,
      [['Factor'],
        [['finally', 'FuelBed.savr15', `${prefix}.bed.surfaceAreaToVolumeRatio`]]
      ]
    ],
    [
      `${prefix}.bed.surfaceArea`,
      [
        ['FuelSurfaceArea'],
        [
          [
            'finally',
            'Calc.sum',
            `${prefix}.bed.dead.surfaceArea`,
            `${prefix}.bed.live.surfaceArea`
          ]
        ]
      ]
    ]
  ]
}
