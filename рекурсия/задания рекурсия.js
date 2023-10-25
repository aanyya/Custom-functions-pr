//274. Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива в консоль.
function func(arr){
    console.log(arr.shift(), arr);
    if (arr.length != 0){
        func(arr);
    }
}
func([1, 2, 3, 4, 5]);

// 275. Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии найдите сумму квадратов элементов этого массива.
function getSum(arr) {
	let sum = arr.shift()**2;
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	return sum;
}
console.log(getSum([1, 2, 3, 4, 5]));

// 276. Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
function func(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'object') {
			func(obj[key]);
		} else {
			console.log(obj[key]);
		}
	}
}
func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. 
let arr=[1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let arr2=[];
function func(arr){
    let res=[];
        for (let elem of arr){
            if (typeof elem == 'object'){
            res.push(func(elem));
} else {
    arr2.push(elem);
}
}
return arr2;
}
console.log(func(arr));
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

// 277. Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.
function func(obj){
    let sum = 0;
    for (let key in obj){
        if (typeof obj[key] == 'object'){
        sum += func(obj[key]);
    } else {
        sum += obj[key];
    }
}
return sum;
}
console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));
//45

// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// ['a', ['b', 'c', 'd'], ['e', 'f', 
// 	['g', ['j', 'k']]]] 
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'
function func(arr) {
	let str = '';
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			str += func(elem);
		} else {
			str += elem;
		}
	}
	return str;
}
console.log(func(['a', ['b', 'c', 'd'], ['e', 'f', 
	['g', ['j', 'k']]]]));
//abcdefgjk

// 278.Дан многомерный массив произвольного уровня вложенности, например, такой:

// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.
function func(arr) {
	for (let i = 0; i < arr.length; 
		i++) { 
		if (typeof arr[i] == 'object') {
			arr[i] = func(arr[i]);
		} else {
			arr[i] = arr[i]**2;
		}
	}
	return arr;
}
console.log(func([1, [2, 7, 8], 
	[3, 4, [5, 6]]])); 