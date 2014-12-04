module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-image-embed");
	
	var kent_codepoints = {
						'kent-horizontal': 0xE001,
						'kent-block': 0xE002,
						'kent-ke': 0xE003,
						'book': 0xF02D,
						'email': 0xF0E0,
						'library-search': 0xF0AC,
						'moodle': 0xE004,
						'sds': 0xF080,
						'timetables': 0xF073,
						'search': 0xF002,
						'spinner': 0xF110,
						'chevron-left': 0xF053,
						'chevron-right': 0xF054,
						'chevron-up':	0xF077,
						'chevron-down': 0xF078,
						'angle-left': 0xF104,
						'angle-right': 0xF105,
						'angle-up': 0xF106,
						'angle-down': 0xF107,
						'info-circle': 0xF05A,
						'exclamation-circle': 0xF06A,
						'external-link': 0xF08E,
						'twitter': 0xF099,
						'plus': 0xF067,
						'minus': 0xF068,
						'home': 0xF015,
						'spinner-alt': 0xF1CE
					};
					
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		webfont: {
			build: {
				src: 'build/svg/*/*.svg',
				dest: 'build/fonts',
				options: {
					engine:'node',
					font: 'kentfont',
					hashes: false,
                    template: 'build/templates/fontface.css',
					templateOptions: {
						baseClass: 'kf',
						classPrefix: 'kf-',
						mixinPrefix: 'kf_'
					},
					stylesheet:'less',
					relativeFontPath:'../fonts',
					codepoints: kent_codepoints
				}
			},
			lite: {
				src: 'build/svg/core/*.svg',
				dest: 'build/fonts',
				options: {
					engine:'node',
					font: 'kentfont-lite',
					hashes: false,
                    template: 'build/templates/fontface.css',
					templateOptions: {
						baseClass: 'kf',
						classPrefix: 'kf-',
						mixinPrefix: 'kf_'
					},
					stylesheet:'less',
					relativeFontPath:'../fonts',
					codepoints: kent_codepoints
				}
			}
		},
		copy: {
			build: {
				src: 'build/fonts/kentfont.less', dest: 'build/less/kentfont.less'
			},
			lite: {
				src: 'build/fonts/kentfont-lite.less', dest: 'build/less/kentfont-lite.less'
			},
			font: {
				expand: true, cwd: 'build/fonts/', src: ['*','!*.less','!*.html'], dest: 'public/fonts/', filter: 'isFile'
			}
		},
		
		less : {
            build : {
                files : { "public/css/kentfont.css" : "build/less/master.less" }
            },
			lite : {
                files : { "public/css/kentfont-lite.css" : "build/less/master-lite.less" }
            }
        },

        imageEmbed: {
            lite: {
                src: ["public/css/kentfont-lite.css"],
                dest: "public/css/kentfont-extra-lite.css",
                options: {
                    deleteAfterEncoding: false,
                    maxImageSize:0
                }
            }
        }
	});


	// Default task(s).
	grunt.registerTask('default', ['webfont', 'copy','less','imageEmbed']);
	grunt.registerTask('lite', ['webfont:lite', 'copy:lite', 'copy:font', 'less:lite','imageEmbed']);
	grunt.registerTask('build', ['webfont:build', 'copy:build', 'copy:font', 'less:build']);
};

