//155. С помощью двух вложенных циклов выведите на экран следующую строку: 112122333444555666777888999
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}
//С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      document.write('' + i + j + ' ');
    }
  }
//159. Используя цикл и метод push заполните массив числами от 1 до 10.
let arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push(i);
}
console.log(arr);
//Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr = [];
for (let i = 0; i <= 10; i++) {
	arr.push('x');
}
console.log(arr);
//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr = [1, 2, -3, 4, 5, -6, 7, 8, -9, 10];
    let arr1 = [];
for (let elem of arr){
    if (elem>0){
        arr1.push(elem);
    }
}
console.log(arr1);
//160.Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; 
	i++) { 
	arr[i] = arr[i] * arr[i];
}
console.log(arr); 
//Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; 
	i++) { 
	arr[i]--;
}
console.log(arr); 
//Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; 
	i++) { 
	arr[i] += 10;
}
console.log(arr); 
// //161. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i <= 6; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};
for (let i in obj1) {
if (obj1[i] % 2 === 0) {
    obj2[i] = obj1[i];
}
}
console.log(obj2);
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.

// 162. Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	obj[key] = obj[key] ** 3;
}
console.log(obj);
// 163.
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
//Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.
??
164. 