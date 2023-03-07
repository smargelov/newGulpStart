const imgPATH = {
        "input": ["./src/static/images/**/*.{png,jpg,gif,svg}",
            '!./src/static/images/svg/*'
        ],
        "output": "./build/images/"
    };

module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.output));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.output));
    });

};
