'use strict'

let person = {
    name: 'Maks',
    age: 32
}

let user = Object.create(person);

user.city = 'Moscow';
user.married = false;


// Задание 12.1

function printOwnProps(obj) {
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(key,":",obj[key]); 
        }
    }
}

printOwnProps(user);


// задание 12.2

function checkNameProp(key, obj){
    return key in obj;
}
console.log(checkNameProp('age', user));


// задание 12.3

function createEmptyObj(){
    return Object.create(null);
}

let emptyObj = createEmptyObj();

console.log(emptyObj);