export const bp5 = [
  // Inputs
  ['Surface Spread Rate', 'ch/h', 10, 40, 60, 80],
  ['Fire Size at Report', 'ac', 1, 1, 1, 1],
  ['Length-to-width Ratio', 'dl', 2, 2, 2, 2],
  ['Suppression Tactic', 'Head', 'HeadAttack', 'HeadAttack', 'HeadAttack', 'HeadAttack'],
  ['Line Construction Offset', 'ch', 0, 0, 0, 0],
  ['Resource Line Prod Rate', 'ch/h', 100, 100, 100, 100],
  ['Resource Arrival Time', 'h', 1, 1, 1, 1],
  ['Resource Duration', 'h', 8, 8, 8, 8],
  ['Resource Base Cost', '$', 1000, 1000, 1000, 1000],
  ['Resource Hourly Cost', '$', 2000, 2000, 2000, 2000],
  // Outputs
  ['Fire Area at Initial Attack', 'ac', 9.759005, 90.169511, 188.887756, 323.694993],
  ['Perimeter at Initial Attack', 'ch', 38.182530, 116.062462, 167.982416, 219.902371],
  ['Contain Status', 'str', 'Contained', 'Contained', 'Esacped', 'Escaped'],
  ['Time from Report', 'h', 1.403422, 2.519652, 1, 1],
  ['Fireline Constructed', 'ch', 40.332478, 151.952718, 0, 0],
  ['Contained Area', 'ac', 11.372836, 167.917428, -1, -1],
  ['Number of Resources Used', 'int', 1, 1, 0, 0],
  ['Cost of Resources Used', '$', 1806.84367, 4039.303607, 0, 0]
]
