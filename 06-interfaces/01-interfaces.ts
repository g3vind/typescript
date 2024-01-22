// for enforcing type checking
// way to define contracts for the structure of objects

// defining an interface
interface Person{
    fName:String
    lName:String
    age:number

    // optional property
    email?:String

    // Method Signature
    getFullName():String
}

// Implement interface in a class
class Employee implements Person{
    fName:String
    lName:String
    age:number
    email?:String

    constructor(fName:String,lName:String,age:number,email?:String){
        this.fName = fName
        this.lName = lName
        this.age = age
        this.email = email
    }
    getFullName(): String {
        return `${this.fName} ${this.lName}`
    }
}

// Usage
const employee = new Employee("Jon","Doe",22,"sdnjc")
