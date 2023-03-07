module.exports = function () {
	$.gulp.task('inc', () => {
		return $.gulp.src('./src/static/inc/**/*.*')
			.pipe($.gulp.dest('./build/inc/'));
	});
};
