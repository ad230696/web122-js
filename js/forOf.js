'use streict';

/*
for (i = 0; i < n; i + n) {}

for...of

const userNames = ['petya', 'vasya', 'evgeny'];

for (const name of userNames) {
    console.log(name);
}

const calculateSum = arr => {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum;
}

const greeting = 'hello';

for (const symbol of greeting) {
    console.log(symbol);
}

задача 
Функтия которая вычисляет среднее арефметическое элементов передонного массива.
const temperatures1 = [37.5, 34, 39.3, 40, 37.7, 41.5];
calculateAverage(temperatures1); // 38.5
const temperatures2 = [];
calculateAverage(temperatures2); // null


const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];

const calculateAverage = temperatures => {
    const arrLength = temperatures.length;
    if (arrLength === 0) {
        return null;
    }
    let sum = 0;
    for (const values of temperatures) {
        sum += values;
    }
    return sum / arrLength;
};

console.log(calculateAverage(temperatures));

Удаления элемента из массива
[0, 1, false, null, true, 'wow', null]; // операция compact удаляет null значений из массива
// ! изменения массива должно трансформироваться в создание нового массива, в котором отсутствуют удаленные элементы
const compact = arr => {
    // инициализация результата 
    const result = [];

    for (const item of arr) {
        if (item !== 0) {
            result.push(items);
        }
    }
    return result;
};
пример агрегации. удаления элемента по определенным условиям массива.

break производит выход из цыкла (не функтий, а цыкла)

const arr = [0, 1, false, null, true, 'wow', null];

for (const item of arr) {
    if (item === true) {
        braek; // интерпретатор перестает выполнять текущий цикл и переходит к инструктиям, идущим сразу после него
    }
    console.log(item);
}

let i = 0;
while (arr[i] !== true) {
    console.log(arr[i]);
    i++;
}

continue - позволяет пропустить итерацию цикла.

const compact = arr => {
    // инициализация результата 
    const result = [];

    for (const item of arr) {
        if (item === null) {
            continue;
        }
        result.push(item);
    }
    return result;
};
console.log(compact(arr));
*/