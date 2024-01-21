// EXAMPLE 1
//  Defining Class
class Animals{
    // Properties
    name:String;
    age:number;

    // Constructor - initializes the object when created
    constructor(name:String, age:number){
        this.name = name
        this.age = age
    }

    // Method
    makeSound():void{
        console.log("dog barking!!!")
    }
}
// creating an instance of the class
const animalObj = new Animals("Jon",22)

// Accessing properties using class
console.log(animalObj.name)
console.log(animalObj.age)

// Calling a method
animalObj.makeSound()

// Example 2
class Person{
    fName:String
    lName:String
    course:String
    year:number

    constructor(fName:String, lName:String,course:String,year:number){
        this.fName = fName
        this.lName = lName
        this.course = course
        this.year = year
    }

    getFullName():String {
        return `My name is ${this.fName} ${this.lName} i am in ${this.course} ${this.year} year`
    }

}

const person1 = new Person("Govind","Kumar","MCA",2)

console.log(person1.getFullName())