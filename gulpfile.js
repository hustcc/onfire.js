const fs = require('fs');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

gulp.task('mini', () => (
  gulp.src('src/onfire.js')
  .pipe(rename("onfire.js"))
  .pipe(gulp.dest('dist/'))
  .pipe(uglify())    //uglify
  .pipe(rename("onfire.min.js"))
  .pipe(gulp.dest('dist/'))
));