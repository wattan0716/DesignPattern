namespace VisitorPattern {
    export abstract class Employee implements IEmployee {

        constructor(private firstName: string, private lastName: string, private employeeId: number) {

        }

        public abstract Accept(v: Visitor): void;

        public GetFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        public GetEmployeeId(): number {
            return this.employeeId;
        }
    }
}