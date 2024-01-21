// Parent Class
class Animal{
    name:String

    constructor(name:String){
        this.name = name
    }

    makeSound():void{
        console.log("vsijdncsnc")
    }
}

// Derived Class

class Dog extends Animal{
    breed:String

    constructor(name:String, breed:String){
        super(name)
        this.breed = breed
    }

    // overriding method from base class
    makeSound():void{
        console.log("Woof! woof!")
    }
    // additional method to dog class
    fetch():void{
        console.log("fetching the ball!")
    }
}
const myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog.name);       // Accessing property from the base class
myDog.makeSound();             // Calling overridden method from the base class
console.log(myDog.breed);      // Accessing property from the derived class
myDog.fetch();                 // Calling method specific to the derived class