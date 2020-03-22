namespace FactoryPattern {
    export interface IProduct {
        Print(): void;
    }
    
    export enum ProductType {
        Car = 'car',
        Vehicle = 'vehicle'
    }

    export class Car implements IProduct {
        public Print(): void {
            console.log(`Create Car`);
        }
    }

    export class Vehicle implements IProduct {
        public Print(): void {
            console.log(`Create Vehicle`);
        }
    }
}