'use strict'

/*
Объекты

const user = {
    name: 'inna',
    email: 'inna@example.com',
    password: 'qwerty',
    married: false,
    age: 25,
};

const rectangl = {
    widtch: 10, // property: value
    height: 5,
};
обращение к свойствам бъекта
console.log(user.name);
console.dir(user['name']);
console.log(user['name']);

Динамическая изменения имени свойства

const user = {name: 'vasya', married: true, age: 25};
let propertyName = 'name'; 
console.log(user[propertyName]);

propertyName = 'married';
console.log(user[propirtyName]);

Модификация 
Для создания и обновления значения свойств используется операция - присваивание.
const user = {name: 'vasya', married: true, age: 25};

user.married = false;
то же самое
user['married'] = false;

user.surname = 'petrov';
то же самое
user['surname'] = 'petrov'

console.log(user); 
не мсотря на то, что объект объявлен как константа он поменялся. Т.к. менять объект можно, но заменить объект нельзя.

const user = {name; 'Maria'};
user.name = 'Igor';
console.log(user);

user = {name: 'Mike'}; // ошибка!

Изменяемость объекта
const course = {};
course.name = 'js: объект';
course.description = 'базовый синтаксис';


Удаления элемента из объекта
const user = {name: 'Vasya', wrongProp: 'bug'};
Удалять свойства из объекта плохая практика
delet user.wrongProp;

Ссылки - переменные и константы хранять не сами объекты (их данные), а ссылку на них. 

const company = {};
company.name = 'Amazon';
console.log(company);

company = {}; // ошибка!

let object = {};

object = {};

Ссылочная природа при сравнении объектов
объекты равны между собой не тогда, когда у них одинаковая структура, а когда это один и тот же объект
const company = {name: 'Amazon'};
company === {name: 'Amazon'};

Проверка существования свойств
написать функтию, которая должна посчитать количество повторяющихся элемнтов в массиве

вход
const bag = {
    'apple', 'banana', 'pear', 
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
};

выход
const result = {
    apple: 3,
    banana: 2,
    pear: 2,
    orange: 3,
    apricot: 1,



// решения 

const countFruits = fruits => {
    const result = {};

    for(const name of fruits) {
        // проверка на существования
        if(result[name] === undefined) {
            result[name] = 1;
        }  else {
            result[name] += 1;
        }
    }
    return result;
};

console.log(countFruits(bag));


Обход свойств объекта

for...if
const course = {name 'JS: React', slug: 'js-react'};

for (const prop in course) {
    console.log('course.${prop} = ${course[prop]}');
}

for...in выводит не тольько свойства самого объекта, но и сввойства, добавленные в прототип этого объекта.
объекты могут быть связаны друг с другом и обращения к свойству в одном олбъекти может приводить к обращению (неявному) к свойству другова объекта (протатипа)


другой способ обхода objectkeys(obj)
метод позволяет получить массив всех ключей объекта
const course = {name 'JS: React', slug: 'js-react'};

const keys = object.keys(course); // ['name', 'slug'];

обход в цикле

for(const key of keys) {
    console.log(course[key]);
}

если ключи во время обхода не используются, то можно сразу получить массив значений свойств объкта. это делает Object.values(obj)
const keys = object.values(course); // ['JS: React', slug: 'js-react'];

обход в цикле

for(const value of values) {
    console.log(value);
}

Метод, который возврыщяет сразу ключ и значение объекта. Т.е. каждый элемент будет массивом, содержащим ключ и соответствующий ему значение [key, value]
const course = {name 'JS: React', slug: 'js-react'};
const keys = object.entries(course);

console.log(entries);

for (const [key, velue] of entries) {
    console.log(key);
    console.log(velue);
}


Фуктия, которая возвращяет список ключей объекта, значения которых равно переданному значению:
const lessonMembers = {
    syntax: 3,
    using: 2,
    foreach: 10,
    operations: 10,
    destructutig: 2,
    arra: 2,
};

логика работы функтии
1. обход свойства объекта
2. если значения свойства совпадает с переданым, то добовляем ключ в результат

const searchKeys = obj => {
    const result = [];
    const entries = object.entries(lessonMembers);
    for (const [key, value] of entries) {
        if (value === expectedValue) {
            result.push(key);
        }
    }
    return result;
};
console.log(searchKeys(lessonMambers, 10));

слияние
const user = {name: 'Tirion', email: 'support@yandex.ru', age: 44};

из формы пришли данные
const data = {name: 'Tirion2', age: 45};

user.name = data.name;
user.age = data.age;

сохранения пользователя в бд

object.assing(user, data); // берет объект переданый первым пораметром и переносит в него все из объекта, переданный остальными параметрами.
console.log(user);

если какоето свойство было в первом объкте, то оно остаеться тем, что и было.
если свойство присутствуует во втором (и далее) объекте, то оно записывается в первый, независимо от того, было оно там или нет.
поэтому, если свойство присутсвовало и в 1 и 2 объекте, то оно будет перезаписыно свойством из второго объекта

ограничения object.assign. оно выполняет поверхностное слияние. вложенные объекты не сравниваються, а заменяються.


*/

