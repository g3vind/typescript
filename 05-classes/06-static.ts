// In TypeScript, static methods and properties belong to the class itself rather than instances of the class. They are called on the class itself rather than on instances of the class. Static members are often used for utility functions or properties that are common to all instances of a class

class MathOperations {
    // Static property
    static PI: number = 3.14;
  
    // Static method
    static add(x: number, y: number): number {
      return x + y;
    }
  
    // Another static method
    static multiply(x: number, y: number): number {
      return x * y;
    }
  }
  
  // Accessing static property
  console.log(MathOperations.PI); // Output: 3.14
  
  // Calling static methods
  const sumResult = MathOperations.add(5, 3);
  console.log(sumResult); // Output: 8
  
  const multiplicationResult = MathOperations.multiply(4, 6);
  console.log(multiplicationResult); // Output: 24
  