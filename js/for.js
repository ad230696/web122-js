"use strict";
/*
const factorial = n => {
    let counter = 1; // переменная счетчика, чтобы считать от 1 до верхнего предела 
    let result = 1; // текущий результат 

    while (counter <=n) { 
        result = result * counter; // result *= counter;
        counter = counter + 1; // counter ++ (инкремент)
        counter = counter - 1; // counter -- (декремент)
    }
    return result;
} 

console.log(factorial(3))

result *= counter; 
result += counter;
result -= counter;
result %= counter;

Инкремент, декремент
postfix
let a = 3;
let b;
b = a++; // постфиксная нотация (фактическое сложение прозойдет после того, как значение вернется. )
console.log(a, b); // a = 4;  b = 3

prefix
let a = 3;
let b;
b = ++a; // префиксная нотация (фактическое сложение произойдет перед теи как занчение вернется )
console.log(a, b); // a = 4;  b = 4

цикл for

const factorial = n => {
    let result = 1;
    for (let counter = 1; counter <= n; counter++) {
        result *= counter;  
    }
    return result;
}
console.log(factorial(3))

1) иницилизация счетчика 
2) условия цикла
3) обновления счетчика


В блоке инициализации не требуется определять переменные 

let conter = 1;
for (; counter <= n; counter++){
    любой коде
}

Блок с условиями не обязателен 

for (let counter = 1;;counter++) {
    if(counter <= n) break;
    любой код
}

Пропущенны все три блока
let counter = 1;
for(;;) {
    if (counter <= n) break;
    любой код
    counter++;
}


Линтер (программа проверяющая код на стандарт IS6 )
Он может ругатся на шерткаты





switch(num) {
    case 1: // if (num === 1)
        answer = "One";
        break;
    case 2: // if (num === 2)
    case 3: // if (num === 3)
    case 4: // if (num === 4)
        answer = "Two";
        break;
    default: 
        answer = "Nothing";
        break;
}


const absoluteNumber = (num) => {
        if (num > 0 || num === 0) {
            return num;
        } else {
            return -num;
        }
    }


    Задача 

Написать функцию, которая принимает число и возвращает true, если число яв-ся простым и false в ином случае.
Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
* 7 - просто число, потому что делится без остатка только на 1 и на себя. 
* 2017 - другое простое число.
Число 1 не считается простым.
*/


// const simplNum = num => {
//     let answer = true;
//     if (num < 2)
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             answer = false;
//         }
//     }
//     return answer;
// }

// console.log(simplNum(5));

