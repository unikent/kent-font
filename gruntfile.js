module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-image-embed");
	
	var kent_codepoints = {
						'kent-horizontal': 0xE001,
						'kent-block': 0xE002,
						'kent-ke': 0xE003,
						'kent-vision' : 0xE006,
						'book': 0xF02D,
						'email': 0xF0E0,
						'library-search': 0xF0AC,
						'lock': 0xF023,
						'moodle': 0xE004,
						'sds': 0xF080,
						'timetables': 0xE007,
						'search': 0xF002,
						'spinner': 0xF1CE,
						'chevron-left': 0xF053,
						'chevron-right': 0xF054,
						'chevron-up':	0xF077,
						'chevron-down': 0xF078,
						'chevron-left-square': 0xE008,
						'chevron-right-square': 0xE009,
						'chevron-up-square': 0xE00A,
						'chevron-down-square': 0xE00B,
						'angle-left': 0xF104,
						'angle-right': 0xF105,
						'angle-up': 0xF106,
						'angle-down': 0xF107,
						'info-circle': 0xF05A,
						'exclamation-circle': 0xF06A,
						'question-circle' : 0xF059,
						'external-link': 0xF08E,
						'twitter': 0xF099,
						'facebook' : 0xF09A,
						'linkedin' : 0xF0E1,
						'flickr' : 0xF16E,
						'youtube' : 0xF167,
						'rss' :	0xF09E,
						'tumblr' : 0xF173,
						'instagram' : 0xF16D,
						'pinterest' : 0xF0D2,
						'google-plus' : 0xF0D5,
						'creative-commons': 0xF25E,
						'plus': 0xF067,
						'minus': 0xF068,
						'home': 0xF015,
						'square': 0xF04D,
						'circle': 0xF111,
						'camera': 0xF030,
						'caret-left': 0xF0D9,
						'caret-right': 0xF0DA,
						'caret-up':	0xF0D8,
						'caret-down': 0xF0D7,
						'sort-asc': 0xF0DE,
						'sort-desc': 0xF0DD,
						'sort' : 0xF0DC,
                        'play': 0xF04B,
                        'pause': 0xF04C,
                        'foward': 0xF04E,
                        'backward': 0xF04A, 
                        'compress': 0xF066, 
                        'expand': 0xF065,
                        'undo': 0xF0E2, 
						'play-circle': 0xF144,
                        'menu': 0xF0C9,
                        'check': 0xF00C,
                        'close': 0xF00D,
                        'pin' : 0xF041,
                        'location' : 0xF124,
                        'smile' : 0xF118,
                        'frown' : 0xF119,
                        'meh': 0xF11a,
						'user' : 0xF007,
						'users': 0xF0C0,
						'wheelchair' : 0xF193,
						'heart' : 0xF004,
						'heart-o' : 0xF08A,
						'star' : 0xF005,
						'star-o' : 0xF006,
						'volume-mute' : 0xF026,
						'volume-low' : 0xF027,
						'volume-medium' : 0xE005,
						'volume-high' : 0xF028,
						'list' : 0xF03A,
						'step-forward' : 0xF051,
						'step-backward' : 0xF048,
						'email-o' : 0xF003,
						'ban': 0xF05E,
						'calendar' : 0xF073,
						'check-circle': 0xF05D,
						'close-cirlce' : 0xF05C,
						'clock' : 0xF017,
						'cog' :	0xF013,
						'comment' : 0xF075,
						'phone' : 0xF095,
						'trophy' : 0xF091,
						'krimson' : 0xE00C,
						'captions': 0xE00D,
                        'captions-off': 0xE00E,
                        'mendeley': 0xE00F,
                        'academia-edu': 0xE010,
                        'file-text': 0xF0F6,
                        'weibo': 0xF18A,
                        'soundcloud': 0xF1BE
					};
					
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		webfont: {
			'less':{
				src: 'build/svg/*/*.svg',
				dest: 'public/fonts',
				destCss: 'build/less',
				options: {
					engine:'node',
					font: '_kentfont',
					hashes: false,
					types: 'eot,woff,ttf,svg',
					template: 'build/templates/lessvars.css',
					htmlDemoTemplate: 'build/templates/demo.html',
					destHtml: 'public/',
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
			'sass':{
				src: 'build/svg/*/*.svg',
				dest: 'public/fonts',
				destCss: 'build/less',
				options: {
					engine:'node',
					font: 'kentfont',
					hashes: false,
					types: 'eot,woff,ttf,svg',
					template: 'build/templates/sassvars.css',
					htmlDemoTemplate: 'build/templates/demo.html',
					destHtml: 'public/',
					templateOptions: {
						baseClass: 'kf',
						classPrefix: 'kf-',
						mixinPrefix: 'kf_'
					},
					stylesheet:'scss',
					relativeFontPath:'../fonts',
					codepoints: kent_codepoints
				}
			},
			build: {
				src: 'build/svg/*/*.svg',
				dest: 'public/fonts',
				destCss: 'build/less',
				options: {
					engine:'node',
					font: 'kentfont',
					hashes: false,
					types: 'eot,woff,ttf,svg',
                    template: 'build/templates/fontface.css',
					htmlDemoTemplate: 'build/templates/demo.html',
					destHtml: 'public/',
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
				dest: 'public/fonts',
				destCss: 'build/less',
				options: {
					engine:'node',
					font: 'kentfont-lite',
					hashes: false,
					types: 'eot,woff,ttf,svg',
                    template: 'build/templates/fontface.css',
					htmlDemoTemplate: 'build/templates/demo.html',
					destHtml: 'public/',
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
	grunt.registerTask('default', ['webfont','less','imageEmbed']);
	grunt.registerTask('lite', ['webfont:lite', 'less:lite','imageEmbed']);
};

