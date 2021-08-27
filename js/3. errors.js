'use strict'
/*
Ошибки 

stack trace - последовательность вызова функций, которая привела к ошибке (отслеживание шагов в обратном порядке)

Типы ошибок:

Syntax error (когда вокруг ничего не понимает)
const cude = (num) => {
    reutrn num * num * num;
})

Reference error (называть кого-то чужим именем)
adsoluteNumber(5);

Type error (попросить кошку постирать белье) - создали констанцию и функтию, а потом пытаемся вызвать число. Наверное стоит вызвать функтию.
const length = 12;
const num = length(54);

Logikc error


// Type error
const a = 10;
const b = 12;
const c = a() + b;

console.log(c);

//Reference error
const func = () => {
    const a = 120.323;
    return 10 * a * b;
}

// конвертация градусов по фаренгейту в цельсии 
const fahtToCelcius = fahr => {
    return faht - 32 * 5/9; (должно быть (faht - 32) * 5/9)
}

console.loge(fahtToCelcius(50));
*/