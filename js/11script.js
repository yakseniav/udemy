//простые типы данных js

let number = 1.8; //Только точка

console.log(4/0); // Infinity
console.log('string' * 5); //NaN (Not a Number)

const persone = 'Alex';
const age = '5'; //строка


const bool = true; // or false
console.log(bool);

console.log(something); //null - чего-то просто не существует

let und;
console.log(und); //undefined - сущ, но значения никакого нет 




//объекты - коллекция данных; структура,j-ая use для хранения любых данных

const obj ={
    name: 'Ksenia', // "name" - это свойство
    age: 22,    // "age" - это свойство
    isMarride: false
};

//console.log(obj.name); // метод с точкой
console.log(obj['name']);//еще один способ вывод элемента на консоль. [1][кириллица] можно выводить объект под цифрой, кириллицей и любой другой язык

//массив - это частный случай объекта
let arr = ['plum.png', 'orange.png', 6, 'apple.png', {}, []]; //элементы хранятся строго по порядку
//храниться может любой тип данных - другой объект, массив, пустой массив и тд.
console.log(arr[5]); 