// node 05-js-class-and-object.js

// console.log('abc');

// let employee = {
//     eid: 101,
//     fName: 'Sonu'
// }

// console.log(employee);
// console.log(employee.fName);



class Employee {
    // 1. features - fields / variables / proeprties 
    eid;
    firstName;
    salary;

    // 3. constructor 
    constructor(eid, firstName, salary) {
        this.eid = eid;
        this.firstName = firstName;
        this.salary = salary;
    }

    // 2. behaviours - methods / functions 
    work = () => {
        console.log('Employee works...');
    }
}

// Java 
// Employee emp = new Employee();

// JavaScript 
const emp = new Employee();
// console.log(emp); // empty object 
emp.eid = 101;
emp.firstName = 'Sonu';
emp.salary = 50000;
console.log(emp); // object with values assigned 
// console.log(emp.firstName);
// emp.work();

const emp2 = new Employee();
emp2.eid = 102;
emp2.firstName = 'Monu';
emp2.salary = 60000;
console.log(emp2);

const emp3 = new Employee();
emp3.eid = 103;
emp3.firstName = 'Tonu';
emp3.salary = 55000;
console.log(emp3);

// object of a class 
const emp4 = new Employee(104, 'Tonu', 45000);
console.log(emp4);
emp4.work();

// proper JS object 
const obj = {
    abc: 10,
    def: 'xyz',
    ghi: 50000
}
console.log(obj);
