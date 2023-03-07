const svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    replace = require('gulp-replace'),
    svgPath = {
        "input": "./src/static/images/svg/*.svg",
        "output": "./build/images/svg/"
    };

module.exports = function () {
    $.gulp.task('svg', () => {
        return $.gulp.src(svgPath.input)
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(replace('&gt;', '>'))
            .pipe(svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest(svgPath.output));
    });
};
