// Sometimes, you may need to store a value in a variable. But you don’t know its type at the time of writing the program. And the unknown value may come from a third-party API or user input.


// If you declare a variable without specifying a type, TypeScript assumes that you use the any type. This feature is called type inference. Basically, TypeScript guesses the type of the variable.


let result: any;
result = 10.123;
console.log(result.toFixed()); // 10
