// e.g.1
let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];

// Once you define an array of a specific type, TypeScript will prevent you from adding incompatible values to the array.

// example
// skills.push(100)


// ----------Storing values of mixed types------------------
let scores = ['Programming', 5, 'Software Design', 4]; 

let scores2 : (string | number)[];
scores2 = ['Programming', 5, 'Software Design', 4]; 
console.log(typeof(scores2))  // object
