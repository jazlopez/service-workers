"use strict";

var
    path = require('path'),

    gulp = require('gulp'),

    watch = require('gulp-watch'),

    importCss = require('gulp-import-css'),

    connect = require('gulp-connect');

gulp.task('connect', function(){

    connect.server({

        root: path.dirname('./..'),

        livereload: true
    });
});

gulp.task('watch', function () {


    gulp.watch('assets/**/*.css', ['import_stylesheets']);

});


gulp.task('import_stylesheets', function() {

    gulp.src(['assets/**/*.css'])

        .pipe(importCss())

        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['connect', 'watch']);