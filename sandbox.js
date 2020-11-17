"use strict";

// let person = {
//   name: 'Maks',
//   age: 32
// }

// let user = Object.create(person);

// user.city = 'Moscow';
// user.married = false;

// function printOwnValues(item) {
//   for(let key in item){
//     if (item.hasOwnProperty(key)) {
//       console.log(key,":",item[key]);
//     }
//   }
// }

// printOwnValues(user);
// printOwnValues(person);

// function findKey(item, num){
//   for(let key in item)
//     if (item[key] == num) return console.log(key);
// }
// findKey(user, 32);

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

// function checkNameProp(obj, string){
//   for(let key in obj){
//     if (key == string) return true;
//   }
//   return false;
// }
// console.log(checkNameProp(user, 'age'));

// function createEmptyObj(){
//   return Object.create(null);
// }

// let emptyObj = createEmptyObj();
// console.log(emptyObj);
// console.log(typeof(emptyObj));

// console.log('true' == true);

// function checkNameProp(name, obj){
//   return name in obj;
// }
// console.log(checkNameProp('age', user));

// let animal = {
//   eats: true,
//   age: 10
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// // rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

// let descriptor = Object.getOwnPropertyDescriptor(animal, 'age');

// console.log(descriptor);

// let user1 = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// console.log(user1.fullName);
// console.log(user1);

// function isPrime(num) {
//   for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//       if(num % i === 0) return false;
//   return num > 1;
// }

// console.log(isPrime(11))

// console.log(isPrime);

// class User {

//   constructor(name, isMarried) {
//     this.name = name;
//     this.isMarried = isMarried;
//   }

//   sayHi() {
//     console.log(this.name);
//   }

// }

// // Использование:
// let user = new User("Иван", false);
// user.sayHi();

// console.log(user);
// console.log(user.isMarried);

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed} км/ч`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит`);
//   }
// }

// // Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!

// let cat = new Animal('Барсик');
// cat.stop()
// // cat.run(30)
// console.log(cat)

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// // walk взят из прототипа
// rabbit.walk(); // Animal walk
// console.log(rabbit);
// console.log(animal);

// // for(let key in rabbit) console.log(key,rabbit[key]);

// let person = {
//   name: 'Maks',
//   age: 32
// }

// let user = Object.create(person);

// user.city = 'Moscow';
// user.married = false;

// console.log(user);

// const person = {
//   name: 'Maks',
//   getFullName: function(lastName) {
//     console.log(`${this.name} ${lastName}`);
//   }
// }

// person.getFullName('Salikhov')

// console.log(person);

// function Car(marka, model) {
//   this.marka = marka,
//   this.model = model
//   // this.price = price
// }

// Car.prototype.buy = function(price) {
//   if(price < 1000) console.log('Can buy');
//   else console.log('cant buy')
// }
// let opel = new Car('opel', 'astra');

// opel.buy(100);

// // console.log(opel);

// function Sedan() {

// }

// function Candy(){
//   this.taste = "Oh my!"
// }

// Candy.prototype.getWeight = function getWeight(weight){
//   console.log(`Weight is ${weight} g`)
// }

// Candy.prototype.turnOn = function turnOn(a){
//   if (a == true) this.isOn = true;
// }

// // const twix = new Candy('twix');
// // const snickers = new Candy('snickers');

// // twix.getWeight(40)
// // snickers.getWeight(50)

// // twix.turnOn(true);
// // console.log(twix)
// // console.log(snickers)

// function ChocoCandy(name, choco) {
//   this.name = name,
//   this.choco = choco,
//   this.isOn = false
// }

// ChocoCandy.prototype = new Candy();

// const twix = new ChocoCandy('twix', 'milk');
// twix.turnOn(true);
// twix.getWeight(100);
// console.log(twix);
// console.log(twix.taste)

// const snickers = new ChocoCandy('snickers', 'milk');
// snickers.__proto__.taste = "Meh";
// console.log(snickers);
// console.log(snickers.taste);

// function Device() {
// }
// Device.prototype.turnOn = function turnOn(connect){
//   if (connect == true) this.isOn = true;
// }
// Device.prototype.getPower = function getPower(voltage, amperage){
//   console.log(`Power of the device is ${voltage * amperage} W`);
// }

// function CoffeMaker (brand, model, country) {
//   this.brand = brand,
//   this.model = model,
//   this.madeIn = country,
//   this.isOn = false
// }

// CoffeMaker.prototype = new Device();
// CoffeMaker.prototype.sayHi = function() {
//   console.log('hi');
// }

// const DeLOngA300 = new CoffeMaker('DeLOng', 'A300', 'Japan');
// console.log(DeLOngA300);
// DeLOngA300.turnOn(true);
// console.log(DeLOngA300);
// DeLOngA300.getPower(220, 5);
// DeLOngA300.sayHi()

// function Device(brand, model, country) {
//   this.brand = brand,
//   this.model = model,
//   this.madeIn = country,
//   this.isOn = false
// }
// Device.prototype.turnOnOff = function turnOn(connect){
//   if (connect == true) {this.isOn = true;
//     console.log(`${this.brand} ${this.model} is on`);
//   }
//   else if (connect == false) {this.isOn = false;
//     (`${this.brand} ${this.model} is off`);
//   }
// }
// Device.prototype.getPower = function getPower(voltage, amperage){
//   console.log(`Power of the ${this.brand} ${this.model} is ${voltage * amperage} W`);
// }

// function CoffeMaker (brand, model, country, type) {
//   Device.call(this, brand, model, country );

//   this.type = type
// }

// CoffeMaker.prototype = new Device();
// CoffeMaker.prototype.sayHi = function() {
//   console.log(`Hi! I am ${this.brand} ${this.model}`);
// }

// const philipsHD7459 = new CoffeMaker('Philips', 'HD7459', 'Netherlands', 'drip');
// const arieteMA11 = new CoffeMaker('Ariete', '11 Moka Aroma', 'China', 'geyser');

// console.log(philipsHD7459);
// philipsHD7459.getPower(200, 5);
// philipsHD7459.turnOnOff(true);
// console.log(philipsHD7459);
// philipsHD7459.sayHi();

// console.log(arieteMA11);
// arieteMA11.sayHi();
// console.log(arieteMA11.model);

// function WashingMachine (brand, model, country, maxCapacity, waterСonsumption) {
//   Device.call(this, brand, model, country );

//   this.maxCapacity = maxCapacity,
//   this.waterСonsumption = waterСonsumption;
// }

// WashingMachine.prototype = new Device();
// WashingMachine.prototype.getWaterCapacity = function() {
//   console.log(`Water consumption of ${this.brand} ${this.model} is ${this.waterСonsumption} L`);
// }

// const ariston6013B = new WashingMachine ('Ariston', '6013B', 'Russia', 7, 10);

// console.log(ariston6013B);
// ariston6013B.getWaterCapacity();
// ariston6013B.getPower(220, 10);

// class User {

//   constructor(name) {
//     this.name = name;
//     this.country = 'Russia'
//   }

//   sayHi() {
//     console.log(this.name);
//   }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();
// console.log(user)

// class Animal {
//   constructor(name, age) {
//     this.speed = 0;
//     this.name = name;
//     this.age = age;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит.`);
//   }
// }

// // Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }

// let rabbit = new Rabbit("Белый кролик", 10);

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!
// console.log(rabbit)

// class Animal {

//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   // ...
// }

// class Rabbit extends Animal {

//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   // ...
// }

// // теперь работает
// let rabbit = new Rabbit("Белый кролик", 10);
// console.log(rabbit)

// function Device(brand, model, country) {
//   this.brand = brand,
//   this.model = model,
//   this.madeIn = country,
//   this.isOn = false // показывает подключен ли прибор к сети. По умолчанию выключен
// }
// Device.prototype.turnOnOff = function turnOn(connect){ //Этот метод включает\выключает прибор
//   if (connect == true) {this.isOn = true;
//       console.log(`${this.brand} ${this.model} is on`);
//   }
//   else if (connect == false) {this.isOn = false;
//       (`${this.brand} ${this.model} is off`);
//   }
// }
// Device.prototype.getPower = function getPower(voltage, amperage){
//   console.log(`Power of the ${this.brand} ${this.model} is ${voltage * amperage} W`);
// }

// function CoffeMaker (brand, model, country, type) {
//   Device.call(this, brand, model, country );

//   this.type = type
// }

// CoffeMaker.prototype = new Device();
// CoffeMaker.prototype.sayHi = function() {
//   console.log(`Hi! I am ${this.brand} ${this.model}`);
// }

// const philipsHD7459 = new CoffeMaker('Philips', 'HD7459', 'Netherlands', 'drip');
// const arieteMA11 = new CoffeMaker('Ariete', '11 Moka Aroma', 'China', 'geyser');

// // console.log(philipsHD7459);
// // philipsHD7459.getPower(200, 5);
// // philipsHD7459.turnOnOff(true); // включаем прибор в сеть
// // console.log(philipsHD7459);
// // philipsHD7459.sayHi();

// // console.log(arieteMA11);
// // arieteMA11.sayHi();
// // console.log(arieteMA11.model);

// function WashingMachine (brand, model, country, maxCapacity, waterСonsumption) {
//   Device.call(this, brand, model, country );

//   this.maxCapacity = maxCapacity,
//   this.waterСonsumption = waterСonsumption;
// }

// WashingMachine.prototype = new Device();
// WashingMachine.prototype.getWaterCapacity = function() {
//   console.log(`Water consumption of ${this.brand} ${this.model} is ${this.waterСonsumption} L`);
// }

// const ariston6013B = new WashingMachine ('Ariston', '6013B', 'Russia', 7, 10);

// // console.log(ariston6013B);
// // ariston6013B.getWaterCapacity();
// // ariston6013B.getPower(220, 10);

class ElectricDevice {
  constructor(brand, model, country) {
    (this.brand = brand),
      (this.model = model),
      (this.madeIn = country),
      (this.isOn = false);
  }

  getPower(voltage, amperage) {
    console.log(
      `Power of the ${this.brand} ${this.model} is ${voltage * amperage} W`
    );
  }

  turnOn(connect) {
    //Этот метод включает\выключает прибор
    if (connect == true) {
      this.isOn = true;
      console.log(`${this.brand} ${this.model} is on`);
    } else if (connect == false) {
      this.isOn = false;
      `${this.brand} ${this.model} is off`;
    }
  }
}

class ElectricKettle extends ElectricDevice {
  constructor(brand, model, country, V) {
    super(brand, model, country);
    this.V = V + " L";
  }

  checkTemperature() {
    if (this.isOn == true) console.log(`${this.brand} ${this.model} is hot!`);
    else console.log(`${this.brand} ${this.model} is cold`);
  }
}

let boschTWK7805 = new ElectricKettle("Bosch", "TWK7805", "Germany", 2);
console.log(boschTWK7805);
boschTWK7805.getPower(220, 10);
boschTWK7805.checkTemperature();
boschTWK7805.turnOn(true);
boschTWK7805.checkTemperature();

class ElectricStove extends ElectricDevice {
  constructor(brand, model, country, grill) {
    super(brand, model, country);
    this.grill = grill;
  }

  checkGrill() {
    if (this.grill == true)
      console.log(`${this.brand} ${this.model} have grill :)`);
    else console.log(`${this.brand} ${this.model} don't have grill :(`);
  }
}

let ZanussiH1W = new ElectricStove("Zanussi", "ZCV 9540 H1W", "Romania", false);
console.log(ZanussiH1W);
ZanussiH1W.checkGrill();
ZanussiH1W.getPower(200, 12);
