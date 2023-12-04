alert('Hello'); //вывод сообщения

const result = confirm('Are you here?'); //вывод вопроса да/нет и запись его true/false (соответсвенно) в переменную result
console.log(result); //вывод результата в консоль

//const answer = prompt('Вам есть 18?', ''); // ковычки после вопроса пустые для самомтоятельного ответа юзера 
const answer = prompt('Сколько вам лет?', '18'); //в '' после вопроса можно написать предварительный ответ
console.log(typeof(answer)); // typeof проверяет тип данных выдаваемый консолью

const answerPlus = +prompt('Сколько вам лет?', '10'); //преобразовали полученный резудьтат из строчки в число
console.log((answerPlus + 5)); //на выходе получим 15, если не преобразуем в числовое значение строчку с помощью "+prompt", получим 105

const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Ваш возраст?', '');

// document.write(answers); // выводит ответы на вопросы в текст на стр браузера
console.log(typeof(answers)); //object


// prompt confirm document alert - возмлжно тестировать только внутри браузера