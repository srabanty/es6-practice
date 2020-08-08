const num1 = 20;
const num2 = "20";
if(num1 == num2){ // only check the value. not datatype
    console.log("true");
}
else{
    console.log("false");
}


if(num1 === num2){ // only check the value. also datatype
    console.log("true");
}
else{
    console.log("false");
}