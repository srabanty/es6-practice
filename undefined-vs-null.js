// When Will show undefined ?
// 1
let myName; // didn't set any value

// 2
function add(num1,num2){
    console.log(num1,num2); 
    // didn't return anything
}

// 3
function add(num1,num2){
    console.log(num1,num2); 
    num1 + num2;
    return     // didn't include what to return
}

// 4
const me = {name:"Prima", phone:4567}
console.log(me.study); // didn't set any property with name "study". but wanted to access. 

// 5
const fun = undefined;
console.log(fun); //but value is set is undefined & its a reserve keyword

// 6
const arr =[10,12,20];
console.log(arr[11]); //index number 11 is not available

// we set the value as null explicitly to show the value is empty;