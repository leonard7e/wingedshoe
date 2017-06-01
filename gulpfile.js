var gulp = require("gulp");
// Load modules here
var ts = require("gulp-typescript");
var postcss = require('gulp-postcss');

// Task – TypeScript
var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./static/js-gen"));
});

// Task – PostCSS

// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');

gulp.task('postcss', function () {
    return gulp.src('./src/postcss/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./static/css'));
});

// Task – Default
gulp.task('default', ['typescript','postcss']);
