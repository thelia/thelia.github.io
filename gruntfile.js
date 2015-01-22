module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        opts: {
            css: {
                root: 'assets/css',
                mainFile: '<%= opts.css.root %>/main.css',
                minFile: '<%= opts.css.root %>/min.css'
            },
            js: {
                root: 'assets/js',
                vendors: '<%= opts.js.root %>/libs',
                mainFile: '<%= opts.js.root %>/main.js',
                minFile: '<%= opts.js.root %>/min.js'
            },
            less: {
                root: 'assets/less',
                mainFile: '<%= opts.less.root %>/main.less'
            },
            font: {
                root: 'assets/fonts',
                bootstrap: '<%= opts.font.root %>/bootstrap',
                fontawesome: '<%= opts.font.root %>/fontawesome'
            },
            bower: {
                root: 'bower_components',
                bootstrap: {
                    js: '<%= opts.bower.root %>/bootstrap/dist/js/bootstrap.min.js',
                    font: '<%= opts.bower.root %>/bootstrap/fonts/*.*'
                },
                fontawesome: {
                    font: '<%= opts.bower.root %>/fontawesome/fonts/*.*'
                },
                anchorify: {
                    js: '<%= opts.bower.root %>/anchorify/dist/anchorify.min.js'
                },
                jquery: {
                    js: '<%= opts.bower.root %>/jquery/jquery.min.js'
                },
                html5shiv: {
                    js: '<%= opts.bower.root %>/html5shiv/dist/html5shiv.min.js'
                },
                respond: {
                    js: '<%= opts.bower.root %>/respond/dest/respond.min.js'
                }
            }
        },
        jshint: {
            all: [
                '<%= opts.js.root %>/*.js',
                '!<%= opts.js.vendors %>/*.js',
                '!<%= opts.js.minFile %>'
            ]
        },
        uglify: {
            all: {
                files: {
                    '<%= opts.js.minFile %>': [
                        '<%= opts.bower.bootstrap.js %>',
                        '<%= opts.bower.anchorify.js %>',
                        '<%= opts.js.mainFile %>'
                    ]
                }
            }
        },
        less: {
            all: {
                options: {
                    paths: ['<%= opts.css.root %>']
                },
                files: {
                    '<%= opts.css.mainFile %>': '<%= opts.less.mainFile %>'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    '<%= opts.css.minFile %>': '<%= opts.css.mainFile %>'
                }
            }
        },
        copy: {
            all: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        dest: '<%= opts.font.bootstrap %>',
                        src: ['<%= opts.bower.bootstrap.font %>']
                    },
                    {
                        expand: true,
                        flatten: true,
                        dest: '<%= opts.font.fontawesome %>',
                        src: ['<%= opts.bower.fontawesome.font %>']
                    },
                    {
                        expand: true,
                        flatten: true,
                        dest: '<%= opts.js.vendors %>',
                        src: ['<%= opts.bower.jquery.js %>']
                    },
                    {
                        expand: true,
                        flatten: true,
                        dest: '<%= opts.js.vendors %>',
                        src: ['<%= opts.bower.respond.js %>']
                    },
                    {
                        expand: true,
                        flatten: true,
                        dest: '<%= opts.js.vendors %>',
                        src: ['<%= opts.bower.html5shiv.js %>']
                    }

                ]
            }
        },
        watch: {
            html: {
                files: ['*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            less: {
                files: ['<%= opts.less.root %>/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            cssmin: {
                files: ['<%= opts.css.minFile %>'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: ['<%= opts.js.root %>/*.js', '!<%= opts.js.minFile %>'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['copy', 'jshint', 'uglify', 'less', 'cssmin']);

}
