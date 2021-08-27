'use strict'

/*
DOM





window - глобальный объект предоставляемый браузером, внутри которого содержаться все встроенные в браузерный JS функции и свойства
alert('привет!'); / window.alert('привет');
Math.abs(5); // window.Math.abs(5)

window.globalProperty = 'global variables are evil';


BOW - browser object mobel - набор глобальных объектов, управляющих поведением браузера. Все они находятся внутри window.
1) Navigator - информация о браузере (версия, название, доступные права, подключенные плагины)
2) Location - позволяет упровлять адресной строкой. например, так можно инициировать загрузку другой страницы location.href = 'http://www.airbnb.ru/'
3) history - можно перемещяться по истории переходов, а также формировать ее в тех ситуациях, когла не происходит реаленго перехода по страницам.
4)fetch - современный метод выполнения ajax запросов. Именно с помощью функции fetch происходит общение с сервером и другими сайтами. 

что делает браузер для отображения строницы?
1)браузер делает запрос на сервер ( предварительно выяснив этот адрес с помощью DNS)
2)когда HTML получен, браузер начинает его разбор (парсинг) и формирование внутренней структуры под названием DOM-дерево
3)затем это дерево (а не исходный HTML) используеться для физической отрисовки страницы, которую мы и наблюдаем

Декларативный поиск по DOM-дереву
поиск по id
const element = document.getElementById('content');
console.log(element);

поиск по классу
поиск по вмему дереву и возвращяется все элементы с таким классом
const collection = document.getElementsByClassName('row');
console.log(collection);

поиск по тегу
document.getElementsByTagName('div');

поиск всех элементов
document.getElementsByTagName('*');

поиск по селектору 
возврощяет первый найденый элемент по указанному селектору
ищется элемент с id = menu
const ul = document.querSelector('#menu');

const spans = ul.querySelectorAll('.odd > span');

метод matches -проверяет, удволетворяет ли el селектору css 
const el = document.querySelector('p');
console.log(el.matches('.unknown-class')); // false
console.log(el.matches('.font-weight')); // true

метод closest - ищет ближайший элемент выше по иерархии, удволетворяющий селктору. Если такой элемент найден, то возвращяется он, иначе возвращается null. 

const element = document.querySelector('span');
const ancestor = element.closest('.row');
console.log(ancestor.id); // 'three'

Манипулирование DOM дерево
innerHTML

const body = document.body;
console.log(body);

body.innerHTML = '<b>make</b> love';
console.log(body.innerHTML);

textContent 
const body = document.body;
document.body.textContent =  '<b>make</b> love';
console.log(document.body.innerHTML);

Создание узлов

создаем текстовый узел
const textNode = document.createTextNode('life is life');

создания узла p
const pElement = document.createElement('p');

console.log(textNode);
console.log(pElement);

добовляем textNode в канец списка элемента pElement
pElement.append(textNode);
pElement.textContent = 'life is life';

создаем дивку
const element = document.createElement('div');
element.append(pElement);
console,log(element); // <div><p> life is life </p></div>

управление узлами DOM
атрибуты
когда браузер загрузил HTML, на его основе строиться DOM.
Во время отработки, каждый тег становиться узлом, а атрибуты свойствами этого узла.

const element = document.querySelector('#aboutPage');
console.log(element); // a#aboutPage.simple-link

console.log(element.id); // aboutPage
console.log(element.href); // /pages/about

добовление/удаления класса
const element = document.querySelector('#aboutPage); // зацепились за ссылку
element.classList.add('page'); // добавили класс
console.log(element);

element.classList.remove('simple-link'); // удалили класс
console.log(element);

element.classList.contains('class') - проверяет, содержит ли элемент нужный класс

element.classList.toggle('class') - если есть класс, удалает его и наоборот




*/