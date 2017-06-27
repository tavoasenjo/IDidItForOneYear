// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

// gulp.task('styles', function(){
// 	gulp.src('sass/**/*.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('./css/'));
// });

// gulp.task('browser-sync', function(){
// 	browserSync.init({
// 		server: {
// 			baseDir: "./"
// 		}
// 	});
// });

// gulp.task('default', function(){
// 	gulp.watch('sass/**/*.scss', ['styles', 'browser-sync']);
// });






// set the path of plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

// Set up the tasks styles
gulp.task('styles', function() {
     gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(reload({stream: true}));
});

// set up task watch
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('*.html', reload);
});

// set up task for jshint - javascript files
// gulp.task('jshint', function() {
//   return gulp.src('js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'))
//     .pipe(reload({stream: true}));
// });

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"}
    });
});

gulp.task('default', ['browser-sync','styles', 'watch']);