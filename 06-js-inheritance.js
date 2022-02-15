// node 06-js-inheritance.js

class Animal {
    petName;
    color;
    constructor(petName, color) {
        this.petName = petName;
        this.color = color;
    }
}

class Dog extends Animal {

}

class Cat extends Animal {

}

let myDog = new Dog();
console.log(myDog);

let myCat = new Cat();
console.log(myCat);