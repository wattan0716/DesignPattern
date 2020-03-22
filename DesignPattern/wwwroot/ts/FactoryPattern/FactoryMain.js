var factory = new FactoryPattern.ProductFactory();
var car = factory.CreateProduct(FactoryPattern.ProductType.Car);
var vehicle = factory.CreateProduct(FactoryPattern.ProductType.Vehicle);
car.Print();
vehicle.Print();
//# sourceMappingURL=FactoryMain.js.map