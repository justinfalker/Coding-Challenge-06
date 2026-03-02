
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
    return `${this.name} is the manager of the ${this.department} department. They lead a team of ${this.teamSize}.`;
  }
}

// Step 4

const employee1 = new Employee("Austin", "Accounting");
const employee2 = new Employee("Alexis", "Analytics");
const manager1 = new Manager("Ashley", "IT", 4);
const manager2 = new Manager("Sean", "Sales", 8);

// Step 5

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach((employee) => {
      console.log(employee.describe());
    });
  }
}

// Step 6

const myCompany = new Company();
myCompany.addEmployee(employee1);
myCompany.addEmployee(employee2);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);

myCompany.listEmployees();