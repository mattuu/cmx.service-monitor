System.register(["src/api/index"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1;
    var Bootstrapper;
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            Bootstrapper = (function () {
                function Bootstrapper() {
                    this.server = new index_1.Server(undefined);
                }
                Bootstrapper.Init = function () {
                    console.log("BOOTSTRAPPER INIT()!");
                };
                return Bootstrapper;
            }());
            exports_1("Bootstrapper", Bootstrapper);
            Bootstrapper.Init();
        }
    }
});
//# sourceMappingURL=bootstrap.js.map