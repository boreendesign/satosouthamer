var  gulp         = require("gulp"),
     sass         = require("gulp-sass"),
     cssnano         = require("gulp-cssnano"),
     responsive          = require("gulp-responsive"),
     imagemin      = require('gulp-imagemin'),
     mozjpeg      = require('imagemin-mozjpeg')

function img(){
return gulp
  .src(["./resources/images/**/**.*"])
  .pipe(responsive({
    "**/*": [{
      width: 480,
      rename: {suffix: "-sm"},
    },{
      width: 800,
      rename: {suffix: "-lg"},
    },{
      width: 675,
    }],
  }, {
    silent: false      // Don't spam the console
  }))
  .pipe(gulp.dest("./images")
)

}


function imgminify(){
  return gulp
  .src(["./images//**/**.*"])
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo(),
      mozjpeg(),
    ]))
    .pipe(gulp.dest("./images"))
}


const build = gulp.series(img,imgminify);

exports.default =build
