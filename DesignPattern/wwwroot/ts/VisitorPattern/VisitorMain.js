var manager = new VisitorPattern.Manager('Tanaka', 'Taro', 10);
var worker = new VisitorPattern.Worker('Abe', 'Sin', 12);
var reporter = new VisitorPattern.Reporter();
manager.Accept(reporter);
worker.Accept(reporter);
//# sourceMappingURL=Main.js.map