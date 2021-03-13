import * as Compass from './Compass.js'

const data = [
// ups, asp, sNo, hNo, hUp, sUp
  [  0, 180, 180,   0,   0, 180],
  [ 45, 225, 180,   0, 315, 135],
  [ 90, 270, 180,   0, 270,  90],
  [135, 315, 180,   0, 225,  45],
  [180,   0, 180,   0, 180,   0],
  [225,  45, 180,   0, 135, 315],
  [270,  90, 180,   0,  90, 270],
  [315, 135, 180,   0,  45, 225],
  [360, 180, 180,   0,   0, 180],

  [  0, 180,  45, 225, 225,  45],
  [ 45, 225,  45, 225, 180,   0],
  [ 90, 270,  45, 225, 135, 315],
  [135, 315,  45, 225,  90, 270],
  [180,   0,  45, 225,  45, 225],
  [225,  45,  45, 225,   0, 180],
  [270,  90,  45, 225, 315, 135],
  [315, 135,  45, 225, 270,  90],
  [360, 180,  45, 225, 225,  45],

  [  0, 180, 315, 135, 135, 315],
  [ 45, 225, 315, 135,  90, 270],
  [ 90, 270, 315, 135,  45, 225],
  [135, 315, 315, 135,   0, 180],
  [180,   0, 315, 135, 315, 135],
  [225,  45, 315, 135, 270,  90],
  [270,  90, 315, 135, 225,  45],
  [315, 135, 315, 135, 180,   0],
  [360, 180, 315, 135, 135, 315],
]
test('1: Compass wind-slope directions', () => {
  data.forEach(([upslope, aspect, windSrcNo, windHdgNo, windHdgUp, windSrcUp]) => {
    expect(Compass.opposite(upslope)).toEqual(aspect)
    expect(Compass.opposite(windSrcNo)).toEqual(windHdgNo)
    expect(Compass.opposite(windSrcUp)).toEqual(windHdgUp)
    expect(Compass.windHeadingFromUpslope(upslope, windSrcNo)).toEqual(windHdgUp)
    expect(Compass.windSourceFromNorth(upslope, windHdgUp)).toEqual(windSrcNo)
  })
})
