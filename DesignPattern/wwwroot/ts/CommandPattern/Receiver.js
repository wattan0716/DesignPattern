var CommandPattern;
(function (CommandPattern) {
    var Receiver = /** @class */ (function () {
        function Receiver() {
        }
        Receiver.prototype.Action = function () {
            console.log("Action is called");
        };
        return Receiver;
    }());
    CommandPattern.Receiver = Receiver;
})(CommandPattern || (CommandPattern = {}));
//# sourceMappingURL=Receiver.js.map