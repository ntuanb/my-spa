var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('css/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default',function() {
    gulp.watch('css/**/*.scss', ['styles']);
});
