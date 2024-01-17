// Types : Primitive & Objects

// -------------------PRIMITIVES----------------

/*

string, number, boolean, null, undefined, symbol

*/





// ----------TYPE ANNOTATIONS---------------

/*

let variableName: type;
let variableName: type = value;
const constantName: type = value;

*/

// e.g.

let counter:number
counter = 1
console.log(counter)

// assigning diff type
// counter = "a" ---------- error

// ------------ARRAYS TYPE ANNOTATION------------------
let names:string[] = ["a","b"]

// OBJECT TYPE ANNOTATION
let person:{
    name:string,
    age:number
}

person={
    name:"Govind",
    age:22
}


//----------------Function arguments & return types----------------------

let greeting : (name: string) => string;

greeting = function(name:string){
    return `HI${name}`
}

// Type Annotation : You explicitly tell TypeScript the type
// Type inference	:   TypeScript guesses the type



/*
In practice, you should always use the type inference as much as possible. And you use the type annotation in the following cases:

(a) When you declare a variable and assign it a value later.
(b) When you want a variable that can’t be inferred.
When a function returns the any type and you need to clarify the value.
Summary
Type inference occurs when you initialize variables, set parameter default values, and determine function return types.
TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.
TypeScript also uses contextual typing to infer types of variables based on the locations of the variables.

*/
