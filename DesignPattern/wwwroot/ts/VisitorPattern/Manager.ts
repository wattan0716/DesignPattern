namespace VisitorPattern {
    export class Manager extends Employee {
        
        public Accept(v: Visitor): void {
            v.Visit(this);
        }

        public GetEmployee(): string {
            return this.GetFullName();
        }

    }
}