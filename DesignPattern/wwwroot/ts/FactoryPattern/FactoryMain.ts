let factory: FactoryPattern.ProductFactory = new FactoryPattern.ProductFactory();
let car: FactoryPattern.IProduct = factory.CreateProduct(FactoryPattern.ProductType.Car);
let vehicle: FactoryPattern.IProduct = factory.CreateProduct(FactoryPattern.ProductType.Vehicle);

car.Print();
vehicle.Print();