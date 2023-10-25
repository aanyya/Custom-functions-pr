деструктуризации массивов. 
Данная операция предназначена для массовой записи элементов массива в переменные в одну строчку кода.

//296. 
let arr = ['John', 'Smit', 'development','programmer', 2000]; 
let [name, surname, department, position, salary] = arr;
console.log (name, surname);
console.log (department, position, salary);
//John Smit
//development programmer 2000

//297. 
function func() {
	return ['John', 'Smit', 'development','programmer', 2000]; 
}
let [name, surname, department, position, salary] = func();
console.log(name, surname, department, position, salary);  //John Smit development programmer 2000

//298. 
let arr = ['John', 'Smit', 'development','programmer', 2000]; 
let [,, department, position,]= arr;
console.log(department, position);  //development programmer

//300. Остаток массива при деструктуризации в JavaScript
let arr= ['John', 'Smit', 'development','programmer', 2000]; 
let [name, surname, ...rest] = arr;
console.log(name);  //John
console.log(surname);  //Smit
console.log(rest);  //['development', 'programmer', 2000]

// 301.  Значения по умолчанию при деструктуризации массива в JavaScript
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer']; 
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position;
// if (arr[3] !== undefined) {
// position = arr[3];
// } else {
// position = 'trainee';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development','programmer']; 
let [name, surname, department, position = 'trainee'] = arr;
console.log(name); //John
console.log(department); //development
console.log(position); //programmer

                                // //302. Функции по умолчанию при деструктуризации массива в JavaScript
                                // let arr = [2023,,,];
                                // function func1() {
                                // 	return (new Date).getDate();
                                // }
                                // function func2() {
                                // 	return (new Date).getMonth();                        !!???????
                                // }
                                // function func3() {
                                // 	return (new Date).getYear();
                                // }
                                // let [year=func3(), month=func2(), day=func1()] = arr;
                                // console.log(year)
                                // console.log(month)
                                // cosole.log(day)

//303. Объявление переменных при деструктуризации массива в JavaScript
// 
let arr = [2025, 12, 31];
let year;
let month;
let day;
[year, month, day] = arr;

//304. Деструктуризация объектов в JavaScript
let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color, height, width} = options;
console.log(color);  //red
console.log(height); //500
console.log(width);  //400

//305. Имена переменных при деструктуризации объектов в JavaScript
let opt = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color: c, width: w, height: h} = opt;
console.log(c, w, h)  //red 400 500

//306. Значения по умолчанию при деструктуризации объектов в JavaScript
let opt = {
	width:  400,
	height: 500,
};
let {color='black', width, height} = opt;
console.log(color); //black
console.log(width);  //400
console.log(height); //500

//307. Переменные и значения по умолчанию в JavaScript
let opt = {
	width:  400,
	height: 500,
};
let {color: c = 'black', height: h, width: w} = opt;
console.log(c, w, h);  //black 400 500

//308. Объявление переменных при деструктуризации объектов в JavaScript
// Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее:
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};
let year, month, day;
({year, month, day} = obj);
console.log(year);    //2025
console.log(month);   //12
console.log(day);     //31

//309. Деструктуризация параметров функций в JavaScript
//1.
func( ['John', 'Smit', 'development', 'programmer', 2000] ); 
function func([name, surname, department, position, salary]) {
     console.log(name);
     console.log(surname);
     console.log(department);
     console.log(position);
     console.log(salary);
}
//2.
                    НЕ ПОНЯЛА

//3. 
function func([name, surname, department, position = 'джуниор' ]) {
    console.log(name);  // John
    console.log(surname);  // Smit
    console.log(department);  // development
   console.log(position);  // джуниор
}
func( ['John', 'Smit', 'development']);

//310. Деструктуризация oбъектов параметров функций в JavaScript
//1. 
func( {color: 'red', 
       width: 400, 
	   height: 500} ); 
    function func({color, width, height}) {
        console.log(color);  //red
        console.log(width);  //400
        console.log(height); //500
    }
//2. 
func( {color: 'black', width: 400, 
	height: 500} ); 
function func({color, width, height}) {
    console.log(color);  //black
    console.log(width);  //400
    console.log(height); //500
}
