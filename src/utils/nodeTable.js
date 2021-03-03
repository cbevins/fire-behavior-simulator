const columnHeaders = new Map([
  ['key', 'Key'],
  ['label', 'Label'],
  ['index', 'Index'],
  ['order', 'Order'],
  ['displayValue', 'Display Value'],
  ['displayUnits', 'Display Units'],
  ['nativeValue', 'Native Value'],
  ['nativeUnits', 'Native Units'],
  ['variantKey', 'Variant Key']
])

export function nodeTable (nodes, columns, title='') {
  // Initialize the columns
  const map = new Map()
  columns.forEach(column => {
    const hdr = columnHeaders.get(column)
    map.set(column, {hdr: hdr, wid: hdr.length, str: ''})
  })

  // Determine column widths
  nodes.forEach((node, nodeIdx) => {
    columns.forEach((column, idx) => {
      const col = map.get(column)
      if (column === 'key') {
        col.wid = Math.max(col.wid, node.key().length)
      } else if (column === 'label') {
        col.wid = Math.max(col.wid, node.label().length)
      } else if (column === 'index') {
        col.wid = Math.max(col.wid, nodeIdx.toString().length)
      } else if (column === 'order') {
        col.wid = Math.max(col.wid, node.order().toString().length)
      } else if (column === 'displayValue') {
        col.wid = Math.max(col.wid, node.displayValue().length)
      } else if (column === 'nativeValue') {
        col.wid = Math.max(col.wid, node.value().toString().length)
      } else if (column === 'displayUnits') {
        col.wid = Math.max(col.wid, node.displayUnits().length)
      } else if (column === 'nativeUnits') {
        col.wid = Math.max(col.wid, node.nativeUnits().length)
      } else if (column === 'variantKey') {
        col.wid = Math.max(col.wid, node.variant().key().length)
      }
    })
  })

  // table headers
  let head = ''
  let dash = ''
  columns.forEach(column => {
    const col = map.get(column)
    head += '| ' + col.hdr.padEnd(col.wid+1, ' ')
    dash += '|-'.padEnd(col.wid+3, '-')
  })
  dash += '|\n'
  head += '|\n'
  let ctitle = title.padStart(title.length + ((dash.length - title.length - 2)/2), ' ')
  ctitle = `| ${ctitle.padEnd(dash.length-4, ' ')}|\n`
  let str = `+${'-'.padEnd(dash.length-3,'-')}+\n${ctitle}${dash}${head}${dash}`
  nodes.forEach((node, nodeIdx) => {
    columns.forEach((column, idx) => {
      const col = map.get(column)
      let cell = ''
      if (column === 'key') { cell = node.key() }
      else if (column === 'label') { cell = node.label() }
      else if (column === 'index') { cell = nodeIdx.toString() }
      else if (column === 'order') { cell = node.order().toString() }
      else if (column === 'displayValue') { cell = node.displayValue() }
      else if (column === 'nativeValue') { cell = node.value().toString() }
      else if (column === 'displayUnits') { cell = node.displayUnits() }
      else if (column === 'nativeUnits') { cell = node.nativeUnits() }
      else if (column === 'variantKey') { cell = node.variant().key() }
      str += `| ${cell.padEnd(col.wid+1, ' ')}`
    })
    str += '|\n'
  })
  return str+dash
}
