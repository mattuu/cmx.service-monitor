System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Server;
    return {
        setters:[],
        execute: function() {
            Server = (function () {
                function Server() {
                }
                Server.bootstrap = function () {
                    return new Server();
                };
                Server.prototype.config = function () {
                    this.app.listen(3000);
                };
                return Server;
            }());
            exports_1("Server", Server);
        }
    }
});
//# sourceMappingURL=server.js.map