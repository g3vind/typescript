// The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

// Typically, you use the never type to represent the return type of a function that always throws an error. For example:

function raiseError(message:string){
    throw new Error(message)
}

// The return type of the following function is inferred to the never type:

function reject(){
    return raiseError("rejected")
}
