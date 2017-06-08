var gulp = require("gulp");

var webpack = require("gulp-webpack");
gulp.task('ts', function() {
  return gulp.src('src/typescript/wingedshoe.tsx')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(gulp.dest('static/js-gen/'));
});

// Task – TypeScript
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");
//
// gulp.task("ts", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("./static/js-gen"));
// });

// Task – PostCSS

// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');

var postcss = require('gulp-postcss');

gulp.task('postcss', function () {
    var sourcemaps = require('gulp-sourcemaps');
    return gulp.src('./src/postcss/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ require('precss'), require('autoprefixer') ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css'));
});

var livereload = require('gulp-livereload');
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/typescript/*.tsx', ['ts']);
  gulp.watch('./src/postcss/*.css', ['postcss']);
})

// Task – Default
gulp.task('default', ['watch']);
