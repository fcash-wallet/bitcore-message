'use strict';

var gulp = require('gulp');
var fcashTasks = require('fcash-build');

fcashTasks('message');

gulp.task('default', ['lint', 'coverage']);
