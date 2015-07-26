var gulp = require('gulp');

// plugins
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');

// default path
var src = "./src";
var dst = "./assets";

// lint JS
gulp.task('lint', function () {
    var jsSrc = src + '/js/*.js';

    gulp.src(jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// minify image
gulp.task('miny-img', function () {
    var imgSrc = src + '/img/**/*',
        imgDst = dst + '/img';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

// minify HTML pages
gulp.task('miny-html', function () {
    var htmlSrc = src + '/html/*.html',
        htmlDst = './';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));
});

// JS strip debugging and minify
gulp.task('scripts', function () {
    var jsSrc = src + '/js/*.js',
        jsDst = dst + '/js';

    gulp.src(jsSrc)
        .pipe(concat('main.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

// minify CSS
gulp.task('styles', function () {
    var cssSrc = src + '/css/*.css',
        cssDst = dst + '/css';

    gulp.src(cssSrc)
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDst));
});

// convert SASS to CSS
gulp.task('sass', function () {
    var sassSrc = src + '/sass/*.scss',
        sassDst = src + '/css';

    gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(sassDst));
});

// watch SASS changes
gulp.task('sass:watch', function () {
    gulp.watch(src + '/sass/*.scss', ['sass']);
});

// default task
gulp.task('default', [
    'miny-img',
    'miny-html',
    'lint',
    'scripts',
    'sass',
    'styles',
], function () {
    // watch HTML changes
    gulp.watch(src + '/hmtl/*.html', ['miny-html']);

    // watch JS changes
    gulp.watch(src + '/js/*.js', ['lint', 'scripts']);

    // watch SASS changes
    gulp.watch(src + '/sass/*.scss', ['sass']);

    // watch CSS changes
    gulp.watch(src + '/css/*.css', ['styles']);
});
