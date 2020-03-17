var VisitorPattern;
(function (VisitorPattern) {
    var Employee = /** @class */ (function () {
        function Employee(firstName, lastName, employeeId) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.employeeId = employeeId;
        }
        Employee.prototype.GetFullName = function () {
            return this.firstName + " " + this.lastName;
        };
        Employee.prototype.GetEmployeeId = function () {
            return this.employeeId;
        };
        return Employee;
    }());
    VisitorPattern.Employee = Employee;
})(VisitorPattern || (VisitorPattern = {}));
//# sourceMappingURL=Employee.js.map