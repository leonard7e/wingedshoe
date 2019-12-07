var gulp = require("gulp");

var webpack = require("gulp-webpack");
gulp.task('ts', function() {
  return gulp.src('src/typescript/index.ts')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(gulp.dest('static/js-gen/'));
});

var postcss = require('gulp-postcss');

gulp.task('postcss', function () {
    var sourcemaps = require('gulp-sourcemaps');
    return gulp.src('./src/postcss/wshoe.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
          require('postcss-import'),
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css-gen'));
});

var livereload = require('gulp-livereload');
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['./src/typescript/*.ts','./src/typescript/**/*.ts'], ['ts']);
  gulp.watch(['./src/postcss/*.css', './src/postcss/**/*.css'], ['postcss']);
})

// Task – Default
gulp.task('default', ['watch']);
