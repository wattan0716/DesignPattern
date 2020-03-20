let subject: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject();

let observer: ObserverPattern.Observer = new ObserverPattern.Observer();
let subObserver: ObserverPattern.SubObserver = new ObserverPattern.SubObserver();

subject.AddObserver(observer);
subject.AddObserver(subObserver);
subject.Execute();