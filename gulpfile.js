const gulp = require("gulp");
const { src, series, parallel, dest, watch } = require("gulp");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");

const jsMainPath = "src/js/main.js";
const jsPhotoSlider = "src/js/photoSlider.js";
const jsShowshots = "src/js/showshots.js";

const scssPath = "./scss/*.scss";

/*

Gulp top level functions

----------------------

gulp.task - define tasks

gulp.src() - point to files to use

gulp.dest() - ppint to folder to output

gulp.watch() - watch files and folders for changes

gulp.task('default',gulp.parallel(['message','copyHtml','imageMin','minify','sass']));

*/

function copyHtml() {
  return src("src/*.html").pipe(gulp.dest("dist"));
}
function imgMin() {
  return src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
}

function jsMain() {
  return src(jsMainPath).pipe(terser()).pipe(dest("dist/js"));
}
function jsSlider() {
  return src(jsPhotoSlider).pipe(terser()).pipe(dest("dist/js"));
}
function jsShowSlider() {
  return src(jsShowshots).pipe(terser()).pipe(dest("dist/js"));
}

function style() {
  return src(scssPath)
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("dist/css"));
}

function cssMin() {}

exports.imgMin = imgMin;
exports.copyHtml = copyHtml;
exports.jsMain = jsMain;
exports.jsSlider = jsSlider;
exports.jsShowSlider = jsShowSlider;
exports.style = style;

exports.default = parallel(copyHtml, imgMin);

//exports.copyHtml = copyHtml; you would run gulp copyHtml
