// defining an interface for shapes
interface Shape{
    calculateArea():number
    display():void
}

// implementing the interface in class representing a circle
class Circle implements Shape{
    radius:number

    constructor(radius:number){
        this.radius = radius
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2
    }

    display(): void {
        console.log(`Circle - Radius: ${this.radius}`)
    }
}
// Implement the interface in a class representing a rectangle
class Rectangle implements Shape{
    width:number
    height:number

    constructor(height:number, width:number){
        this.height = height
        this.width = width
    }

    calculateArea():number{
        return this.width * this.height
    }
    display(): void {
        console.log(`Rectangle Height : ${this.height} Width: ${this.width}`)
    }
}

// Function that operates on objects implementing the Shape interface

function printShapeInfo(shape:Shape):void{
    console.log(`Area: ${shape.calculateArea()}`)
    shape.display()
}

const circle = new Circle(4)
const rectangle = new Rectangle(3,5)

printShapeInfo(circle)
printShapeInfo(rectangle)