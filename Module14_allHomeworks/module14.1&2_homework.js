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

let nameNode = listXMLDOM.querySelectorAll('name');
let firstNameNode = listXMLDOM.querySelectorAll('first');
let secondNameNode = listXMLDOM.querySelectorAll('second');
let ageNode = listXMLDOM.querySelectorAll('age');
let profNode = listXMLDOM.querySelectorAll('prof');

let personsList = {
  list: [
    {
      name: `${firstNameNode[0].textContent} ${secondNameNode[0].textContent}`,
      age: +ageNode[0].textContent,
      prof: profNode[0].textContent,
      lang: nameNode[0].getAttribute('lang'),
    },
    {
      name: `${firstNameNode[1].textContent} ${secondNameNode[1].textContent}`,
      age: +ageNode[1].textContent,
      prof: profNode[1].textContent,
      lang: nameNode[1].getAttribute('lang'),
    },
  ],
};

console.log(personsList);
console.log(personsList.list[1].age);

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
