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
};

company.getName(); // Amazon
company.name = 'Amazon Plus';
copany.getName(); // Amazon Pluse

this - происходит тогда, когда метод привязен к какому-то объекту и мы хотим обратиться к полям этого объекта из метода.
у метода бывает два контекста - функтинольный (переменная, константы и т.д.)
к объектному контексту можно обращаться через this.
НО! если функтия объявлена через function, то у нее есть объектный контекст. если стрелочная фуктия - то нет.

const context = function () {
    this.name = "Marcus";
    генерирую объект city: name, year. а нем будет 3 метода
    const city = {
        name: "Kiev",
        year: 482,
        f1: function() {
            return this.name;// прочитала Kiev
        },
        f2: () => {
            return this.name;// эта Киев не увидела, потому что это стрелочная функтия 
        },
        f3() {
            return this.name;// эта тоже прочита Киев.
            // т.к. объявлена как фуктия объекта. у нее и занчения ключа в объекте и f3 и имя фукции f3.
        },
    };
    return city
};


области видимости. контексты.
const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = s => s.lenght; // s- фуктия переводит отображения массива строк cities в ее длину

function f1() {
    const cities = ['Athens', 'Rome'];
    const f = s => s.toUpperCase();
    console.dir({cities});
    console.dir(cities.map(f)); // map - метод массива. создается новый массив городов с большими буквами 

    даллее идет блок операторов 
    {
        const f = s => s.toLowerCase(); // опеределяю функтию f, выводим базовый массив, но уже с маленькой буквы
        console.dir({cities});
        console.dir(cities.map(f))
    }

    {
        const cities = ['London', 'beijing', 'Kiev'];
        console.dir({cities});
        console.dir(cities.map(f)); // должен получить три города с болтшими буквами
    }
}

f1();
console.dir({cities});
console.dir(cities.map(f));


методы меняющие данные объектами называются сеттарами
company.setName = function setName(name) {
    this.name = name;
};

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