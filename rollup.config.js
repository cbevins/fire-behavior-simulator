import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const dist = 'dist'
const packageName = 'bundle'
const bundle = `${dist}/${packageName}`

// const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: `${bundle}.esm.js`,
        format: 'esm'
      },
      {
        file: `${bundle}.esm.min.js`,
        format: 'esm',
        plugins: [terser()]
      },
      {
        file: `${bundle}.es5.js`,
        format: 'esm',
        plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
      },
      {
        file: `${bundle}.cjs.js`,
        format: 'cjs'
      },
      {
        file: `${bundle}.cjs.min.js`,
        format: 'cjs',
        plugins: [terser()]
      }
    ],
    plugins: [
      resolve(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ]
  }
]
