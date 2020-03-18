var CommandPattern;
(function (CommandPattern) {
    var Invoker = /** @class */ (function () {
        function Invoker() {
            this.commands = [];
        }
        Invoker.prototype.StoreAndExecute = function (cmd) {
            this.commands.push(cmd);
            cmd.Execute();
        };
        return Invoker;
    }());
    CommandPattern.Invoker = Invoker;
})(CommandPattern || (CommandPattern = {}));
//# sourceMappingURL=Invoker.js.map