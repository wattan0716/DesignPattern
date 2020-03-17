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
var VisitorPattern;
(function (VisitorPattern) {
    var Worker = /** @class */ (function (_super) {
        __extends(Worker, _super);
        function Worker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Worker.prototype.Accept = function (v) {
            v.Visit(this);
        };
        Worker.prototype.GetEmployeeIdName = function () {
            return this.GetEmployeeId() + ": " + this.GetFullName();
        };
        return Worker;
    }(VisitorPattern.Employee));
    VisitorPattern.Worker = Worker;
})(VisitorPattern || (VisitorPattern = {}));
//# sourceMappingURL=Worker.js.map