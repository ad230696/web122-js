'use strict'

/*
события в JS
к действиям от пользователя относятся клики, набор текста, перемещения мыши горячие клавиши и т.д

с точки зрения кода все действия предствалены событиями 
- click
- submit
- keyup/keydown
- focus
- contextmenu
- mouseover
- mousedown/mouseup

const getBoom = () => alert('Boom!');

так же можно навесить события через свойства элемента в DOM
const button = document.getElementById('myButton');
button.onclick = () => alert('Boom!');
в данном премере мы не вызываем обработчик, а только устанавливаем его в свойства onclick

минусы такого способа. 
На стрвнице есть множество скриптов, работающтх не зависимо на одних и тех же элементах. Заключаються он в том, что не возможно повесить одновремено несколько обработчиков.

на уровень атрибутов эта проблема не решаема, но в DOM есть метод, позволяющий повесить множество обработчиков на один элемент.

const button = document.getElementById('myButton');

button.addEventListener('click', () => alert('boom 1!'));

добовляю второй обработчик
button.addEventListener('click', () => alert('boom 2!'));

пример не правильного написания код 
const handler = () => alert('boom1!');
button.addEventListener('click', handler());

button.removeEventListener('click', handler); // удаления обработчика

Действия по умолчанию 
const link = document.getElementById('myElement');

link.addEventListener('click', (e) => {
    //если это не сделать, то браузер выполнит занрузку новой страницы 
    e.preventDefault();
    alert(e.target.textContent);
});

CDN - content delivery network

Оброботка событий для меня
const links = document.querySelectorAll('.nav-link');

на каждую ссылку вешается событие
для этого обходимо все ссылки и на каждую вешаем обработку

link.forEach(link) => {
    link.addEventListener('click', () => {
        удаляем активный класс со всех ссылок
        link.forEach(link) => link.classList.remove('activ');
        выделяем текущий
        link.classList.add('activ');
    });
};

как правильно снять выдиление с предыдущего элемента?

1) запомнить выдиленный элемент и снимать с него нужный класс в момент клика по новому элементу
2) мы будем просто убирать выдиление со всех элементов сразу. и не важно был ли элемент выделен или нет - т.е. операция удаление класса не приводит к ошибки, если у элемента не было класса, который удаляется.

Классическая форма отправки данных

Обработка формы строится обычно так:
извлекаем данные из формы 
выполняем запрос на сервер/ меняються данные в приложении
изменяеться внешний вид

неправильный способ
const form = document.querySelector(//селектор пнля ввода);
form.addEventListener('submit', (e) => {
    если хотим работать с формой через JS, то нужно остановить отправку (действие по умолчанию)
    e.preventDefault();
    const {value} = input;
    что-то делаем
});

правильный способ, с использованием обьекта formData
const form = document.querySelector(//селектор нужной формы)ж
form.addEventListener('submit', (e) => {
    //данные из формы извлекаються автоматически
    const formData = new formData(e.target); // на вход принимается элемент формы взятый из события 
    тепер с ним можно работать
    formData.get('email');// exemple@example.com
    //values() возращает итератор, поэтому приобразует в массив
    [...formData.values()]; // ['exemple@example.com', 'supersecret']
    // нам необходима преоброзовать массив в объект
    object.fromEntries(formData); // {email: 'exemple@example.com', password: 'supersecret' }
});

классический способ отправки данных
const form = document.querySelector('form'//селектор формы);
form.addEventListener('submit', (e) => {
    если хотим работать с формой через JS, то нужно остановить отправку (действие по умолчанию)
    e.preventDefault();
    что-то делаем
});

Извлечения элементов формы по-отдельности 
например, при валидации полей ввода во время изменения формы, а нее отправки 

const input = document.querySelector(// селектора для поля ввода);
// каждая форма содержит свойство elements, которая возращяет объект со всеми элементами данной формы. ключи объекта - имена элементов, значения - сами элементы
form.elements.email // input name = email
form.elements.password

// обработка этих данных
form.element.email.addEventListener('change', () => {
    обработка
});



*/