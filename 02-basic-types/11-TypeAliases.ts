// Type aliases allow you to create a new name for an existing type

// type alias = existingType;

type chars = string
let messages:chars // same as string type

// it is useful for creating type aliases for union types

type alphaNumeric = string | number
let input:alphaNumeric
input = "iwdfiw"  // valid
input = 22 // valid
// input = false // error



// Use type aliases to define new names for existing types