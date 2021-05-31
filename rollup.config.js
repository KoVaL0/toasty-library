import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import path from 'path';

const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.js',
  output: {
    name: 'index',
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    postcss({
      extract: true,
      sourceMap: true,
    }),
    babel({ exclude: 'node_modules/**' }),
    svgr(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, './src'),
        },
        {
          find: '@components',
          replacement: path.resolve(projectRootDir, './src/components'),
        },
        {
          find: '@core',
          replacement: path.resolve(projectRootDir, './src/core'),
        },
        {
          find: '@hook',
          replacement: path.resolve(projectRootDir, './src/hook'),
        },
        {
          find: '@assets',
          replacement: path.resolve(projectRootDir, './public/assets'),
        },
      ],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve({
      browser: true,
    }),
  ],
};
