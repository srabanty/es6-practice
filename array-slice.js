const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5); //staring index 2, and ending index is (5 er previous) 4

console.log(part);  //output : [ 3, 4, 5 ]
console.log(nums);  //output : [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//const removed = nums.splice(2,3); //starting index 2 and will remove 3 items 
const removed = nums.splice(2,3, 77); // output : [ 1, 2, 77, 6, 7, 8 ] remove 3 items and set 77
console.log(removed);  //output : [ 3, 4, 5 ]
console.log(nums);  // output : [ 1, 2, 6, 7, 8 ]

//.............. slice() don't remove items but splice() remove items from array .........

// const together = nums.join("");
// console.log(together); //output : 1277678

// const together = nums.join(",");
// console.log(together); //output : 1,2,77,6,7,8

const together = nums.join(" , ");
console.log(together); //output : 1 , 2 , 77 , 6 , 7 , 8
console.log(typeof(together)); //output : string
