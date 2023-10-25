//286. Найдите с помощью приведенной функции сумму элементов массива.
let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) { 
	return num1 + num2 + num3 + num4 + num5; 
}
func(...arr) //15

//287. Не запуская код, определите, что выведется в консоль:
function func(n1, n2, n3, n4, n5, n6, n7, n8) { 
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8); 
}
console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) ); //260

//288. Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let min1= Math.min(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
let min2 = Math.min(...arr)
console.log(min1);
console.log(min2) //1 1

//289. 
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, ...arr1, 2, 3];
console.log(arr2); // выведет [1, 'a', 'b', 'c', 2, 3] 

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];
let arr  = [0, ...arr3];
console.log(arr); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//290. 
function func(s1, s2, s3, s4, s5) {
	return s1 + '-' + s2 + '-' + s3 + '-' + s4 + '-' + s5; 
}
console.log( func(...'abcde') ); // выведет 'a-b-c-d-e'

let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];
console.log(arr2); //['a', 'b', 'c', '1', '2', '3', '4', '5']

//291. 
