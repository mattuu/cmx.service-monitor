System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bootstrapper;
    return {
        setters:[],
        execute: function() {
            Bootstrapper = (function () {
                function Bootstrapper() {
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