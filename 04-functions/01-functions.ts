// basic add function

function add(a:number, b:number):number{
    return a+b
}
console.log(add(3,4))

// If a function does not return a value, you can use the void type as the return type. The void keyword indicates that the function doesn’t return any value.

function echo(message:string):void{
    console.log(message.toLocaleUpperCase())
}
echo("Hey There")