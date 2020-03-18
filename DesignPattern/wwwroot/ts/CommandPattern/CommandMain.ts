let reciever: CommandPattern.Receiver = new CommandPattern.Receiver();
let saveCommand: CommandPattern.SaveCommand = new CommandPattern.SaveCommand(reciever);
let updateCommand: CommandPattern.UpdateCommand = new CommandPattern.UpdateCommand(reciever);
let invoker: CommandPattern.Invoker = new CommandPattern.Invoker();

invoker.StoreAndExecute(saveCommand);
invoker.StoreAndExecute(updateCommand);