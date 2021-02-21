const n = 100000000
class A {
  constructor(x) {this.x = x}
  isC() { return this.x === 'c' }
}
class B extends A { constructor() { super('b') } }
class C extends B { constructor() { super(); this.x = 'c' } }
const c = new C()

function timing0() {
  let j = 0
  for (let i=0; i<n; i++) { j++ }
  return j
}

function timing1() {
  let j = 0, x = 1
  for (let i=0; i<n; i++) { if (typeof x === 'number') j++ }
  return j
}

function timing2() {
  let j = 0, x = 'x'
  for (let i=0; i<n; i++) {if (typeof x === 'string') j++ }
  return j
}

function timing3() {
  let j = 0
  for (let i=0; i<n; i++) {if (typeof c === 'object') j++ }
  return j
}

function timing4() {
  let j = 0
  for (let i=0; i<n; i++) {if (c instanceof C) j++ }
  return j
}

function timing5() {
  let j = 0
  for (let i=0; i<n; i++) {if (c instanceof B) j++ }
  return j
}

function timing6() {
  let j = 0
  for (let i=0; i<n; i++) {if (c instanceof A) j++ }
  return j
}

function timing7() {
  let j = 0
  for (let i=0; i<n; i++) {if (c.isC()) j++ }
  return j
}

let t0 = new Date(); let j0 = timing0(); t0 = new Date() - t0
let t1 = new Date(); let j1 = timing1(); t1 = new Date() - t1
let t2 = new Date(); let j2 = timing2(); t2 = new Date() - t2
let t3 = new Date(); let j3 = timing3(); t3 = new Date() - t3
let t4 = new Date(); let j4 = timing4(); t4 = new Date() - t4
let t5 = new Date(); let j5 = timing5(); t5 = new Date() - t5
let t6 = new Date(); let j6 = timing6(); t6 = new Date() - t6
let t7 = new Date(); let j7 = timing7(); t7 = new Date() - t7
console.log(`No test:             `, t0, j0)
console.log(`typeof x === 'number'`, t1, j1)
console.log(`typeof x === 'string'`, t2, j2)
console.log(`typeof x === 'object'`, t3, j3)
console.log(`c instanceof C       `, t4, j4)
console.log(`c instanceof B       `, t5, j5)
console.log(`c instanceof A       `, t6, j6)
console.log(`c.isC()              `, t7, j7)