namespace PubSubPattern {
    export interface IEventHandlerType {
        (eventParam?: any): void;
    }

    export interface ITopic {
        TopicName: string;
        EventHandler: IEventHandlerType;
    }

    export class PubSub {

        private static topics: ITopic[] = [];

        public static Publish(topicName: string, param: any): void {
            this.GetEventHandlers(topicName).forEach(x => {
                x.EventHandler.call(this, param);
            });

        }

        public static Subscribe(topic: ITopic): void {
            this.topics.push({ TopicName: topic.TopicName, EventHandler: topic.EventHandler });
        }

        private static GetEventHandlers(topicName: string): ITopic[] {
            return this.topics.filter(x => x.TopicName === topicName);
        }
    }
}