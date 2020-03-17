var Singleton;
(function (Singleton) {
    var StateManager = /** @class */ (function () {
        function StateManager() {
        }
        Object.defineProperty(StateManager, "StateManager", {
            /**
             * インスタンスの取得
             **/
            get: function () {
                if (!this.stateManager) {
                    this.stateManager = this;
                    console.log("Create Instance");
                }
                return this.stateManager;
            },
            enumerable: true,
            configurable: true
        });
        StateManager.stateManager = null;
        return StateManager;
    }());
    Singleton.StateManager = StateManager;
})(Singleton || (Singleton = {}));
//# sourceMappingURL=StateManager.js.map