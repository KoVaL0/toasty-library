import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import svgr from '@svgr/rollup';
import path from 'path';

const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.js',
  output: {
    name: 'index',
    file: 'dist/index.js',
    format: 'esm',
    globals: { react: 'React', 'react-dom': 'ReactDom' },
  },
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      extract: true,
      sourceMap: true,
    }),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    svgr(),
    sass(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, './src'),
        },
        {
          find: '@assets',
          replacement: path.resolve(projectRootDir, './public/assets'),
        },
      ],
    }),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
