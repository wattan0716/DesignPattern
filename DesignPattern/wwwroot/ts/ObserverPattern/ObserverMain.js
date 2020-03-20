var subject = new ObserverPattern.ConcreteSubject();
var observer = new ObserverPattern.Observer();
var subObserver = new ObserverPattern.SubObserver();
subject.AddObserver(observer);
subject.AddObserver(subObserver);
subject.Execute();
//# sourceMappingURL=ObserverMain.js.map