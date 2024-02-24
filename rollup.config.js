// eslint-disable-next-line import/no-extraneous-dependencies
import babel from '@rollup/plugin-babel';
// eslint-disable-next-line import/no-extraneous-dependencies
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js', // 打包入口
  output: [
    {
      file: 'lib/tiny-chart.js', // 对于 Nodejs，打包成 commonjs
      format: 'cjs',
    },
    {
      file: 'esm/tiny-chart.js', // 对于浏览器，打包成 ES module
      format: 'es',
    },
    {
      file: 'dist/tiny-chart.min.js',
      name: 'sp',
      format: 'umd', // 对于 Nodejs 和浏览器，打包成混合模式
    },
  ],
  plugins: [
    resolve(),
    babel(), // 使用 babel 插件
  ],
};
