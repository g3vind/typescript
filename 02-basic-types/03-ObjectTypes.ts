let employee:object

employee={
    fName:"John",
    lName:"Doe",
    age:22
}
console.log(employee)

//  or

let employee2:object = {
    fName:"John",
    lName:"Doe",
    age:22
}
console.log(employee2)

// To explicitly specify properties of the employee object, you first use the following syntax to declare the employee object:

let employee3: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
employee3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// Or you can combine both syntaxes in the same statement like this:
let employee4: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};