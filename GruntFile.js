/**
 * Configuration file for Ranker table application
 *
 * @author  Christopher Pappas
 * @date    8.21.13
 *
 * Primary Tasks: 
 *   tests  :  Execute mocha tests
 *   dev    :  Development mode, file-watcher
 */


module.exports = function( grunt ) {

	grunt.initConfig({


    // + ---------------------------------------


		'simplemocha': {
			options: {
  		  ui: 'bdd',
  		  reporter: 'spec',
        compilers: 'coffee:coffee-script',
        bail: true
  		},

		  all: { 
        src: ['test/ranker_spec.coffee'] 
      }
		},


    'watch': {
      src: {
        files: [ 'src/**', 'test/**' ],
        tasks: [ 'simplemocha' ]
      }
    }

	})


  // + ---------------------------------------


  grunt.registerTask( 'dev', [ 
    'tests',
    'watch'
  ])
  
  grunt.registerTask( 'tests', [ 
    'simplemocha' 
  ])


  // + ---------------------------------------


  grunt.loadNpmTasks( 'grunt-contrib-watch' )
  grunt.loadNpmTasks( 'grunt-simple-mocha' )  

  
  // + ---------------------------------------


  grunt.option( 'force', true )


}
