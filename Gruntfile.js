module.exports = function(grunt) {
	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Project configuration
	grunt.initConfig({
		// Import metadat from package.json
		pkg: grunt.file.readJSON('package.json'),

		express: {
			all: {
				options: {
					port:       9001,
					hostname:   process.platform == 'win32' ? 'localhost' : '0.0.0.0',
					bases:      ['www'],
					livereload: true
				}
			}
		},

		open: {
			all: {
				path: 'http://<%= express.all.options.hostname %>:<%= express.all.options.port %>'
			}
		},

		// Configure 'grunt-contrib-watch' plugin
		watch: {
			all: {
				files: [
					'www/{,*/}*.html',
					'www/assets/{,*/}*.css',
					'www/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'www/{,*/}*.json',
					'www/{,*/}*.js',
					'www/{,*/}/{,*/}*.js'
				],
				options: {
					livereload: true
				}
			}
		},

		complexity: {
			generic: {
				src:     ['grunt.js', 'tasks/grunt-complexity.js'],
				exclude: ['doNotTest.js'],
				options: {
					breakOnErrors:        true,
					jsLintXML:            'report.xml',			// create XML JSLint-like report
					checkstyleXML:        'checkstyle.xml',		// create checkstyle report
					pmdXML:               'pmd.xml',			// create pmd report
					errorsOnly:           false,				// show only maintainability errors
					cyclomatic:           [3, 7, 12],			// or optionally a single value, like 3
					halstead:             [8, 13, 20],			// or optionally a single value, like 8
					maintainability:      100,
					hideComplexFunctions: false,				// only display maintainability
					broadcast:            false					// broadcast data over event-bus
				}
			}
		}

	});


	grunt.registerTask('serve', [
		'express',
		'open',
		'watch'
	]);


	grunt.registerTask('complexity', [
		'complexity'
	]);

};
