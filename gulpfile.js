var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var SRC = 'src/' + pkg.name + '.js';
var DEST = 'dist/';
var builds = [];

gulp.task('build:es6', function() {
    return gulp.src(SRC)
        .pipe(gulp.dest(DEST));
});

['common', 'system', 'amd', 'umd'].forEach(function(format) {
    var name = 'build:' + format;
    builds.push(name);
    gulp.task(name, function() {
        return gulp.src(SRC)
            .pipe(babel({ modules: format }))
            .pipe(rename({ suffix: '.' + format }))
            .pipe(gulp.dest(DEST))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest(DEST));
    });
});

gulp.task('build', builds);

gulp.task('default', ['build']);