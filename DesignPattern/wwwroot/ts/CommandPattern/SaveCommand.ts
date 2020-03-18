namespace CommandPattern {
    export class SaveCommand extends Command {

        private receiver: Receiver;

        constructor(receiver: Receiver) {
            super();
            this.receiver = receiver;
        }

        public Execute(): void {
            console.log(`Execute method of SaveCommand`);
            this.receiver.Action();
        }
    }
}