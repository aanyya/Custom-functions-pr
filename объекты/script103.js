//Код должен вывести элемент объекта:
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

//Код должен вывести элемент объекта по ключу из переменной:
let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj2[key]);

//Код должен вывести сумму элементов объекта:
let obj3 = {x: 1, y: 2, z: 3};
let sum = obj3['x'] + obj3['y'] + obj3['z'];
console.log(sum);

//Код должен вывести количество элементов объекта:
let obj4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj4).length);


let num = 1;

if (num == 1) {
	console.log('value1');
} else if (num == 2) {
	console.log('value2');
} else if (num == 3) {
	console.log('value3');
} else {
	console.log('неверное значение переменной num'); 
}



