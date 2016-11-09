var System = require('systemjs');

System.config({
  map: {
    app: 'src',
    express: 'node_modules/express'
  },
  packages: {
  	"app": {
  		main: 'bootstrap.js',
  		defaultExtension: 'js'
  	},
  	"express": {
  		main: 'index.js',
  		defaultExtension: 'js'
  	}
  }
});

System.import('src/bootstrap.js');
// console.log('Logging from index.js');