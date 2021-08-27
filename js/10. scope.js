'use streict'

/*
Область видимости - как интерпретатор в разных местах кода видит разные штуки (переменные, функции).

Лексическая область видимость - механизм поиска значений: смотрим в  текущей области, если нет - идем на уровень выше, и так далее.

Видимость задается исключительно текстом программы, исходным кодом.

Окружение - облость памяти, где записываются индентификаторы и значения из областей видимости.


const age = 29; // внешняя (глобальная) облать видимости

const multiplier = num => {
    const x = 10; // локальная константа 
    return num * x;
}

let result = true;

console.log(x);

Лексическая область видимость

поиск значений переменных идет сначала в локальной области видимости и если не находит, то идет искать в глобальную область.

let a = 7;
let b = 10;

const multiplier = () => {
    let a = 5;  
    return a * b;
}

console.log(multiplier());

Замыкание - функтия замкнула в себе некоторую информацию из области видимости.

const createPrinter = () => {
    const name = "king";

    const printName = () => {
        console.log(name);
    }
    return printName;
}

const myPrinter = createPrinter();
myPrinter();


Функтия предикат // начинать с is (является), has(имеет), can(может)

const isRightNum = (num) => {
    const res =(num > 3) && (num ** 2 < 26) && (num !== 5);
    return res;
}

console.log(isRightNum(4)); // true

Задача  

"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: `33` или `2341` и так далее.
 Билет с номером **385916** — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. 
 Билет с номером **231002** не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.

Функцию, которая проверяет, является ли номер счастливым (номер всегда строка).
Функция должна возвращать true, если билет счастливый или false, если нет.

isHappyTicket('385916'); // true
isHappyTicket('1222'); // false
*/

// const isHappyTicket = num => {
//     const newString = String(num);
//     if (newString.length !== 6 || newString.length !== 4 || newString.length !== 2) {
//         return false;
//     } 
//     const sum = s => {
//         if (s.length === 1) return s;
//         return Number(s.substr(0, 1)) + Number(sum(s.substr(1, s.length - 1)));
//     };
//     const left = newString.substr(0, 3);
//     const right = newString.substr(3, 3);
//     return sum(left) === sum(right) ? true : false;
// };

// console.log(isHappyTicket('385916'));

// const isHappyTicket = num => {
//     const ns = String(num);
//     if (ns.length != 6) return false;
//     const sum = (s) => {
//         if (s.length === 1) return s;
//         return Number(s.substr(0, 1)) + Number(sum(s.substr(1, s.length - 1)));
//     };
//     const left = ns.substr(0, 3);
//     const right = ns.substr(3, 3);
//     return sum(left) === sum(right) ? true : false;
// };
// console.log(isHappyTicket('385916'));
// console.log(isHappyTicket('222'));