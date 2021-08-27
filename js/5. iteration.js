"use strict"

/*
state(состояние)- все что программа помнит в конкретный момент времени(вычсление, константы, функции).

И рекурсивный и интерактивный процессы - оба описывают рекурсию.

Суть рекурсивного процесса - в откладывание на потом (пока не спустимся к базовому случаю)

Суть интерактивного процесса - когда состояние может быть описано фиксированым количеством значением
*/

// const factorial = n => {
//     const iter = (counter, acc) => {
//         if (counter === 0) {
//             return acc;
//         }
//         return iter(counter - 1, counter * acc);
//     }
//     return iter(n,1);
// }

// console.log(factorial(3))


// counter - отслеживает движение от n до 1.
//acc - это текущий результат умножению чисел от n до 1

// const iter = (3, 1) => {
//     if (counter === 1) {
//         return acc;
//     }
//     return iter(counter - 1, counter * acc);
// }
// return iter(n,1);
// }

// const iter = (2, 1) => {
//     if (counter === 1) {
//         return acc;
//     }
//     return iter(counter - 1, counter * acc);
// }
// return iter(n,1);
// }

/* 
iter(3,1) // iter(3-1, 3*1)
iter(2,3) // iter(2-1, 2*3)
iter(1,6) // counter === 1, return 6
6



// const sum1 = n => (n === 1) ? 1 : n + sum1(n - 1);
// const sum2 = n => (n === 1) ? 1 : sum2(n - 1) + n;

// sum1(4);
// sum2(4);


// Задача
// Реализовать функцию, которая определяет, является ли переданное число натуральной степенью тройки.
// Пример: 27 - это третья степень 3 ** 3, а 81 это 3 ** 4.
// myFunction(9); // true
// myFunction(2); // false

// const isPowerThree = n => {
//     if (n % 3 !== 0) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(isPowerThree(7))

// Задача 
// реализовать тело функции, используя интерактивный процесс. 
// Функтия должна находить наименьший делитель задоного чесла. Число, передоваемая в функтию, больше нуля.
// Доп. условие: делитель больше еденицы, за исключением случая, когда аргумнетом являеться 1 (наименьшем делителемь которой являеться так же 1)

// myFunction(15); // 3
// myFunction(17); // 17
// Идея
// 1) пробуем разделить число на 2
// 2) если число делится без остатка, то это наименьший делитель.
// 3) если нет, то пробуем следующий делитель
// 4) если ничего не делит число без остатка, то переданное число, яв-ся простым(так что его наименьший делитель - оно само).

const smallestDivisor = num => {
    const iter = (acc) => {
        if (acc > num / 2) {
            return num;
        }
        if (num % acc === 0) {
            return acc;
        }
        return iter (acc + 1);
    }
    return iter(2);
}

console.log(smallestDivisor(15))


let factorial = 1;

factorial = factorial * 2; // 2
factorial = factorial * 3; // 6
factorial = factorial * 4; // 24

*/

