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


// Задание 12.4

function Device(brand, model, country) {
    this.brand = brand,
    this.model = model,
    this.madeIn = country,
    this.isOn = false // показывает подключен ли прибор к сети. По умолчанию выключен
}
Device.prototype.turnOnOff = function turnOn(connect){ //Этот метод включает\выключает прибор
    if (connect == true) {this.isOn = true;
        console.log(`${this.brand} ${this.model} is on`);
    }
    else if (connect == false) {this.isOn = false;
        (`${this.brand} ${this.model} is off`);
    }
}
Device.prototype.getPower = function getPower(voltage, amperage){
    console.log(`Power of the ${this.brand} ${this.model} is ${voltage * amperage} W`);
}

function CoffeMaker (brand, model, country, type) {
    Device.call(this, brand, model, country );
    
    this.type = type
}

CoffeMaker.prototype = new Device();
CoffeMaker.prototype.sayHi = function() {
    console.log(`Hi! I am ${this.brand} ${this.model}`);
} 

const philipsHD7459 = new CoffeMaker('Philips', 'HD7459', 'Netherlands', 'drip');
const arieteMA11 = new CoffeMaker('Ariete', '11 Moka Aroma', 'China', 'geyser');

console.log(philipsHD7459);
philipsHD7459.getPower(200, 5);
philipsHD7459.turnOnOff(true); // включаем прибор в сеть
console.log(philipsHD7459);
philipsHD7459.sayHi();

console.log(arieteMA11);
arieteMA11.sayHi();
console.log(arieteMA11.model);

function WashingMachine (brand, model, country, maxCapacity, waterСonsumption) {
    Device.call(this, brand, model, country );

    this.maxCapacity = maxCapacity,
    this.waterСonsumption = waterСonsumption;
}

WashingMachine.prototype = new Device();
WashingMachine.prototype.getWaterCapacity = function() {
    console.log(`Water consumption of ${this.brand} ${this.model} is ${this.waterСonsumption} L`);
} 

const ariston6013B = new WashingMachine ('Ariston', '6013B', 'Russia', 7, 10);

console.log(ariston6013B);
ariston6013B.getWaterCapacity();
ariston6013B.getPower(220, 10);


// Задание 12.5


class ElectricDevice {
    constructor (brand, model, country) {
        this.brand = brand,
        this.model = model,
        this.madeIn = country,
        this.isOn = false
    }
  
    getPower(voltage, amperage){
        console.log(`Power of the ${this.brand} ${this.model} is ${voltage * amperage} W`);
    }
  
    turnOn(connect){ //Этот метод включает\выключает прибор
        if (connect == true) {this.isOn = true;
            console.log(`${this.brand} ${this.model} is on`);
        }
        else if (connect == false) {this.isOn = false;
            console.log(`${this.brand} ${this.model} is off`);
        }
    }
}
  
class ElectricKettle extends ElectricDevice {
    constructor(brand, model, country, V) {
        super(brand, model, country)
        this.V = V + ' L';
    }
  
    checkTemperature() {
        if (this.isOn == true) console.log(`${this.brand} ${this.model} is hot!`);
        else console.log(`${this.brand} ${this.model} is cold`)
    }
}
  
let boschTWK7805 = new ElectricKettle('Bosch', 'TWK7805', 'Germany', 2);

console.log(boschTWK7805);
boschTWK7805.getPower(220, 10);
boschTWK7805.checkTemperature();
boschTWK7805.turnOn(true);
boschTWK7805.checkTemperature()

class ElectricStove extends ElectricDevice {
    constructor(brand, model, country, grill) {
        super(brand, model, country)
         this.grill = grill;
    }
  
    checkGrill() {
        if (this.grill == true) console.log(`${this.brand} ${this.model} have grill :)`);
        else console.log(`${this.brand} ${this.model} don't have grill :(`)
    }
}
  
let ZanussiH1W = new ElectricStove('Zanussi', 'ZCV 9540 H1W', 'Romania', false);
console.log(ZanussiH1W);
ZanussiH1W.checkGrill();
ZanussiH1W.getPower(200, 12);