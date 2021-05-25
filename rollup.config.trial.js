import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: ['src/index.js'],
    plugins: [nodeResolve()],
    output: {
      file: 'dist/umd/fire-behavior-simulator.js',
      format: 'umd',
      name: 'fire',
      esModule: false,
      plugins: [terser()]
    }
  },
  {
    input: {
      index: 'src/index.js',
      dag: 'src/dag/index.js',
      genome: 'src/fire-behavior-genome/index.js',
      models: 'src/fire-behavior-models/index.js',
      variants: 'src/fire-behavior-variants/index.js',
      uom: 'src/uom/index.js',
      variantCore: 'src/variant/index.js'
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      }
    ]
  }
]
