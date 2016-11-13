System.register(["express"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express_1;
    var Server;
    return {
        setters:[
            function (express_1_1) {
                express_1 = express_1_1;
            }],
        execute: function() {
            Server = (function () {
                function Server() {
                    this.app = new express_1.Application();
                    this.config();
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