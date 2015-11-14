/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('concat-js', function(){
    return gulp.src(['bower_components/angular/angular.js', 'bower_components/ngCordova/dist/ng-cordova.js'])
        .pipe(concat('angular_concat.js'))
        .pipe(gulp.dest('www/js/'));
});
