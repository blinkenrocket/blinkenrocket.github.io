(function() {
  var ghPages, gulp;

  gulp = require('gulp');

  ghPages = require('gulp-gh-pages');

  gulp.task('deploy', function() {
    return gulp.src('./public/**/*').pipe(ghPages({
      remoteUrl: 'git@github.com:blinkenrocket/blinkenrocket.github.io.git',
      branch: 'master'
    }));
  });

}).call(this);
