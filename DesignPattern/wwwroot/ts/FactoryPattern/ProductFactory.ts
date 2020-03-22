namespace FactoryPattern {

    export class ProductFactory {
        private product: IProduct;

        public CreateProduct(type: string): IProduct {
            switch (type) {
                case ProductType.Car:
                    this.product = new Car();
                    return this.product;
                case ProductType.Vehicle:
                    this.product = new Vehicle();
                    return this.product;
                default:
                    console.log(`Error`);
            }
        }
    }
}