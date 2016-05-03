"use strict";

  var jshint = require('gulp-jshint');
  var watchify = require('watchify');
  var browserify = require('browserify');
  var gulp = require('gulp');
  var source = require('vinyl-source-stream');
  var buffer = require('vinyl-buffer');
  var gutil = require('gulp-util');
  var sourcemaps = require('gulp-sourcemaps');
  var assign = require('lodash.assign');
  var cache = require('gulp-cache');

  var customOpts = {
    entries: ['./javascripts/main.js'],
      debug: true
    };
  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));
          gulp.task('bundle', bundle);
          gulp.task('default', ['bundle', 'lint', 'watch']);
          gulp.task('lint', function() {
            return gulp.src('./javascripts/**/*.js')
              .pipe(jshint())
              .pipe(jshint.reporter('jshint-stylish'));
            });

          gulp.task('watch', function() {
          gulp.watch(['./javascripts/**/*.js'], ['lint', 'bundle']);
            });
          gulp.task('clear', function(done){
            return cache.clearAll(done);
          })



  var onError = function ( err ) {
    gutil.log( gutil.colors.green( err.message ) );
      this.emit( 'end' );
      };

  function bundle() {
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist'));
    }