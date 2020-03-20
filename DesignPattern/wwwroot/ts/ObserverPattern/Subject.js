var ObserverPattern;
(function (ObserverPattern) {
    var Subject = /** @class */ (function () {
        function Subject() {
            this.observerList = [];
        }
        Subject.prototype.AddObserver = function (observer) {
            this.observerList.push(observer);
        };
        Subject.prototype.ClearObserver = function () {
            this.observerList = [];
        };
        Subject.prototype.NotifyObserver = function () {
            var _this = this;
            this.observerList.forEach(function (x) {
                x.Update(_this);
                console.log("Notify to " + x);
            });
        };
        return Subject;
    }());
    ObserverPattern.Subject = Subject;
})(ObserverPattern || (ObserverPattern = {}));
//# sourceMappingURL=Subject.js.map