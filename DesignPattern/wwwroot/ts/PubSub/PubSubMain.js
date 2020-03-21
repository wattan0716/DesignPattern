var PubSubPattern;
(function (PubSubPattern) {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.Subscribe = function () {
            PubSubPattern.PubSub.Subscribe({
                TopicName: 'test',
                EventHandler: this.CallbackFunc
            });
        };
        Main.prototype.Publish = function () {
            PubSubPattern.PubSub.Publish('test', 'PubSub');
        };
        Main.prototype.CallbackFunc = function (param) {
            console.log("Success " + param);
        };
        return Main;
    }());
    PubSubPattern.Main = Main;
})(PubSubPattern || (PubSubPattern = {}));
var main = new PubSubPattern.Main();
main.Subscribe();
main.Publish();
//# sourceMappingURL=PubSubMain.js.map