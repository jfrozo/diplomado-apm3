var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    htmlmin = require('gulp-htmlmin');

gulp.task('html-min', function() {
  return gulp.src(['index.html', 'views/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});


gulp.task('js-min', function(){
	gulp.src(['js/app.js', 'js/lab*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
});

gulp.task('default',['html-min','js-min'], function(){});