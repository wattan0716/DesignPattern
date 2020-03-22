var FactoryPattern;
(function (FactoryPattern) {
    var ProductFactory = /** @class */ (function () {
        function ProductFactory() {
        }
        ProductFactory.prototype.CreateProduct = function (type) {
            switch (type) {
                case FactoryPattern.ProductType.Car:
                    this.product = new FactoryPattern.Car();
                    return this.product;
                case FactoryPattern.ProductType.Vehicle:
                    this.product = new FactoryPattern.Vehicle();
                    return this.product;
                default:
                    console.log("Error");
            }
        };
        return ProductFactory;
    }());
    FactoryPattern.ProductFactory = ProductFactory;
})(FactoryPattern || (FactoryPattern = {}));
//# sourceMappingURL=ProductFactory.js.map