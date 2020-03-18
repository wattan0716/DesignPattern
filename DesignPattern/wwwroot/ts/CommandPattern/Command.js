var CommandPattern;
(function (CommandPattern) {
    var Command = /** @class */ (function () {
        function Command() {
        }
        Command.prototype.Execute = function () {
            throw new Error('Abstract Method!');
        };
        return Command;
    }());
    CommandPattern.Command = Command;
})(CommandPattern || (CommandPattern = {}));
//# sourceMappingURL=Command.js.map