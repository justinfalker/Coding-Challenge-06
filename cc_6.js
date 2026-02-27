
// Step 2

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} is an employee in the ${this.department} department.`;
  }
}