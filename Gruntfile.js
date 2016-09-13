module.exports = function(grunt) {

    /*** Grunt Config ***/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: ['Gruntfile.js', 'package.json', 'app.js']
    });

    /*** Plugins and custom tasks ***/
    grunt.registerTask('Fred', function() {
        grunt.log.write('\nHello Neighbor, I\'m happy you\'re here today.');
        grunt.log.write('\n**********************************************\n');
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

    /*** Default Tasks ***/
    grunt.registerTask('default', ['Fred', 'jshint']);

};