// PUBLIC
// Members declared as public are accessible from outside the class.
// If you don't explicitly specify an access specifier, it defaults to public.

class MyClass {
    public myPublicProperty: string;
  
    constructor(myPublicProperty: string) {
      this.myPublicProperty = myPublicProperty;
    }
  
    public myPublicMethod(): void {
      console.log("This is a public method.");
    }
  }
  
  const myObject = new MyClass("Hello, World!");
  console.log(myObject.myPublicProperty); // Accessing public property
  myObject.myPublicMethod(); // Calling public method


//   PRIVATE

// Members declared as private are only accessible within the class.
// Attempting to access a private member from outside the class will result in a compilation error.

class MyDate {
    // Properties
    private year: number;
    private month: number;
    private day: number;
  
    // Constructor
    constructor(year: number, month: number, day: number) {
      this.year = year;
      this.month = month;
      this.day = day;
    }
  
    // Method to get the full date as a string
    getFullDate(): string {
      return `${this.year}-${this.formatNumber(this.month)}-${this.formatNumber(this.day)}`;
    }
  
    // Method to set the year
    setYear(newYear: number): void {
      this.year = newYear;
    }
  
    // Method to set the month
    setMonth(newMonth: number): void {
      if (newMonth >= 1 && newMonth <= 12) {
        this.month = newMonth;
      } else {
        console.error("Invalid month. Month must be between 1 and 12.");
      }
    }
  
    // Method to set the day
    setDay(newDay: number): void {
      if (newDay >= 1 && newDay <= 31) {
        this.day = newDay;
      } else {
        console.error("Invalid day. Day must be between 1 and 31.");
      }
    }
  
    // Helper method to format numbers (add leading zero if needed)
    private formatNumber(num: number): string {
      return num < 10 ? `0${num}` : `${num}`;
    }
  }
  
  // Example usage
  const myCustomDate = new MyDate(2024, 1, 21);
  
  console.log(myCustomDate.getFullDate()); // Output: 2024-01-21
  
  myCustomDate.setYear(2025);
  myCustomDate.setMonth(12);
  myCustomDate.setDay(31);
  
  console.log(myCustomDate.getFullDate()); // Output: 2025-12-31

  
//   PROTECTED
// Members declared as protected are accessible within the class and its subclasses.
// Similar to private, protected members are not accessible from outside the class unless it's through a derived class.
  

class MyBaseClass {
    protected myProtectedProperty: string;
  
    constructor(myProtectedProperty: string) {
      this.myProtectedProperty = myProtectedProperty;
    }
  
    protected myProtectedMethod(): void {
      console.log("This is a protected method.");
    }
  }
  
  class MyDerivedClass extends MyBaseClass {
    // Accessing protected members from the base class is allowed in the derived class
    public getProtectedProperty(): string {
      return this.myProtectedProperty;
    }
  
    // Accessing protected methods from the base class is allowed in the derived class
    public callProtectedMethod(): void {
      this.myProtectedMethod();
    }
  }
  
  const myObject1 = new MyDerivedClass("Hello, World!");
  console.log(myObject1.getProtectedProperty()); // Accessing protected property
  myObject1.callProtectedMethod(); // Calling protected method
  