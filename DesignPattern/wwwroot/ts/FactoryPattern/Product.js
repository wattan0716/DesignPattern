var FactoryPattern;
(function (FactoryPattern) {
    var ProductType;
    (function (ProductType) {
        ProductType["Car"] = "car";
        ProductType["Vehicle"] = "vehicle";
    })(ProductType = FactoryPattern.ProductType || (FactoryPattern.ProductType = {}));
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.Print = function () {
            console.log("Create Car");
        };
        return Car;
    }());
    FactoryPattern.Car = Car;
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
        }
        Vehicle.prototype.Print = function () {
            console.log("Create Vehicle");
        };
        return Vehicle;
    }());
    FactoryPattern.Vehicle = Vehicle;
})(FactoryPattern || (FactoryPattern = {}));
//# sourceMappingURL=Product.js.map