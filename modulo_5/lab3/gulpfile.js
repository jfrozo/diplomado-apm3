var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css');

gulp.task('minify-css',  function(){
  return gulp.src('css/styles.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/'));
});

gulp.task('rename-css',  function(){
  return gulp.src('dist/styles.css')
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('dist/'));
});

gulp.task('concat-js', function(){
    return gulp.src(['js/lab3.js', 'js/jquery-1.11.3.min.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('all',['minify-css','concat-js','rename-css'],function(){});