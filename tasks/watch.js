import gulp from 'gulp';
import runSequence from 'run-sequence';
import {get as browserSync} from 'browser-sync';
import watch from 'gulp-watch';

const bs = browserSync('server');

gulp.task('watch', () => {
	global.watch = true;

	watch('app/{styles,blocks}/**/*.styl', () => {
		runSequence(['styles', 'styles:lint'], () => bs.reload('assets/styles/app.min.css'));
	});
	watch('app/resources/**/*', () => runSequence('copy', bs.reload));
	watch('app/site_sample/**/*', () => runSequence('site_sample', bs.reload));

	gulp.start('scripts:watch');
});
