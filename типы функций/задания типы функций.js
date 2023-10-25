//224. Сделайте функцию func, которая будет возвращать через return какую-либо строку.
function func() {
    return 'привет'
}
console.log(func())
//Выведите исходный код функции func в консоль.
function func() {
    return 'привет'
}
console.log(func)
//Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.
function func() {
    return 'привет'
}
console.log(func())
console.log(func)
func=123;
console.log(func)

//225. Сделайте функцию func1, которая будет возвращать через return число. Скопируйте исходный код функции func1, в переменную func2. Выведите в консоль сумму результатов работы функций func1 и func2.
function func1() {
	return 3;
}
let func2=func1
console.log(func1()+func2())

//226. Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1. Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2. Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.
let func1=function() {
    return 1
}
let func2=function() {
    return 2
}
alert(func1()+func2())
//237. Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
let arr=[
    function() {return 1},
    function() {return 2},
    function() {return 3},
]
console.log(arr[2]())
//Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
let arr=[
    function() {return 1},
    function() {return 2},
    function() {return 3},
]
console.log(arr[0]()+arr[1]()+arr[2]())
// //Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
// let arr=[
//     function() {return 1},
//     function() {return 2},
//     function() {return 3},                               ???
// ]
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]())
// }

//238. Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
obj.func1()+obj.func2()+obj.func3()
//Переберите созданный объект циклом и выведите результаты работы функций в консоль.
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
for(let key in obj){
    console.log(obj[key]())
}

//239. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
let math = {
    summ: (arr)=>{
        let sum = 0;
        for( let elem of arr){
            sum += elem
        }
        return sum;
    }, 
	square: (arr) => {
        let sum = 0;
        for (let elem of arr){
            sum += elem ** 2
        }
        return sum;
    }, 
	cube: (arr) => {
        let sum = 0;
        for (let elem of arr){
            sum += elem**3
        }
        return sum;
    }, 
}
console.log(math.summ([1, 2, 3]))
console.log(math.square([1, 2, 3]))
console.log(math.cube([1, 2, 3]))