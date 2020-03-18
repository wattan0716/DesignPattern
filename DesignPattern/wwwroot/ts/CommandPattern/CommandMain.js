var reciever = new CommandPattern.Receiver();
var saveCommand = new CommandPattern.SaveCommand(reciever);
var updateCommand = new CommandPattern.UpdateCommand(reciever);
var invoker = new CommandPattern.Invoker();
invoker.StoreAndExecute(saveCommand);
invoker.StoreAndExecute(updateCommand);
//# sourceMappingURL=CommandMain.js.map