namespace VisitorPattern {
    export abstract class Visitor {
        public abstract Visit(emloyee: Employee): void;
    }
}