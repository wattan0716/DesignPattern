namespace PubSubPattern {
    export class Main {
        public Subscribe(): void {
            PubSub.Subscribe({
                TopicName: 'test',
                EventHandler: this.CallbackFunc
            });
        }

        public Publish(): void {
            PubSub.Publish('test', 'PubSub');
        }

        private CallbackFunc(param: any): void {
            console.log(`Success ${param}`);
        }
    }
}

let main: PubSubPattern.Main = new PubSubPattern.Main();
main.Subscribe();
main.Publish();