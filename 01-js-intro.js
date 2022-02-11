
console.log('Hello world!');

num = 10; // avoide this 
var num2 = 20; // avoide this 

let num3 = 30;  // use for variables 
const num4 = 40; // use for constants 

// primitive types 
// number string boolean

// falsy false, 0, null, undefined, NaN
// truthy 


let firstName = 'abc';
let salary = 10.5;
let isMarried = false;

let myMarks = [98, 95, 'abc', true, [], {}];

// objects in JS 
// two types - 
// 1. proper JS objects, 2. objects of a class 

// 1. proper JS object - 

let employee = {
    eid: 101,
    firstName: 'Sonu',
    salary: 50000,
    isMarried: false,
    phones: [9876543210, 7418529630],
    address: {
        street: 'Abids road',
        city: 'Hyderanad',
        pin: 500001
    }
};

console.log(employee);
console.log(employee.address.city);
