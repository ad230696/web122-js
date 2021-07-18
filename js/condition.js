/*
Условия в JS
const absoluteNumber = (num) => {
    if (num > 0) {
        return num;
    } else if (num < 0) {
        return -num;
    } else {
        return 0;
    }
}

Выражение которые дают ответы true или false
=== (строгое равенство), !== (не равенство), >, <, >=, <=

Оператор И (AND) && - только для true && true дает true

Оператор ИЛИ (OR) || - используются, если нам нужно, чтобы хотя бы одно условие было истиным

Операктор НЕ (NOT) ! - противоположность 

const absoluteNumber = (num) => {
     if (num > 0 || num === 0) {
        return num;
     } else {
             return -num;
     }
}

то же самое, используя тернарный оператор
let num = -4;
const absoluteNumber = (num > 0 || num === 0 ) ? num : -num; // тернарная операция является вырожением

console.log(absoluteNumber(5))

let num = 5;
const type = (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
console.log(type); 

// const isEven = num => num % 2 === 0;
// const increaseNum = num => num + 10;
// const num = 6;
// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;



// const getColour = (colour) => {
//     if (colour === 'white') {
//         return 'white';
//     } else {
//         return 'black';
//     }
// };

// const getcolour = (colour) => colour === 'wihte' ? 'wihte' : 'black';


// Реализуйте функцию `finalGrade()`, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.
// Функция принимает два аргумента:
// - `exam` — оценка за экзамен, число от 0 до 100;
// - `projects` — количество проектов, число от 0 и выше.
// Функция возвращает: число (итоговую оценку).
// Есть четыре возможных итоговых оценки:
// - 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// - 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// - 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// - 0 в любом другом случае
// пример вызова // что должна вернуть функция при таком вызове
// finalGrade(100, 12); // 100
// finalGrade(85, 5); // 90
// finalGrade(55, 3); // 75
// finalGrade(55, 0); // 0

//  const finalGrade = (exam, projects) => {
//      if ( exam > 90 || projects > 10) {
//          return 100;
//      } else if (exam > 75 && projects >= 5) {
//         return 90;
//      } else if ( exam > 50 && projects >= 2) {
//          return 75;
//      } else return 0;
// }
 
// console.log(finalGrade(76, 5))


// Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

// Функция принимает два аргумента:

// exam — оценка за экзамен, число от 0 до 100;
// projects — количество проектов, число от 0 и выше.
// Функция возвращает: число (итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае
// Вот как должна работать ваша функция:

// пример вызова // что должна вернуть функция при таком вызове
// finalGrade(100, 12); // 100
// finalGrade(99, 0); // 100
// finalGrade(10, 15); // 100
// finalGrade(85, 5); // 90
// finalGrade(55, 3); // 75
// finalGrade(55, 0); // 0
// finalGrade(20, 2); // 0

let answer;
const num = 0;

switch(true) {
    case num > 0 || num === 0:
        answer = num;
        break;
    default:
        answer = -num;
        break;
}
console.log(answer);

let absolutNamber = num => {
    switch (num) {
        case num > 0 || num === 0:
        return num;

        default:
        return -num;
    }
}

console.log(absolutNumber(5));

*/