namespace CommandPattern {
    export class Invoker {

        private commands: Command[];

        constructor() {
            this.commands = [];
        }

        public StoreAndExecute(cmd: Command): void {
            this.commands.push(cmd);
            cmd.Execute();
        }
    }
}