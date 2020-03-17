
const manager: VisitorPattern.Employee = new VisitorPattern.Manager('Tanaka', 'Taro', 10);
const worker: VisitorPattern.Employee = new VisitorPattern.Worker('Abe', 'Sin', 12);

const reporter: VisitorPattern.Reporter = new VisitorPattern.Reporter();
manager.Accept(reporter);
worker.Accept(reporter);