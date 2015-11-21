/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'Concat'
*/
gulp.task('concat-js', function(){
    return gulp.src(['bower_components/angular/angular.min.js', 'bower_components/ngCordova/dist/ng-cordova.min.js'])
        .pipe(concat('angular-ngcordova.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js/'));
});
