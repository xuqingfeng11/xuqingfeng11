'use strict';
var gulp=require('gulp');
var less=require('gulp-less');
// var css=require('gulp-cssnano');
var cssmin=require('gulp-cssmin');
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");
var imagemin=require("gulp-imagemin");
var clean =require("gulp-clean");
var browserSync=require("browser-sync").create();

gulp.task('hello',function(){
	console.log('HDHDDFE');
});


gulp.task('html',function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});
gulp.task('less',function(){
	gulp.src('src/less/*.less')
	.pipe(less())
	// .pipe(cssnano());
	.pipe(cssmin())
	.pipe(gulp.dest('dist/css/'));
});
gulp.task('js',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
});
gulp.task('image',function(){
	gulp.src('src/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images/'));
});
gulp.task('clean',function(){
	gulp.src('dist/')
	.pipe(clean());
});
gulp.task('dist',['html','less','js','image'])
gulp.task('watch',function(){
	gulp.watch('src/*.html',['html']);
	gulp.watch('src/less/*.less',['less']);
	gulp.watch('src/js/*.js',['js']);
	gulp.watch('src/images/*',['image']);
});
gulp.task('serve',['html','less','js','image','watch'],function(){
	browserSync.init({
		server:{
			baseDir:'./dist'
		},
		port:2017,
	});
});

