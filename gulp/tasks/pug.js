let plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    pugbem = require('gulp-pugbem'),
    cached = require('gulp-cached'),
    replace = require('gulp-replace')
pugbem.b = true
const currentTime = new Date().getTime()

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./src/pug/*.pug')
            .pipe(plumber())
            .pipe(pug({
                locals: {
                    site: JSON.parse($.fs.readFileSync('site.config.json', 'utf8'))
                },
                pretty: true,
                plugins: [pugbem]
            }))
            .pipe(plumber.stop())
            .pipe(cached('pug'))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload)
    })
    $.gulp.task('pug:min', () => {
        return $.gulp.src('./src/pug/*.pug')
            .pipe(plumber())
            .pipe(pug({
                pretty: false,
                plugins: [pugbem]
            }))
            .pipe(plumber.stop())
            .pipe(cached('pug'))
            .pipe(replace(/src="js\/main\.js"/, `src="js/main.min.js?=${currentTime}"`))
            .pipe(replace(/href="css\/styles\.css"/, `href="css/styles.min.css?=${currentTime}"`))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload)
    })
}
