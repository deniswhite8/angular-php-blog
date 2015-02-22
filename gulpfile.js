var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    livereload    = require('gulp-livereload'),
    sourcemaps    = require('gulp-sourcemaps'),
    plumber       = require('gulp-plumber');

gulp.task('sass', function () {
  gulp.src('public/scss/main.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css'))
  .pipe(livereload());
});

gulp.task('default', ['sass'], function(){
  livereload.listen();
  gulp.watch('public/**/*.scss', ['sass']);
});