namespace VisitorPattern {
    export interface IEmployee {
        Accept(v: Visitor): void;
    }
}