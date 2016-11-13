System.config({
  map: {
    app: 'src',
    api: 'src/api'
    express: 'node_modules/express'
  },
  packages: {
    "api": {
      main: "index.js",
      defaultExtension: 'js'
    },
  	"app": {
  		main: 'bootstrap.js',
  		defaultExtension: 'js'
  	},
    "express": {
      defaultExtension: "js"
    }
  }
});
