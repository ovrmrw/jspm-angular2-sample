'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nightwatch = require('gulp-nightwatch');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const del = require('del');

gulp.task('nightwatch', () => {
  gulp.src('')
    .pipe(plumber())
    .pipe(nightwatch({
      configFile: 'nightwatch.conf.js'
    }));
});

gulp.task('nightwatch:w', ['nightwatch'], () => {
  gulp.watch(['{./,}.bundles/**/*.js', '{./,}test-{e2e,nightwatch}/**/*.js'], ['nightwatch']);
});



gulp.task('tsc', () => {
  const tsProject = ts.createProject('tsconfig.json', { noExternalResolve: true });
  return tsProject.src(['src/**/*.ts'])
    .pipe(plumber())
    // .pipe(ignore.include(['{./,}src/**/*.ts']))
    // .pipe(ignore.exclude(['{./,}test-rxjs/spec/**/*.ts']))
    .pipe(ts(tsProject))
    // .pipe(babel())
    .pipe(gulp.dest('./.dest/src'));
});


const rxjsSpecJS = '{./,}.bundles/webpack.bundle.spec.rxjs.js';

gulp.task('mocha:rxjs', [], () => {
  gulp.src(rxjsSpecJS)
    .pipe(plumber())
    // gulp-mocha needs filepaths so you can't have any plugins before it 
    .pipe(mocha({
      useColors: true,
      reporter: 'spec'
    }));
});

gulp.task('mocha:rxjs:w', ['mocha:rxjs'], () => {
  gulp.watch([rxjsSpecJS], ['mocha:rxjs']);
});



////////////////////////////////////////////////////////////////////////////////
// Build for deploy

gulp.task('clean', () => {
  return del(['.awcache', '.dest', '*.log', 'npm-debug.log.*']);
});

const copyPublicFiles = [
  './public/*.{html,css,js}',
  './jspm.config.js',
  './node_modules/core-js/client/shim.min.js',
  './node_modules/babel-polyfill/dist/polyfill.min.js',
  './jspm_packages/npm/firebase@3.2.0/firebase-app.js',
  './jspm_packages/npm/firebase@3.2.0/firebase-auth.js',
];

const copyJspmFiles = [
  './config/firebase.json',
  './jspm_packages/**/*',
]

gulp.task('copy:public', ['clean'], () => {
  return gulp.src(copyPublicFiles)
    .pipe(gulp.dest('./.dest'));
});

gulp.task('copy:jspm', ['copy:public'], () => {
  return gulp.src(copyJspmFiles, { base: '.' })
    .pipe(gulp.dest('./.dest'));
});

gulp.task('copy:src', ['copy:jspm'], () => {
  return gulp.src(['./src/**/*'], { base: '.' })
    .pipe(gulp.dest('./.dest'));
});

gulp.task('build', ['copy:src']);


gulp.task('copy:w', [], () => {
  return gulp.src(copyPublicFiles)
    .pipe(gulp.dest('./.dest'));
});

gulp.task('build:w', [], () => {
  gulp.watch([copyPublicFiles], ['copy:w']);
});
