export const bp6Surface = {
  label: 'Surface Fire Spread',
  moduleKey: 'module.surfaceFire',
  parent: null,
  tag: 'SURFACE',
  output: [
    {
      label: 'Basic',
      nodes: [
        {
          label: 'Surface Fire Spread Rate',
          nodeKey: 'surface.weighted.fire.spreadRate'
        }, {
          label: 'Surface Fire Heat per Unit Area',
          nodeKey: 'surface.weighted.fire.heatPerUnitArea'
        }, {
          label: 'Surface Fireline Intensity',
          nodeKey: 'surface.weighted.fire.firelineIntensity'
        }, {
          label: 'Surface FlameLength',
          nodeKey: 'surface.weighted.fire.flameLength'
        }, {
          label: 'Surface Reaction Intensity',
          nodeKey: 'surface.weighted.fire.reactionIntensity'
        }, {
          label: 'Surface Fire Direction of Maximum Spread (from Upslope)',
          nodeKey: 'surface.weighted.fire.headingFromUpslope'
        }, {
          label: 'Surface Fire Direction of Maximum Spread (from North)',
          nodeKey: 'surface.weighted.fire.headingFromNorth'
        }, {
          label: 'Surface Spread Distance',
          nodeKey: 'surface.fire.ellipse.head.spread.distance'
        }
      ]
    }, {
      label: 'Wind',
      nodes: [
        {
          label: 'Midflame Wind Speed',
          nodeKey: 'surface.weighted.fire.wind.speed.atMidflame'
        }, {
          label: 'Wind Adjustment Factor',
          nodeKey: 'surface.weighted.fire.windSpeedAdjustmentFactor'
        }, {
          label: 'Crown Ratio',
          nodeKey: 'site.canopy.crown.ratio'
        }, {
          label: 'Crown Fill Portion',
          nodeKey: 'site.canopy.crown.fill'
        }, {
          label: 'WAF Calculation',
          nodeKey: 'site.canopy.downwind.isOpen'
        }, {
          label: 'Effective Wind Speed',
          nodeKey: 'surface.weighted.fire.effectiveWindSpeed'
        }, {
          label: 'Surface Fire Effective Wind Speed Limit',
          nodeKey: 'surface.weighted.fire.limit.effectiveWindSpeed'
        }, {
          label: 'Effective Wind Max Effective Wind Exceeded?',
          nodeKey: 'surface.weighted.fire.limit.effectiveWindSpeed.exceeded'
        }
      ]
    }, {
      label: 'Slope',
      nodes: []
    }, {
      label: 'Primary Fuel Intermediates',
      nodes: [
        {
          label: 'Characteristic Dead Fuel Moisture',
          nodeKey: 'surface.primary.fuel.bed.dead.moistureContent'
        }, {
          label: 'Characteristic Live Fuel Moisture',
          nodeKey: 'surface.primary.fuel.bed.live.moistureContent'
        }, {
          label: 'Live Fuel Moisture of Extinction',
          nodeKey: 'surface.secondary.fuel.bed.live.extinction.moistureContent'
        }
      ]
    }, {
      label: 'Fuel',
      header: 'Primarily for dynamic standard and custom fuel models:',
      nodes: []
    }, {
      label: 'Aspen',
      header: 'Only for Aspen special case fuel models:',
      nodes: []
    }, {
      label: 'Palmetto-Gallberry',
      header: 'Only for P-G special case fuel models:',
      footer: 'NOTE: Remember to select'
    }, {
      label: 'Chaparral',
      header: 'Only for Chaparral special case fuel models:',
      nodes: []
    }
  ] // output:
}

export const bp6CrownFire = {
  moduleKey: 'module.crownFire',
  bp6: {
    tag: 'CROWN',
    label: 'Crown Fire',
    parent: 'module.surfaceFire'
  }
}

export const bp6CrownSpot = {
  moduleKey: 'module.crownSpot',
  bp6: {
    tag: 'CROWNSPOT',
    label: 'Crown Fire Spotting',
    parent: 'module.crownFire'
  }
}
