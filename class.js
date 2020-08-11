class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("Hero","Balam",40000);
console.log(heroPerson); //output: Person { firstName: 'Hero', lastName: 'Balam', salary: 40000 }

const friendlyPerson = new Person("Srabanty", "Prima", 50000);
console.log(friendlyPerson);  //output : Person { firstName: 'Srabanty', lastName: 'Prima', salary: 50000 }
