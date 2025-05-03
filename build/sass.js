const gulpSass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const scssPath = '_scss/*.scss';
const destPath = '_site/css';

module.exports = gulp => {
  gulp.task('sass', () => {
    return gulp
      .src(scssPath)
      .pipe(
        gulpSass({ 
          includePaths: ['scss'],
          outputStyle: 'expanded',
        }).on('error', gulpSass.logError) 
      )
      .pipe(
        prefix({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false,
        })
      )
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(destPath))
      .pipe(gulp.dest('css'));
  });
};
