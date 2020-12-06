'use strict';

// задание 14.1

const parser = new DOMParser();

const listXML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const listXMLDOM = parser.parseFromString(listXML, 'text/xml');
let students = listXMLDOM.querySelectorAll('student');
let personsList = {
  list: []
};

students.forEach(student => {
  let nameNode = student.querySelector('name');
  let firstNameNode = student.querySelector('first');
  let secondNameNode = student.querySelector('second');
  let ageNode = student.querySelector('age');
  let profNode = student.querySelector('prof');
  let person = {
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: +ageNode.textContent,
    prof: profNode.textContent,
    lang: nameNode.getAttribute('lang'),
  };
  personsList.list.push(person);
})

console.log(personsList);
console.log(personsList.list[1].age);

// Не совсем верно, т.к. ваше решение подходит только для ситуации, когда мы знаем, что в xml-объекте будет только 2 узла student. В реальности, если мы получаем ответ с сервера, их может быть сколько угодно. Исправила решение на более универсальный вариант

// задание 14.2

let listStringJSON = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

let listPersons = JSON.parse(listStringJSON);

console.log(listPersons);
