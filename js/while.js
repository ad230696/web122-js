"use strict";

/* цикл while - блок кода, который повторяется, пока удволетворяется какое-то условие.
итерация - повторение
while (sun is up) {
    work; // проверить - исполнить, проверить - исполнить 
}

функция нахождения факториала при помощи цикла while 


const factorial = n => {
    let counter = 1; // переменная счетчика, чтобы считать от 1 до верхнего предела 
    let result = 1; // текущий результат 

    while (counter <=n) { 
        result = result * counter;
        counter = counter + 1;
    }
    return result;
} 

console.log(factorial(3))

counter = 1 ; result = 1;
counter = 2 ; result = 2;
counter = 3 ; result = 6;

определить функтию 
a + b;
a / num + 3;
a => a; // +
a * b + 3;
(a, b) => a ** b; // +

Задача 
реализовать тело функции, используя интерактивный процесс. 
Функтия должна находить наименьший делитель задоного чесла. Число, передоваемая в функтию, больше нуля.
Доп. условие: делитель больше еденицы, за исключением случая, когда аргумнетом являеться 1 (наименьшем делителемь которой являеться так же 1)

myFunction(15); // 3
myFunction(17); // 17
Идея
1) пробуем разделить число на 2
2) если число делится без остатка, то это наименьший делитель.
3) если нет, то пробуем следующий делитель
4) если ничего не делит число без остатка, то переданное число, яв-ся простым(так что его наименьший делитель - оно само).



const smallestDivisor = num => {
    let divisor = 2;
    if (num < 1) {
        return NaN;
    } 
    if (num === 1) {
        return num;
    }

    while (num % divisor !== 0) {
        divisor = divisor + 1;
    }
    return divisor;
}

console.log(smallestDivisor(1)); (console.dir работает по аналогии)

Спосбы объявления переменной 
let age = 28;(современый стандарт)
var age = 28;(был до стондарта ES6)


Бесконечный цикл 
while (10 > 5) {
    console.log("ten is still larger than 5");
}

while (true) {console.log("...")};



*/

// const simplNum = num => {
//     let i = 2;
//     let answer = true;

//     while (i <= num) {
//         i++;
//     }
//     if (num < 2) {
//         answer = false;
//     }
//     if (num % i === 0) {
//         answer = false;
//     }
//     return answer;
// }

// console.log(simplNum(7));