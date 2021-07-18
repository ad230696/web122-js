"user strict"
/*           Рекурсия 

const surfaceAreaCalculator = (radius) => {
    const pi = 3.14;
    return 4 * pi * square(radius);
}

const square = num => {
    return num * num;
}

const surfaceOfMars = surfaceAreaCalculator(3390) // вызов функции

console.log(surfaceOfMars); //144340776

На столе три книги. Сколько способов их перестановки у меня есть?

n! -варианты перестановки книг. факториал означает - умножение чисел от 1 до n.
3! - 0 * 1 * 2 * 3

Функция нахождения факториала
const factorial = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(3));

Требования для рекурсии
1) базовый случай (когда остановиться). В нашем премере это 0
2) правило углубления (правило передвижения). В нашем случае это n * factorial(n - 1)

factorial(3);
3 * factorial(2);
3 * 2 * factorial(1);
3 * 2 * 1 * 1;
3 * 2 * 1;
3 * 2;
6

первый вызов 
const factorial = 3 => {
    if (3 === 0) {
        return 1;
    } else {
        return 3 * factorial(3 - 1);
    }
}

второй вызов
const factorial = 2 => {
    if (2 === 0) {
        return 1;
    } else {
        return 2 * factorial(2 - 1);
    }
}

третий вызов
const factorial = 1 => {
    if (1 === 0) {
        return 1;
    } else {
        return 1 * factorial(1 - 1);
    }
}

четвертый вызов
const factorial = 0 => {
    if (0 === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

 Задача
Реализовать функтию, которая находит сумму последовательности чисел. Последовательность задаеться двумя значениями: 
1) begin - начало последлвательности
1) end - конец последовательности 

* последовательность, в коорой begin > end, не содержит ни одного числа, т.е. являеться пустой. Возращаем NaN.
* Сумма чисел последовательности, в которой begin === end, равна begin

const sumSequences = (begin, end) => {
    if (begin > end) {
        return NaN;
    } else if (begin === end) {
        return begin;
    } else {
        return begin + sumSequences(begin + 1, end);
    }
}

console.log(sumSequences(1,5));

*/

/* Задача 
Написать функтию, которая выводит в терминал числа в диапозоне от begin до end. При этом:
* для простоты решения скажем, что эти числа являються целыми числами больше нуля

1)если число делиться без остатка на 3, то вместо него выводиться слово Fizz
2)если число делиться без остатка на 5, то вместо него выводиться слово Buzz
3)если число делиться без остатка на 3 и 5, то вместо него выводиться слово FizzBuzz
4)в остальных случаях выводить само число 
5)если диапозон пуст (begin > end) то функетия ничего не печатает 

*/

const fizzBuzz = (begin, end) => {
    if (begin > end) return;

    let result = begin;

    if (begin % 3 === 0 && begin % 5 === 0) {
        result = 'FizzBuzz';
    } else if (begin % 3 === 0) {
        result = 'Fizz';
    } else if (begin % 5 === 0) {
        result = 'Buzz';
    }

    console.log(result);

    fizzBuzz(begin + 1, end);
}

console.log(fizzBuzz(11,20));