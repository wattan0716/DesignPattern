namespace CommandPattern {
    export interface ICommand {
        Execute(): void;
    }

    export class Command implements ICommand {
        public Execute(): void {
            throw new Error('Abstract Method!');
        }
    }
}