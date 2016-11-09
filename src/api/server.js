System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Server;
    return {
        setters:[],
        execute: function() {
            Server = (function () {
                function Server(request) {
                    this.request = request;
                    console.log("Constructor!");
                }
                return Server;
            }());
            exports_1("Server", Server);
        }
    }
});
//# sourceMappingURL=server.js.map