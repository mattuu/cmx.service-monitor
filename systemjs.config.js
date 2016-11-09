System.config({
  map: {
    app: 'src',
    express: '/node_modules/express'
  },
  packages: {
  	"app": {
  		main: 'bootstrap.js',
  		defaultExtension: 'js'
  	},
    "express": {
      defaultExtension: "js"
    }
  }
});
