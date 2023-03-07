module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/static/styles/**/*.sass', $.gulp.series('styles:dev'));
        $.gulp.watch('./src/static/styles/libs.sass', $.gulp.series('styles:lib'));
        $.gulp.watch(['./src/static/images/general/**/*.{png,jpg,jpeg,gif,svg}',
            './src/static/images/content/**/*.{png,jpg,jpeg,gif,svg}'], $.gulp.series('img:dev'));
        $.gulp.watch('./src/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/static/js/**/*.js', $.gulp.series('js:dev'));
    });
};
