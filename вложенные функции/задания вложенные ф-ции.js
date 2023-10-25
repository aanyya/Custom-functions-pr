//240. Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
test(
    function() {return 1},
    function() {return 2},
    function() {return 3}
);
function test(func1, func2, func3){
    console.log(func1()+func2()+func3())
}

//241. Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function get1() {
	return 1;
}
function get2() {
	return 2;
}
function get3(){
    return 3;
}

test(get1, get2, get3);
function test (func1, func2, func3){
    console.log(func1()+func2()+func3())
}
//Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи
function func1() {
    return 1;
    }
    function func2() {
    return 2;
    }
    function func3() {
    return 3;
    }
    test(func1, func2, func3);
//Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
let func1 = function() {
return 1;
}
let func2 = function() {
return 2;
}
let func3 = function () {
return 3;
}

test(func1, func2, func3);

//243. Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.
function test(num, func1, func2) {
	return func1(num) + func2(num);
}
console.log(test(3, (num)=>num**2, (num)=>num**3))
