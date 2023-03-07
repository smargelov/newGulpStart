const uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rollup = require('@rollup/stream'),

    babel = require('@rollup/plugin-babel'),
    commonjs = require('@rollup/plugin-commonjs'),
    nodeResolve = require('@rollup/plugin-node-resolve'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        'input': './src/static/js/',
        'output': './build/js/'
    }

let cache

module.exports = function () {
    $.gulp.task('js:dev', () => {
        return rollup({
            input: scriptsPATH.input + 'main.js',
            plugins: [babel({
                presets: ['@babel/env']
            }), commonjs(), nodeResolve()],
            cache: cache,
            output: {
                format: 'iife',
                sourcemap: true
            }
        })
            .on('bundle', function (bundle) {
                cache = bundle
            })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe($.gulp.dest(scriptsPATH.output))
            .pipe($.browserSync.reload({stream: true}))
    })

    $.gulp.task('js:build', () => {
        return rollup({
            input: scriptsPATH.input + 'main.js',
            plugins: [babel({
                presets: ['@babel/env']
            }), commonjs(), nodeResolve()],
            output: {
                format: 'iife',
                sourcemap: false
            }
        })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe($.gulp.dest(scriptsPATH.output))
    })

    $.gulp.task('js:build-min', () => {
        return rollup({
            input: scriptsPATH.input + 'main.js',
            plugins: [babel({
                presets: ['@babel/env']
            }), commonjs(), nodeResolve()],
            output: {
                format: 'iife',
                sourcemap: false
            }
        })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.output))
    })
}
