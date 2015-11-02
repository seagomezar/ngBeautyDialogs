var gulp = require('gulp'),
	usemin = require('gulp-usemin'),
	minifyCSS = require('gulp-minify-css'),
	concatCss = require('gulp-concat-css'),
	concatJs = require('gulp-concat'),
  notify = require('gulp-notify'),
	uglify = require('gulp-uglify'),
	minifyHTML = require('gulp-minify-html'),
	clean = require('gulp-rimraf'),
	imagemin = require('gulp-imagemin'),
	serve = require('gulp-serve'),
	ngAnnotate = require('gulp-ng-annotate'),
	eslint = require('gulp-eslint')
	browserSync = require('browser-sync').create();

gulp.task('serve', function (){
  browserSync.init({
    notify: false,
    port: 9000,
		server:{
			baseDir: ['']
		}
  });

  gulp.watch([
    '*.html',
    '*.js',
    '*.css'
  ]).on('change', browserSync.reload);
});
