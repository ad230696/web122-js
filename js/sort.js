'uese streict';

/*
Сортировка - базовая алгоритмическая задача. в js есть метод sort
const numbers = [8, 3, 10, 15, 4];

number.sort((a, b) => a - b); // сортировка по возрастанию 
console.log(numbers);

numbers.reverse();
console.log(numbers);

сортировка пузырьком 

алгоритм состоит из повторяющихся проходов по сортируемому массиву. за каждый проход элементы последоватьльно сравниваются попарно и , если порядок в паре неверный, выпонлняеться обмен элемнтов. При каждом проходе алгоритма по внутреннему цыклу, очередной наибольший элемент массива ставится на свое место в конец массива рядым с предыдущим (наибольшим элемнтом), а а наименьший элемент сдвигается к началу массива. 

const bubbleSort = (arr) => {
    let stepsCount = arr.length - 1;

    let swapped; // значение которой показывает, был ли совершон обмен элементов во время перебора массива
// работает аналогично while. разница только в проверки. здесь она делается не до выполненичя тела, а после 
    do {
        swapped = false;

        for(let i = 0; i < stepsCount; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]; // временная константа для хранения текущего элемента
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        stepsCount -= 1;
    } while (swapped);  // продолжаем, пока swapped === true
    return arr;
};

console.log(bubbleSort([3, 2, 10, -2, 0, -10, 24, 7, -200]));


Структура данных (стек)
Это конкретный способ хранения данных и организация данных.

структуры данных: списки, хеш-таблицы, деревья, графы, стек, очередь и т.д.
стек - упорядоченная колектия элемнтов, в котором добовления новых и удаления старых элементов идет с одного конца.

работа со стеком ввключает в себя операции:
добавить стек (push)
взять из стека (pop)
вернуть элементы с вершины стека без удаления (peekBack)
проверить на пустату (isEmpty)
вернуть размер

const stacks = [];

stacks.push(3);
console.log(stacks); // [3]
stacks.push('winterfall');
console.log(stacks); // [3, 'winterfall']
stacks.push(true);
console.log(stacks) // [3, 'winterfall', true]

const element1 = stacks.pop(); // метод не только изменяет исходный массив, но и возрыщает элемент снятый со стека
console.log(element1); // true
console.log(stacks); // [3, 'winterfall']


Деструктуризация - синтоксическая возможность расскладывать элементы массива(и не только) в отдельные костанты или переменные.


const point = [3, 2];
const [x, y] = point; // массив слева повторяет структуру правого массива. но вместо значений используется id.
console.log(`${x} : ${y}`); // 3 : 2

*/ 