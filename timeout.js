/*
function doSomething(){
    console.log(3333)
}

console.log(1222);
doSomething();
console.log(444444);
console.log(5555555);
console.log(66666);
//output : 
// 1222
// 3333
// 444444
// 5555555
// 66666
*/


//..........setTimeOut..........
function doSomething(){
    console.log(3333)
}

console.log(1222);
// setTimeout(doSomething); //will execute after all the work is done
// setTimeout(doSomething, 1000); //will execute after  all work done and then after 1000 miliSec /1sec
/*
setTimeout(function(){   // the function will execute after all work done and then after 4sec
    console.log("Waiting");
},4000)
*/

//output :
// 1222
// 444444
// 5555555
// 66666
// 3333


//............setInterval............
setInterval(() => { //will execute after 3s repeatedly
    console.log("I m Here"); 
}, 3000);
console.log(444444);
console.log(5555555);
console.log(66666);



