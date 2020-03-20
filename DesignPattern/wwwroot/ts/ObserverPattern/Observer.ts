namespace ObserverPattern {
    export interface IObserver {
        Update(subject: Subject): void;
    }

    export class Observer implements IObserver {
        public Update(subject: Subject): void {
            console.log(`Call Observer ${subject.GetNumber()}`);
        }
    }

    export class SubObserver implements IObserver {
        public Update(subject: Subject): void {
            console.log(`Call SubObserver ${subject.GetNumber()}`);
        }
    }
}