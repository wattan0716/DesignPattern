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
    var UpdateCommand = /** @class */ (function (_super) {
        __extends(UpdateCommand, _super);
        function UpdateCommand(receiver) {
            var _this = _super.call(this) || this;
            _this.receiver = receiver;
            return _this;
        }
        UpdateCommand.prototype.Execute = function () {
            console.log("Execute method of UpdateCommand");
            this.receiver.Action();
        };
        return UpdateCommand;
    }(CommandPattern.Command));
    CommandPattern.UpdateCommand = UpdateCommand;
})(CommandPattern || (CommandPattern = {}));
//# sourceMappingURL=UpdateCommand.js.map