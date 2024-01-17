// tuple works like an array with some additional considerations

/*

        The number of elements in the tuple is fixed.
        The types of elements are known, and need not be the same.

*/

let skill:[string,number] = ["s",2]

// order is imp here
// let skill2 = [number, string] = ["s",3]  ------ error due to order


// For this reason, it’s a good practice to use tuples with data that are related to each other in a specific order.

// e.g.
let rgbColor: [number, number, number] = [255, 0, 0];