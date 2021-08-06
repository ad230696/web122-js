'use streict';

/*
Массивы - любые упорядоченные наборы элементов (или коллектия).
задача массива - представить такие коллектии в виде единой структуры.

создания пустого массива 
const items = [];

создания массива с элементами 
const animals = ['cat', 'dog', 'birds'];

каждый элемент имеет порядковый номер, называемый индексом.
узнаем размер массива, обратившиль к свойству length.

в реальных задачах индекс часто вычисляеться динамически, поэтому обращение к конкретному элементу происходит с использованием переменных
let i = 1;
let j = 1;
const animals = ['cat', 'dog', 'birds'];
console.log(animals[i + j]);

нахождения последнего элемента 
const animals = ['cat', 'dog', 'birds'];
console.log(animals[animals.length - 1]);

Модификатия
c массивами не работает правило не изменности. Потому что массивы могут меняться: увеличеваться, уменьшаться, изменять значения индекса.
константа хронит в себе ссылку на данные, а не сами данные. это значит данные можно менять, но нельзя изменять ссылку.

const animals = ['cats', 'dog', 'birds'];
animals[0] = 'horses'; // меняем первый элемент массива
console.log(animals);

animals = ['cats', 'fish']; // т.к. идет замена костанты
console.log(animals); // type error. 

Добовления элемента в массив
Метод push() - добовляет элемент в конец массива.

const animals = ['cats', 'dog', 'birds'];
animals.push('horses'); 
console.log(animals); // ['cats', 'dog', 'birds', 'horses']

Метод unshift() - добовляем элемент в начало массива

Удаления элемента из массива 
const animals = ['cats', 'dog', 'birds'];
delete animals[1]; // удаления элемента под индексом 1


Проверка существования значения 
const animals = ['cats', 'dog', 'birds'];
выход за граница массива. происходит когда обращаемся к несуществуещему индексу.
console.log(animals[5]); // undefined

if (index < items.length) {
    items[index]; // все ок
}

задача 
написать фуктиюб которая извлекает из массива элемент пл указоному индексу, если индекс существует, либо возвращает значение по-умолчанию. функтия принимает на вход три аргумента: массив, индекс, значения по умолчанию (null)

get(cities, 1); // london 
get(cities, 4); // null
get(cities, 10); // paris

const get = (arr, index, defaultValue = null) => {
    if (index >= arr.length || index < 0) {
        return defaultValue;
    }
    return arr[index];
};

console.log(get(cities, 4));

Ссылки 

let и const хранят два типа данных: примитивные(числа, строки, булевые) и ссылочные(объекты).

const items = [1, 2];
const items2 = items; // ссылка на один и тот же массив
items.push(3);

console.log(items2); // [1, 2, 3]
console.log(items); // [1, 2, 3]

console.log(items === items2); // true

const f = coll => coll.push('wow');

const items = ['one'];
f(items);
console.log(items);
f(items);
console.log(items);



Задача 
фуктия которая принимает на вход массив и строковый префикс и возыращает новый массив, в котором каждому элементу исходного массива добовляется переданный префикс. Ф-ция предназначена для работы со строковыми эл-ми.
// newNames(); // ['Mr john', 'Mr smith', 'Mr karl']
*/
// const names = ['john', 'smith', 'karl'];

// const newNames = (arrays, prefix) => {
//     let result = [];
//     for (i = 0; i <= arrays.length - 1; i++ ) {
//         // prefixArays = `${prefix} ${arrays[i]}`;
//         // result.push(prefixArays);
//         result[i] = `${prefix} ${arrays[i]}`;
//     }
//     return result;
// };

// console.log(newNames(names, 'Mr'));

/*
Агрегация 
вычесления, которые строются на основе всего набора данных (поиск минимального, среднего, суммы, макс.)
Поис максимального значения в массиве
console.log(calculateMax([3,2, -10, 38, 0])); // 38
console.log(calculateMax([])); // null

const calculateMax = arr => {
    // если [], то не можем искать максимальное значение
    if (arr.length === 0) {
        return null;
    }
    // сравнение элементов нужно начать с какого-то первого эл-та
    let max = arr[0];
    // начинаем обход со второго элемента
    for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement > max) {
            max = currentElement;
        }
    }
    return max;
};
console.log(calculateMax([3, 2, -10, 38, 0]));

const calculateSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum = sum + arr[i]
    }
    return sum;
}
console.log(calculateSum([3, 2, -10, 38, 0]));

Задача которая вычисляет сумму всех эллементов массива, которые делятся без остатка на 3.
в случае простого массива, функтия должна вернуть 0
const names = [8, 9, 21, 19, 18, 22, 7];
const calculateSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (value % 3 === 0) {
            sum += value;
        }
    }
    return sum;
}
console.log(calculateSum(names));

*/

