// node 03-js-fun-args.js

// fun = (arg) => {
//     console.log(arg.salary);
// }

// let argToPass = 'abc';

// fun(argToPass);

// callbacks in JS 

fun2 = (arg) => { // this function needs a function as argument 
    console.log('fun2 function');
    arg(); // function call 
}


let funAsArg = () => { // this function is call back funciton 
    console.log('funAsArg fuction');
}

fun2(funAsArg); // function call 

// shortcut 

fun3 = (arg) => {
    console.log('fun3 function');
    arg();
}

// call back with anonymous funciton 

fun3(() => { 
    console.log('anonymous function'); 
});


// old JS 
function fun9() {

}

// new JS / ES compliant JS 
const fun10 = () => {

}

// lamdba expression 
// () -> {}
