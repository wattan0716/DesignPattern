namespace CommandPattern {
    export class UpdateCommand extends Command {
        private receiver: Receiver;

        constructor(receiver: Receiver) {
            super();
            this.receiver = receiver;
        }
        public Execute(): void {
            console.log(`Execute method of UpdateCommand`);
            this.receiver.Action();
        }
    }
}