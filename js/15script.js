console.log('arr' + ' - object');
console.log(4 + +'4');

let incr = 10,
    decr = 10;

// incr++; //когда знаки после переменной, форма записи называется ПОСТФИКСНОЙ
// --decr; //когда знаки перед переменной, форма записи называется ПРЕФЕКСНОЙ

console.log(++incr);    //нужно использовать префексную форму, чтобы сначала считалось, потом выдавало ззначение
console.log(decr--);    //постфиксная форма записи сначала выводит результат, а потом считает

console.log(8%3);

console.log(2*5 == 10); //true
console.log(2*5 == 11); //false

console.log(2*5 == '10'); //true
console.log(2*5 === '10'); //false, потому что "===" строгое значение
console.log(2*5 === 10); //true


const isChecked = true,
      isClose = false;

console.log(isChecked && isClose); //оператор И. false, потому что хотя бы один false

const IsChecked = true,
      IsClose = true;

console.log(IsChecked || IsClose); //оператор ИЛИ true, потому что достаточно лишь одного true

const IsCheckeD = false,
      IsClosE = false;

console.log(IsChecked || !IsClose); // оператор ! меняет знаечение на противоположное => true

console.log(2 + 2 * 2 === 8); //будет false, потмоу что сначала исполняется умножение


