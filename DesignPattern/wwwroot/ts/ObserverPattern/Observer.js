var ObserverPattern;
(function (ObserverPattern) {
    var Observer = /** @class */ (function () {
        function Observer() {
        }
        Observer.prototype.Update = function (subject) {
            console.log("Call Observer " + subject.GetNumber());
        };
        return Observer;
    }());
    ObserverPattern.Observer = Observer;
    var SubObserver = /** @class */ (function () {
        function SubObserver() {
        }
        SubObserver.prototype.Update = function (subject) {
            console.log("Call SubObserver " + subject.GetNumber());
        };
        return SubObserver;
    }());
    ObserverPattern.SubObserver = SubObserver;
})(ObserverPattern || (ObserverPattern = {}));
//# sourceMappingURL=Observer.js.map