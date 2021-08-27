'use strict';

/*методы - функтии, записанные в свойства объектов. фактический метод - это роль, которую выполняет функтия будучи привязана к объекту.

const company = {name: 'Amazon'};
создание фунции, которая сразу же присваивается свойству getname и становиться методом 
company.getName = () => 'Amazon'; // функтия возвращает строку 'Amazon'

мызов метода
company.getName(); // 'Amazon'

еще один способ добовления функтии в объект 

при создании объекта
const obj = {
    getName: () => 'Amazon',
};

через присваивание константы
const company = {name: 'Amazon'};
const getName = () => 'Amazon';
company.getname = getName;

смысла в током результате мало. метод возвращает строку и никак не использует данные объекта 
const company = {name: 'Amazon'};
company.getName = () => 'Amazon';
company.getName(); // 'Amazon'
company.name = 'Amazon Plus';
имя поменяли, на возврат осталя прежний
company.getName(); // 'Amazon'

для доступа к данным объекта внутри метода используется ключевое слово this.
внутри методов оно ссылаеться на текщий объект, к которому привязен метод.

const company = {name: 'Amazon', employees: []};
методы извлекающие данные из объекта называються геттерами
company.getName = function getName() {
    return this.name;
}

company.getName(); // Amazon
company.name = 'Amazon Plus';
copany.getName(); // Amazon Pluse

методы меняющие данные объектами называются сеттарами
company.setName = function setName(name) {
    this.name = name;
}
добовление сотрудников
company.addEmployee = function addEmployee(user) {
    важно, что на момент вызова, employess уже добавлин в company
    this.emploees.push(user);
}

company.setName('Amazon plues');
company.getName(); // Amazon plues

const user = {name: 'Petya};
company.addEmploee(user);
console.log(company.emploees); // [{name: 'petya'}]


Cпособы записи функций 

function declaration
function inc(a) {
    return a + 1;
}

function expression
const sum = function(a, b) {
    return a + b;
}

lambda expression
const max = (a, b) => (a > b ? a : b);

lambda function
const avg = (a, b) => {
    const s = sum(a, b);
    return s / 2;
};

*/