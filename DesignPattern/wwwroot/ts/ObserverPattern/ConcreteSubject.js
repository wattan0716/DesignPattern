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
var ObserverPattern;
(function (ObserverPattern) {
    var ConcreteSubject = /** @class */ (function (_super) {
        __extends(ConcreteSubject, _super);
        function ConcreteSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.num = Math.random();
            return _this;
        }
        ConcreteSubject.prototype.GetNumber = function () {
            return this.num;
        };
        ConcreteSubject.prototype.Execute = function () {
            this.NotifyObserver();
        };
        return ConcreteSubject;
    }(ObserverPattern.Subject));
    ObserverPattern.ConcreteSubject = ConcreteSubject;
})(ObserverPattern || (ObserverPattern = {}));
//# sourceMappingURL=ConcreteSubject.js.map