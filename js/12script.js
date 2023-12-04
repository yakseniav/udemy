const arr = [1, 2, 3]; 

arr[10] = '4567';

//console.log(arr[10]); //получим новый 11-ый элемент, несмотря на то, что создали изначально всего 3
console.log(arr); //[ 1, 2, 3, <7 empty items>, '4567' ] создалось 7 пустых ячеек. так делать не рек

const obj = {
    Anna: 300,
    'Alice': 500, //можно в кавычках
    abc: {  //внутри объектов можно создавать еще объекты
        fgh: [{}, {}],  // внутри можно создать даже массив с перечнем, например, объектов
        cvb: {

        }
    }
}

//obj.Kate = '400';
//obj['Kate'] = {}; -можно сформировать в свойстве Кейт, как например здесь, пустой объект

//console.log(obj.Kate);
//console.log(obj['Kate']);   // [] - use приоритетнее, потому что они более безопасные

const Kate = 'Kate'; //переменную можно создать и через нее записывать объект
obj[Kate] = 400;
console.log(obj[Kate])


//упражнение после 12го урока

const storeName = 'Massimo';
//console.log(store);
const storeDescription = {
    budget: 10000,
    employees: ['Martin', 'Nick', 'Raf'],
    products: {
        pants: 40,
        blouse: 25
    },
    open: true
};