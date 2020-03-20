namespace ObserverPattern {
    export abstract class Subject {
        private observerList: Observer[] = [];

        public AddObserver(observer: Observer): void {
            this.observerList.push(observer);
        }

        public ClearObserver(): void {
            this.observerList = [];
        }

        public NotifyObserver(): void {
            this.observerList.forEach(x => {
                x.Update(this);
                console.log(`Notify to ${x}`);
            });
        }

        public abstract GetNumber(): number;

        public abstract Execute(): void;
    }
}