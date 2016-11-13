var System = require('systemjs');

System.config({
  map: {
    app: 'src',
    api: 'src/api',
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
      main: "index.js",
      defaultExtension: "js"
    }
  }
});

System.import('src/bootstrap.js');