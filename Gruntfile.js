module.exports = function(grunt) {

	grunt.initConfig({

		jekyll: {
			options: {
				src : './',
				dest: './_site'
			},

			serve: {
				options: {
					serve: true
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('default', ['jekyll']);
};