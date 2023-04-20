import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  build: {
    //打包后文件目录
    outDir: 'es',
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          // globals: {
          //   vue: 'Vue'
          // },
          // dir: 'dist'
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../xinxin-plus/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../xinxin-plus/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'xinxin-plus'
      // fileName: 'xinxin-plus',
      // formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [vue()]
});
