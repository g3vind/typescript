// e.g.1
function sum(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b);
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))