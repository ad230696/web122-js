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

[x, y] = [3, 5];
x = 3, y = 5;

console.log(`${x} : ${y}`);

const point = [3, 5];

const [x] = point;
console.log(x); // 3

const [, y] = pointer;
console.log(y); // 5

const [, secondEiement, , fourthElement, fifthElement] = [1, 2, 3, 4, 5, 6];
console.log(secondElement); // 2
console.log(fourthElement); // 4
console.log(fifthElement); // 5

Деструктуризация строк

const [first, second, third] = 'two';
console.log(first); // t
console.log(second); // w
console.log(third); // o

Деструктуризация в циклах

const points = [
    [4, 3],
    [0, -3],
];

for (const [x, y] of points) {
    console.log([x, y]); // [4, 3] [0, -3]
}

const swapVaiues = ([a, b]) => [b, a];
console.log(swapValius([1,2])); // [2, 1]

rest(оставшийся) - оператор (позволят свернуть часть элементов во воремя деструктуризации)
Он не может появляться нигде, кроме конца массива
например, можно разложить массив на первый и все остольные.

const fruits = ['apple', 'orange', 'banana', 'pineapple'];

const [first, ...rest] = fruits; // ...rest - взять все элементы, которые остались от деструктуризации и поместить в массим rest.
console.log(first);// apple
console.log(rest); // ['orange', 'banana', 'pineapple']

rest может иметь любое имя

slice - нас интересует только часть массива, но не важны первые элементы

const fruits = ['apple', 'orange', 'banana', 'pineapple'];
const rest = fruits.slice(1); // slice возвращает новый массив, а не изменяет старый
console.log(rest); // ['orange', 'banana', 'pineapple']
console.log(fruist); // ['apple', 'orange', 'banana', 'pineapple']

rest - оператор при диструктуризация строк
const [ferst, second, ...rest] = 'some string';
console.log(first); // s
console.log(second); // o
console.log(rest); // ['m', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']

spread оператор - растягивает элемент. с его помощью обычного копируют или сливает массив.
может появляться в любой части массива.

const russianCities = ['moscow', 'kazan'];
const cities = ['milan', 'rome', ...russiancities];
console.log(cities); // ['milan', 'rome', 'moscow', 'kazan']

const cities = russianCities.concat(['milan', 'rome']);
console.log(cities); // ['moscow', 'kazan', 'milan', 'rome']

const russianCities = ['moscow', 'kazan'];
const ukrainianCities = ['kiev', 'odessa'];
const cities = [...russianCities, ...ukrainianCities];

console.log(cities); // ['moscow', 'kazan', 'kiev', 'odessa']

Копирование массива

const russianCities = ['moscow', 'kazan'];
const copy =  russianCities.slice();
copy.push('samara');

console.log(russianCities); //  ['moscow', 'kazan']
console.log(copy);  ['moscow', 'kazan', 'samara']



Задача 
написать фуктию, которая провиряет что парные скопки сбалонсированы. т.е каждая открывающеяся скобка имеет закрывающую: (), (()()).
пример несбалонсированых скобок: (, ((), )(. Для проверки баланса, недостаточно считать количество, важен так же порядок, в котором они идут.
Решение со строками будет выглядеть так:
1) Если перед нами открывающий элемент, то заносит его в стек.
2) Если закрывающий, то достаем из стека элемент (очевидно, последний добавленый) и смотрим, что они открывающий для данного закрывающего. Если проверки провалилась. значение не соотвествует формату.
3) Если мы дошли до конца строки и стек пустой, то все хорошо. Если в стеке элементы остались, то проверка не прошла (такое может быть, если в начале строкибыли открывающие элементы, но в конце не было закрывающих). 
 

const checkIsbalansed = expression => {
    const stacks = [];
    for (const symbol of expression) {
        if (symbol === '(') {
            stacks.push(symbol);
        } else if (symbol === ')') {
            if (!stacks.pop()) {
                return false;
            }
        }
    }
    return stacks.length === 0;
};

console.log(checkIsbalansed('(())'));

Задача
генерация строк в циклах

Решения:
1) создать переменную result и записать в нее ul
2) пройтись циклом по элементам колектии и прописать в результирующую строку элемент <li>
3) добавить в конце </ul> и вернуть result из функтии.

const lists = ['milk', 'butter'];

const builtHtmlList = lists => {
    let result = '<ul>';
    for (const item of lists) {
        result = `${result}<li>${item}</li>`;
    }
    result = `${result}</ul>`;
    return result;
};

console.log(builtHtmlList(lists));

правильно формировать массив, который затем с помощбю метода join() превратит в строку.


const lists = ['milk', 'butter'];
const builtHtmlList = lists => {
    const parts = [];
    for (const item of lists) {
        parts.push(`<li>${item}</li>`);
    }
    const innerValue = parts.join('');
    const result = `<ul>${innerValue}</ul>`;
    return result;
}

console.log(builtHtmlList(lists));

Функтия, котороая генерирует html список апределений (теги <dl>, <dt> и <dd>) и возвращяет получившуюся строку
При отсутствии элементов в массиве функтия вовращяет пустую строку.

список определения следующего формата:
const definitions = [
    ['definition1', 'description1'],
    ['definition2', 'description2']
];

<dl><dt>блямба</dt><dd>выпуклость, утолщения на поверхности чего-либо</dd><dt>Бобр</dt><dd>животное из отрядо грызунов</dd></dl>


const definitions = [
    ['definition1', 'description1'],
    ['definition2', 'description2']
];


const buildDefinitionList = definitions => {
    if (definitions.length === 0) {
        return '';
    }
    const parts = [];
    for (const definition of definitions) {
        const name = definition[0];
        const description = definition[1];
        parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
    }
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;

    return result;
}

console.log(buildDefinitionList(definitions));

Задача 
Дана строка текста, нужно сделать заглавной первую букву каждого слова в тексте.
Решить задачу через приобразование в мвссив.
1) метод split, которая разделяет строку на части.
2)обойти массив получивщихся слов и приобразовать каждую букву слова в верхний регистр.
3)строки в js не имеют встроенного метода для этого, по этому мы напишем его сами.
*/