// 279. map. Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr= [1, 2, 3, 4, 5];
let res= arr.map(function(elem){
    return Math.sqrt(elem);
});
console.log(res) //(5) [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arr= ['mama', 'anna', 'nasta', 'julia'];
let res= arr.map(function(elem){
    return elem+'!';
});
console.log(res) // ['mama!', 'anna!', 'nasta!', 'julia!']

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
let arr = ['mama', 'anna', 'nasta', 'julia'];
let res = arr.map(function(elem) {
	return elem.split("").reverse().join("");
});
console.log(res); //['amam', 'anna', 'atsan', 'ailuj']

// Дан следующий массив: let arr = ['123', '456', '789']; Используя метод map преобразуйте этот массив в следующий:
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
let arr = ['123', '456', '789'];
let res = arr.map(function(elem) {
    return elem.split()
});
console.log(res); //

//Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let arr = ['1', '2', '3', '4', '5'];
let result = arr.map(function(elem, index) {
	return elem * index;
});
console.log(result); //[0, 2, 6, 12, 20]

//280. forEach. Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let sum=0;
arr.forEach(function(elem){
    sum+=elem**2
}); console.log(sum) //55

//281. filter. Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [-1, 2, 1, -5, -1, 3, 3, 4, -1]; 
let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res); //[2, 1, 3, 3, 4]

//Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr = [-1, 2, 1, -5, -1, 3, 3, 4, -1]; 
let res = arr.filter(function(elem) {
	if (elem <= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res); //[-1, -5, -1, -1]

//Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
let arr = [-2, 15, 1, -56, -1, 1, 3, 45, -1]; 
let res = arr.filter(elem => 10 > elem > 0);
console.log(res); //[-2, 1, -56, -1, 1, 3, -1]

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr = ['aaaaa', 'aaa', 'aa', 'aaaaaa']; 
let res = arr.filter(function(elem) {
	if (elem.length > 5) {
		return true;
	} else {
		return false;
	}
});
console.log(res); //['aaaaaa']

//Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr = [-1, 22, 1, 40, -1, 3, 30, 4, -1]; 
let res = arr.filter(function(elem, index) {
	if (elem*index < 30) {
		return true;
	} else {
		return false;
	}
});
console.log(res); //[-1, 22, 1, -1, 3, 4, -1]

//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let arr = [1, 2, [3, 4], 5, [6, 7]];
let res = arr.filter(function(elem) {
	if (typeof elem != 'object') {
		return true;
	} else {
		return false;
	}
});
console.log(res);

//282. every. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr = [1, 2, 3, 4, 5];
let res = arr.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res); //true

//Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr = [1, 2, 3, 4, 5];
let res = arr.every(function(elem, index) {
	if (elem * index > 30) {
		return true;
	} else {
		return false;
	}
});
console.log(res); //false

//283. some. Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let arr = [-2, 4, -6, 8];
let result = arr.some(elem => elem > 0);
console.log(result); //true

//Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
let arr = [2, 42, 6, 8, 50];
let res = arr.some(function(elem, index) {
	return elem * index > 30;
});
console.log(res); //true

// 284. find. Давайте найдем элемент массива, соответствующий условиям, прописанным в функции:
// let arr = [1, 2, 3, 4];
// let res = arr.find(function(currentValue) {
// 	return currentValue > 0;
// });
// console.log(res);
// Результат выполнения кода: 1

// Давайте найдем индекс первого четного элемента массива:
// let arr = [1, 2, 3, 4, 5];
// let res = arr.findIndex(function (elem){
// 	return elem % 2 == 0;
// });
// console.log(res);
// Результат выполнения кода: 1

// Давайте найдем элемент массива, соответствующий условиям, прописанным в функции:
// let arr = [1, 2, 3, 4, 5];
// let res = arr.findLast(function(elem) {
// 	return elem > 0;
// });
// console.log(res);
// Результат выполнения кода: 5

// Давайте найдем индекс положительного числа в массиве:
// let arr = [-12, -13, 14, 15];
// let res = arr.findLastIndex(function(elem) {
// 	return elem > 0;
// });
// console.log(res);
// Результат выполнения кода: 3

// 285. reduce. Метод reduce сворачивает массив к одному значению (редуцирует). К примеру, с помощью этого метода можно легко найти сумму элементов массива (то есть массив сведется к одному значению - к сумме элементов).
// Найдем сумму элементов массива:
// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// console.log(res);
// Результат выполнения кода: 21

// Давайте найдем сумму всех положительных чисел массива:
// let arr = [1, -2, -3, 4, 5, -6];
// let res = arr.reduce(function(sum, elem) {
// 	if (elem >= 0) {
// 		return sum + elem;
// 	} else {
// 		return sum;
// 	}
// });
// console.log(res);
// Результат выполнения кода: 10
Метод reduceRight работает точно так же как и reduce - смотрите его для полного понимания. Единственное отличие: reduce перебирает элементы слева направо, а reduceRight - справа налево.
// Давайте сольем двумерный массив в одномерный:

// let arr = [['a', 'b'], ['c'], ['d', 'e']]; 
// let res = arr.reduceRight(function(elem1, elem2) {
// 	return elem1.concat(elem2);
// }, []);
// console.log(res);
// Результат выполнения кода: ['d', 'e', 'c', 'a', 'b']