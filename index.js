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
    },
    meta: {
        "express": {
            format: "global"
        },
        "api": {
            format: "global"
        }
    }
});

System.import('src/bootstrap.js').then(function(e) {
    console.log(e);
});
