module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-webfont');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		webfont: {
			build: {
				src: 'build/svg/*.svg',
				dest: 'public/fonts',
				options: {
					engine:'node',
					font: 'kentfont',
					hashes: false,
					templateOptions: {
						baseClass: 'kf',
						classPrefix: 'kf-',
						mixinPrefix: 'kf_'
					},
					stylesheet:'less',
					relativeFontPath:'../fonts'
				}
			}
		}
		
	});


	// Default task(s).
	grunt.registerTask('default', ['webfont']);
};

