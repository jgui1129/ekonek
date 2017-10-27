var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),  // pre processor similar to sass
autoprefixer = require('autoprefixer'), // responsible for adding browser prefixes
cssvars = require('postcss-simple-vars'), // can now use variables
nested = require('postcss-nested'), // allow to nest css styles 
cssimport = require('postcss-import'), // allow to import file
mixins = require('postcss-mixins'); // allow using mixins for mediaquery

gulp.task('styles',function(){

	return gulp.src('./docs/assets/styles/styles.css')
		.pipe(postcss([cssimport, mixins, nested, cssvars, autoprefixer]))
		.on('error',function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./docs/temp/styles'));

});


