/*
 - не строгая типизация (переменая не обьявляется с какимто типом и может принимать разные значения)
 - с СИ синтаксисом 
 - сценарный (scripting) - не компилируется в какой-то исполнительный файл, а евляется сценарием выполняется простым текстовым файлом, который выполняется интрепретатором (браузером)
 - чаще всего используются в браузерах. js как само название принадлежит компании Oracle.

В 1997 г. стандарт передали в комитет, который выпустил стандарт ECMASCRIPT (ECMA-262.)

// первая функция
function foo() {
    return;
    {
        foo: 'bar
    }
}

// вторая функция
function bar() {
    return {
        foo: bar
    }
}

математика
пять основных операций: +, -, *, /, %, ().

25 * 91 // 25 и 91 называются операндами, а * аператором умножения.

((12 * 5) - 4) / 12 // все операторы здесь ификсные - находяться между операндома 

-5 // префексный оператор (отрицательное число)
5++ // посфиксный оператор (быстрое увелечение на один)

10 / 0 // infinity (бесконечность)
-10 / 0 // infinity (-бесконечность)

10 / "привет" // NaN (не число)

Как площать поверхности у Марса?

1) Радиус Марса 3390 км
2) Формула площади поверхности сферы S = 4 * pi * R * R; // R- радиус. pi - 3.14 

формула на JS
4 * 3.14 * 3390 * 3390;

Запоминание в JS 
const pi = 3.14; // const - ключевое слово, после него индентификатор (наименование), затем знак равенства и значение.

4 * pi * 3390 * 3390;

//объявления константы pi
const pi = 3.14;

// сможно переписать и так 
const surfaceOfMars = 4 * pi * 3390 * 3390; 

хочу создать коробку, которая в себя будет ринимать внутрь себя что-то 
const surfaceOfMars = surfaceAreaCalculator(3390);

const surfaceAreaCalculator = (radius) => {
    return 4 * 3.14 * radius * radius;
}

Задача 1 
Реализовать функтию, которая принимает на вход два числа и возвращает квадрат суммы этих чисел. 

// определение этой функции
const squareOfSum = (a? b) => {
    reutrn a * a + 2 * a * b + b * b; 
}

// вызов функции 
console.log(squareOfSum);

Способы записи функции

1)
const squareOfSum = (a, b) => {
    return (a ** 2) + (2 * a * b) + (b ** 2);
}

2) функтия однострочник 
const squareOfSum = (a, b) => (a ** 2) + (2 * a * b) + (b ** 2);

3) устаревший синтаксис (разница связына с темой this. такую функтию можно использовать до ее определения)
const squareOfSum = function (a, b) {
    return (a ** 2) + (2 * a * b) + (b ** 2);
}

*/

// const names = ['john', 'smith', 'karl', 'asd']; 
// // reverse(); // ['karl', 'smith', 'john'];
// const reverse = coll => {
//     const lastIndex = coll.length - 1;
//     const middleIndex = lastIndex / 2;
//     for (let i = 0; i < middleIndex; i += 1) {
//         const mirrorIndex = lastIndex - i;
//         const temp = coll[i];
//         coll[i] = coll[mirrorIndex];
//         coll[mirrorIndex] = temp;
//     }
// };
// reverse(names);
// console.log(names);


// const names = ['john', 'smith', 'karl'];
// console.log(names);
// const reverse = coll => {
//     let result = [];
//     const index = coll.length - 1;
//     for (i = index; i >= 0; i--) {
//         result.push(coll[i]);
//     }
//     return result;
// };

// console.log(reverse(names));


// функтия делает первую букву каждого слова
// const solution = str => {
//     let pieces = str.split('');
//     for (var i = 0; i < pieces.length; i++) {
//         var j = pieces[i].charAt(0).toUpperCase();
//         pieces[i] = j + pieces[i].substr(1);
//     }
//     return pieces.join(" ");
// }
// console.log(solution('hello, world!'));