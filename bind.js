const normalPerson ={
    firstName : 'Rahim',
    lastName:'Karim',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(normalPerson.salary); //output : 15000
// normalPerson.chargeBill(1000);
// console.log(normalPerson.salary);  //output : 14000



//....Bind.........
/*
const heroPerson = {
    firstName:'Hero',
    lastName: 'Balam',
    salary: 25000
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
console.log(heroPerson); //output :{ firstName: 'Hero', lastName: 'Balam', salary: 25000 }
heroChargeBill(2000);
console.log(heroPerson); //output : { firstName: 'Hero', lastName: 'Balam', salary: 23000 }
heroChargeBill(2000);
console.log(heroPerson);  //output : { firstName: 'Hero', lastName: 'Balam', salary: 21000 }
*/

//............call..........
/*
const heroPerson = {
    firstName:'Hero',
    lastName: 'Balam',
    salary: 25000
}
console.log(heroPerson); //output : { firstName: 'Hero', lastName: 'Balam', salary: 25000 }

normalPerson.chargeBill.call(heroPerson, 1000);
console.log(heroPerson); //output : { firstName: 'Hero', lastName: 'Balam', salary: 24000 }
*/

//..............apply..................
const heroPerson = {
    firstName:'Hero',
    lastName: 'Balam',
    salary: 25000
}
console.log(heroPerson); //output : { firstName: 'Hero', lastName: 'Balam', salary: 25000 }

normalPerson.chargeBill.apply(heroPerson,[1000])
console.log(heroPerson); //output : { firstName: 'Hero', lastName: 'Balam', salary: 24000 }

