
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

// Step 3

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} is the manager of the ${this.department} department.`;
  }
}
