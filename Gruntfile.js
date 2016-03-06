/**
 * Created by Debarshi on 3/6/2016.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            userFiles: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        },
        concat: {
            vendor: {
                src: ['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js'],
                dest: 'dist/vendor.js'
            },
            userFiles: {
                src: ['script/**/*.js'],
                dest: 'dist/built.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};