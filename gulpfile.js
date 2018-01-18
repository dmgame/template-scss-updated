let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);