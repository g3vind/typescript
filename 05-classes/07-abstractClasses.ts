// In TypeScript, abstract classes provide a way to define common characteristics and behavior for a group of related classes. An abstract class cannot be instantiated directly; instead, it serves as a blueprint for other classes. Abstract classes can have abstract methods, which are declared in the abstract class but do not provide an implementation. Subclasses are then required to provide an implementation for these abstract methods.

// Abstract class
abstract class Shape {
    // Abstract property (can also be methods)
    abstract name: string;
  
    // Abstract method
    abstract calculateArea(): number;
  
    // Regular method
    display(): void {
      console.log(`This is a ${this.name}.`);
    }
  }
  
  // Concrete subclass
  class Circle extends Shape {
    // Implementation of abstract property and method
    name: string = "Circle";
  
    radius: number;
  
    constructor(radius: number) {
      super(); // Call to the constructor of the base class (Shape)
      this.radius = radius;
    }
  
    // Implementation of abstract method
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Concrete subclass
  class Square extends Shape {
    // Implementation of abstract property and method
    name: string = "Square";
  
    sideLength: number;
  
    constructor(sideLength: number) {
      super(); // Call to the constructor of the base class (Shape)
      this.sideLength = sideLength;
    }
  
    // Implementation of abstract method
    calculateArea(): number {
      return this.sideLength ** 2;
    }
  }
  
  // Usage
  const circle = new Circle(5);
  circle.display();
  console.log(`Area: ${circle.calculateArea()}`);
  
  const square = new Square(4);
  square.display();
  console.log(`Area: ${square.calculateArea()}`);
  