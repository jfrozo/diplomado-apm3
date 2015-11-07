var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin');

gulp.task('html-min1', function() {
  return gulp.src(['index.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('distx'))
});

gulp.task('html-min', function() {
  return gulp.src(['index.html', 'views/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('distx'))
});


gulp.task('js-min', function(){
	gulp.src(['js/app.js', 'js/lab*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('distx'))
});

gulp.task('angular-concat', function(){
	gulp.src(['bower_components/angular/angular.min.js','bower_components/angular-route/angular-route.min.js'])
		.pipe(concat('lab2b.min.js'))
		.pipe(uglify({mangle:false}))
		.pipe(gulp.dest('distx/'))
});

gulp.task('default',['html-min','js-min','angular-concat'], function(){});