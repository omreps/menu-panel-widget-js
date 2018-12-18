import runSequence from 'run-sequence';
import gulp from 'gulp';

gulp.task('styles:dependencies', () => (
	runSequence(
		'sprites',
		'styles'
	)
));

gulp.task('default', () => (
	runSequence(
		[
			'styles:dependencies'
		],
		'site_sample',
		'server',
		'watch'
	)
));

gulp.task('build', () => (
	runSequence(
		'styles:dependencies',
		'scripts',
		'copy',
		'site_sample'
	)
));
