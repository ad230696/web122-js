"user strict"

/*
экранирование \
const string = "they call him \"Harry\", and he likes it";

Табуляция \t. перенос на новую строку \n
const string = "they call him \"Harry\", and he likes it";



const skip = str => {
    let i = 0;
    let result = '';

    while (i < str.length) { // length возращает число элементов массива
        result = result + str[i]; // склеиваем и конкативируем результирующую строку с сиволом о индексу[i]
        i = i + 2;
    }
    return result;
}

console.log(skip("california"));

квадратные скобки позволяют получать индивидуальные символы из строки
str[0] 'C'
str[1] 'a'
str[2] 'l'

'califrnia'
количество символов в строке 10
количество индексации 9 (индексация элементов  строке начинаются с 0)

конкатенация - склеивание строки
const name = "Alix";
const age = 28;
consoie.log("His name is " + name + " and his age is " + age );

Неизменяемость (immutable)

в JS строки являються не изменяемые. какие бы мы функции не принимали, они не производят изменения первоначальной строкит.

toUpperCase - возращает буквы в верхний регистор
toLowerCase - возращает буквы в нижним регистор
trim - уберает пробелы

const str = "hello";
console.log(str.toUpperCase()); // HELLO 
console.log(str);
console.log(str[0].toUpperCase()); // обращение к H

сравнение строк идет в лексикографическом порядке a > b folse

Интерполяция
кроме '' и "" в js есть `` (backticks);

const name = "ilya";
const a = 10;
const b = 18;
console.log(`His name is ${name} and his age is ${a + b}`); // данный пример работает только с ` `




1) Переворачивание строки с помощью встроеных функтий 

const reverseString = str => {
    let splitString = str.split(""); //  разбиваем строку на массив
    let reverseArray = splitString.reverse(); // переварачиваем масcив
    let joinArray = reverseArray.join(""); // объеденяем в массив
    return joinArray;
}

console.log(reverseString("ehllo"));

Написания кода в одну строку:

const reverseString = str => {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


2) Переворвчивание строки с помощью цикла for

const reverseString = str => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("hello"));


3) Переворот строки спомощью рекурсии 
    substr() - возвращает символы с указоного места
    charArt() - возвращает указаный символ из строки 
    
const reverseString = str => {
    if (str === "") { // точка остановы
        return "" ;
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("hello"));

*/