// Extending interfaces in TypeScript allows you to create a new interface that inherits the properties and methods of an existing interface. This enables you to build on top of existing interfaces, providing additional requirements or extending functionality. 


// Base interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  // Extended interface
  interface Employee extends Person {
    employeeId: number;
    department: string;
  
    // Additional method specific to the Employee interface
    displayEmployeeInfo(): void;
  }
  
  // Implementing the extended interface in a class
  class FullTimeEmployee implements Employee {
    firstName: string;
    lastName: string;
    age: number;
    employeeId: number;
    department: string;
  
    constructor(firstName: string, lastName: string, age: number, employeeId: number, department: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.employeeId = employeeId;
      this.department = department;
    }
  
    displayEmployeeInfo(): void {
      console.log(`Employee ID: ${this.employeeId}, Department: ${this.department}`);
    }
  }
  
  // Usage
  const fullTimeEmployee = new FullTimeEmployee("John", "Doe", 30, 12345, "Engineering");
  
  console.log(fullTimeEmployee.firstName); // Accessing properties from the base interface
  console.log(fullTimeEmployee.age);       // Accessing properties from the base interface
  fullTimeEmployee.displayEmployeeInfo();   // Calling method from the extended interface
  