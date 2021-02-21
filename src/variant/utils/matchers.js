const bar = '        : 1.23456789012'

/**
  A Jest matcher specifically for Dag Node value testing

  Use as follows:
  import * as DagJest from '../jest/matchers.js'
  const value = DagJest.value
  expect.extend({ value })
  expect(nodeRef).value(expected, significantDigits)
  expect(dag.nodeValue(nodeIdxOrKey)).value(expected, significantDigits)
*/
export const sig = function (received, expected, precision, msg = '') {
  if (typeof expected === 'number' && typeof received === 'number') {
    const exp = expected.toExponential(precision)
    const rec = received.toExponential(precision)
    const pass = exp === rec
    if (pass) {
      return {
        message: () =>
          `${msg} should NOT agree to ${precision} digits:\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `${msg} should agree to ${precision} digits\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: false
      }
    }
  } else {
    const pass = expected === received
    if (pass) {
      return {
        message: () =>
          `${msg} should NOT be equal\nexpected: ${expected}\nreceived: ${received}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `${msg} should be equal\nexpected: ${expected}\nreceived: ${received}\n${bar}`,
        pass: false
      }
    }
  }
}

/**
  A Jest matcher specifically for Dag Node value testing

  Use as follows:
  import * as DagJest from '../jest/matchers.js'
  const value = DagJest.value
  expect.extend({ value })
  expect(nodeValue).value(expected, significantDigits)
  expect(dag.nodeValue(nodeIdx)).value(expected, significantDigits)
*/
export const value = function (node, expected, prec = 12) {
  const precision = prec === null ? 11 : prec - 1
  if (typeof expected === 'number') {
    const exp = expected.toExponential(precision)
    const rec = node.value.toExponential(precision)
    const pass = exp === rec
    if (pass) {
      return {
        message: () =>
          `'${node.key}' should NOT be equal\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `'${node.key}' should be equal\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: false
      }
    }
  } else {
    const pass = expected === node.value
    if (pass) {
      return {
        message: () =>
          `'${node.key}' should NOT be equal\nexpected: ${expected}\nreceived: ${node.value}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `'${node.key}' should be equal\nexpected: ${expected}\nreceived: ${node.value}\n${bar}`,
        pass: false
      }
    }
  }
}
