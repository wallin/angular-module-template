'use strict';

module.exports = function (config) {
	config.set({
		autoWatch: true,
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		singleRun: false,
		reporters: ['dots', 'coverage'],
		files: [
			'components/angular/angular.js',
			'components/angular-mocks/angular-mocks.js',
			'build/*.js',
			'build/spec/*.js'
		]
	});
};
