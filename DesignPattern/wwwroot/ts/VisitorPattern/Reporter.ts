namespace VisitorPattern {
    export class Reporter extends Visitor {

        private report: string = '';

        public Visit<T>(value: T): void {
            if (value instanceof Manager) {
                this.report += `EmployeeName: ${value.GetEmployee()}`;
                this.PrintReport();
                return;
            } else if (value instanceof Worker) {
                this.report += `EmployeeIdName ${value.GetEmployeeIdName()}`;
                this.PrintReport();
            }
        }

        public PrintReport(): void {
            console.log(this.report);
        }
    }
}