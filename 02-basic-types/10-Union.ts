// allows you to store a value of one or several types in a variable.

// Sometimes, you will run into a function that expects a parameter that is either a number or a string. For example:

function add(a: any, b: any) {

    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b
    }

    else if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a.concat(b)
    }
    else { throw new Error("Parameters must be either string or numbers") }

}

console.log(add(2, 3)) // 5
console.log("g", "k")  // g k
// console.log(add(2, "a"))


// USING UNION

function add2(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } else {
        throw new Error("Parameters must be either string or numbers");
    }
}

// Examples
console.log(add2(2, 3));        // Output: 5
console.log(add2('Hello, ', 'World!'));  // Output: Hello, World!


