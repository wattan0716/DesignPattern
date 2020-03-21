var PubSubPattern;
(function (PubSubPattern) {
    var PubSub = /** @class */ (function () {
        function PubSub() {
        }
        PubSub.Publish = function (topicName, param) {
            var _this = this;
            this.GetEventHandlers(topicName).forEach(function (x) {
                x.EventHandler.call(_this, param);
            });
        };
        PubSub.Subscribe = function (topic) {
            this.topics.push({ TopicName: topic.TopicName, EventHandler: topic.EventHandler });
        };
        PubSub.GetEventHandlers = function (topicName) {
            return this.topics.filter(function (x) { return x.TopicName === topicName; });
        };
        PubSub.topics = [];
        return PubSub;
    }());
    PubSubPattern.PubSub = PubSub;
})(PubSubPattern || (PubSubPattern = {}));
//# sourceMappingURL=PubSub.js.map