var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CommandPattern;
(function (CommandPattern) {
    var SaveCommand = /** @class */ (function (_super) {
        __extends(SaveCommand, _super);
        function SaveCommand(receiver) {
            var _this = _super.call(this) || this;
            _this.receiver = receiver;
            return _this;
        }
        SaveCommand.prototype.Execute = function () {
            console.log("Execute method of SaveCommand");
            this.receiver.Action();
        };
        return SaveCommand;
    }(CommandPattern.Command));
    CommandPattern.SaveCommand = SaveCommand;
})(CommandPattern || (CommandPattern = {}));
//# sourceMappingURL=SaveCommand.js.map