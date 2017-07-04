var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pump = require('pump'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack-stream'),
    del = require('del'),
    gutil = require('gulp-util');

gulp.task('css', function () {
    gulp.src(['src/sass/*.scss', 'src/sass/*.css'])
        .pipe(sass({
            includePaths: ['src/sass'],
            outputStyle: 'compress'
        }))
        .pipe(prefix(
            "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function () {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('clean-html', function() {
    return del(['dist/index.html']);
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean-js', function(){
    return del(["dist/js/bundle.js"]);
});

gulp.task('js', function(callback) {
    return gulp.src('src/js/index.js')
        .pipe(webpack(require('./webpack.config')))
        .on('error', function(){
            this.emit('end');
        })
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['css', 'js', 'img', 'html'], function() {
    //Just an alias to do all the building.
});

gulp.task('default', ['build'], function () {
    browserSync.init({
        server: 'dist'
    })
    gulp.watch("src/sass/**/*.scss", ['css', browserSync.reload]);
    gulp.watch("src/js/**/*.js", ['js', browserSync.reload]);
    gulp.watch("src/img/*", ['img', browserSync.reload]);
    gulp.watch('src/*.html', ['html', browserSync.reload]);
});