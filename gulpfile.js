const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const sync = require('browser-sync').create()
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')



async function html() {
    src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(dest('dist'))
}

function scss() {
    return src("src/scss/**.scss")
    .pipe(sass())
    .pipe(autoprefixer({
browsers: ["last 2 versions"]
    }))
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(dest("dist"))
}

function clear() {
    return del("dist")
}

async function serve() {
    sync.init({
        server: "./dist"
    })
watch("src/**.html", series(html)).on("change", sync.reload)
watch("src/scss**.scss", series(scss)).on("change", sync.reload)

}

exports.build = series(clear, scss, html)
exports.serve = series(clear, scss, html, serve)
exports.clear = clear