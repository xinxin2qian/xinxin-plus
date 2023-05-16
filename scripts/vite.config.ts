import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { rootResolve, packagesResolve, getExternalList } from './helper';
// const input = packagesResolve(`./${module}/index.ts`);
const input = packagesResolve('./index.ts');
export default defineConfig({
  build: {
    rollupOptions: {
      external: getExternalList(),
      input,
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: rootResolve('./dist/es/')
        },
        {
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: rootResolve('./dist/lib/')
        }
      ]
    },
    lib: {
      entry: input,
      name: '@xinxin-plus'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: packagesResolve(),
      outputDir: [rootResolve('./dist/types')],
      // 指定使用的tsconfig.json为我们整个项目根目录下
      tsConfigFilePath: rootResolve('./tsconfig.json')
    })
  ],
  resolve: {
    alias: [
      {
        find: '@xinxin-plus',
        replacement: packagesResolve()
      }
    ]
  }
});
