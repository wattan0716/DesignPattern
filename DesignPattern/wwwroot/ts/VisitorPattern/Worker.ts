namespace VisitorPattern {
    export class Worker extends Employee {

        public Accept(v: Visitor): void {
            v.Visit(this);
        }

        public GetEmployeeIdName(): string {
            return `${this.GetEmployeeId()}: ${this.GetFullName()}`;
        }
    }
}