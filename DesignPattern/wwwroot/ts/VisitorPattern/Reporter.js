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
    var Reporter = /** @class */ (function (_super) {
        __extends(Reporter, _super);
        function Reporter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.report = '';
            return _this;
        }
        Reporter.prototype.Visit = function (value) {
            if (value instanceof VisitorPattern.Manager) {
                this.report += "EmployeeName: " + value.GetEmployee();
                this.PrintReport();
                return;
            }
            else if (value instanceof VisitorPattern.Worker) {
                this.report += "EmployeeIdName " + value.GetEmployeeIdName();
                this.PrintReport();
            }
        };
        Reporter.prototype.PrintReport = function () {
            console.log(this.report);
        };
        return Reporter;
    }(VisitorPattern.Visitor));
    VisitorPattern.Reporter = Reporter;
})(VisitorPattern || (VisitorPattern = {}));
//# sourceMappingURL=Reporter.js.map