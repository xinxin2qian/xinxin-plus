const gulp = require('gulp');
// 0-2.导入gulp-cssmin
const cssmin = require('gulp-cssmin');
// 0-3.导入gulp-autoprefixer
const autoPrefixer = require('gulp-autoprefixer');
// 0-4.导入gulp-sass
const sass = require('gulp-sass')(require('sass'));
const { resolve } = require('path');
const minifySass = () => {
  return gulp
    .src(resolve(__dirname, '../packages/theme-chalk/**/*.scss')) //1.找到内容
    .pipe(sass()) // 2.转换scss
    .pipe(autoPrefixer()) // 3.自动添加前缀
    .pipe(cssmin()) // 4.压缩
    .pipe(gulp.dest(resolve(__dirname, '../dist/theme-chalk'))); //5.放到指定目录
};
exports.default = minifySass;
