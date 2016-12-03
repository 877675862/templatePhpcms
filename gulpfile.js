/**
 * Created by hui on 2016/12/2.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var concatFiles = require('gulp-concat');
var connect = require('gulp-connect');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var uglify = require('gulp-uglify');
var renames = require('gulp-rename');
var htmlReplace = require('gulp-html-replace');
var cssMin = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');

// server
gulp.task('server',function(){
    connect.server({
        name:'templatephpcms',
        port:8080,
        root:'newtmp',
        livereload:true
    });
});

gulp.task('style',function(){
    gulp.src('src/scss/main.less')
        .pipe(less())
        .pipe(gulp.dest('statics/css'))
        .pipe(connect.reload())
});
gulp.task('script',function(){
    gulp.src('src/script/main.js')
        .pipe(gulp.dest('statics/js'))
        .pipe(connect.reload())
});
/*
*gulp.task('html-Rep',function(){
*    gulp.src('')
*        .pipe()      
*});
*/ 
