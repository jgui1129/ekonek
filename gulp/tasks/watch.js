var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){


	//auto reload the project whenever html changes
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs" 
		}
	});

	watch('./docs/index.html',function(){
		gulp.start('html');
	});

	//reload changes on the css using browserSync - 2nd part
	watch('./docs/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});

});

gulp.task('html',function(){
	browserSync.reload();
});

//reload changes on the css using browserSync - 1st part
gulp.task('cssInject',['styles'],function(){
	return gulp.src('./docs/temp/styles/styles.css')
	.pipe(browserSync.stream());
});