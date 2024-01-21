// TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable. The assignment to a readonly property can only occur in one of two places:

// In the property declaration.
// In the constructor of the same class.

class Person {
    readonly id: number;
    firstName: string;
    lastName: string;
  
    constructor(id: number, firstName: string, lastName: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Attempting to modify a readonly property in a method will result in a compilation error
    // Uncommenting the following line will result in an error:
    // updateId(newId: number): void {
    //   this.id = newId; // Error: Cannot assign to 'id' because it is a read-only property.
    // }
  }
  
  // Example usage
  const person = new Person(1, "John", "Doe");
  
  console.log(person.id); // Accessing readonly property
  // Uncommenting the following line will result in an error:
  // person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
  
  console.log(person.firstName); // Accessing regular property
  person.firstName = "Jane"; // Modifying regular property is allowed
  console.log(person.firstName); // Output: Jane
  