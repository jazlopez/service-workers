var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function() {


    livereload.listen();
    gulp.watch(['*/**/*.html', '*/**/*.js'], function(){

       pipe(livereload());
    });





});