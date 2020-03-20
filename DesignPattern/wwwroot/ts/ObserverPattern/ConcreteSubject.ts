namespace ObserverPattern {
    export class ConcreteSubject extends Subject {

        private num: number = Math.random();

        public GetNumber(): number {
            return this.num;
        }

        public Execute(): void {
            this.NotifyObserver();
        }
    }
}