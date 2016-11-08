System.config({
  map: {
    app: '/app/',
    express: 'node_modules/express'
  }
});

System.import('src/app/server.js');