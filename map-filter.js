//.......................map.....................
const numbers = [2, 4, 5, 6, 7, 8];
// const output = [];

// 1st way 
// for (let i=0 ; i<numbers.length ; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output); //output : [ 4, 16, 25, 36, 49, 64 ]


//using map ( if we pass a function on map, it can take 3 parameters element, index, array)
/*
numbers.map(function(element, index, array){
    console.log(element, index, array);
})
*/


//2nd way
/*
const result = numbers.map(function(element){
    return element * element;
})

console.log(result);   //output : [ 4, 16, 25, 36, 49, 64 ]
*/



//3rd way 
/*
const result = numbers.map(x => x * x);  //arrow function
console.log(result);  //output : [ 4, 16, 25, 36, 49, 64 ]
*/

//.......................filter...........................
//it gives output from an array if our condition is fulfilled. returns an array

/*
const bigger = numbers.filter( x => x>5);
console.log(bigger); //output : [ 6, 7, 8 ]
*/

//.....................find.................
//it returns the first element which satisfy the given condition. 
const big = numbers.find( x => x>5);
console.log(big); //output : 6
