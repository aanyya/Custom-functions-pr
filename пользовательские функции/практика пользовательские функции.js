// Поиск ошибок в коде с функциями JavaScript
214.1
function func1() {
	return 3;
}
function func2() {
    return 5;
}
console.log( func1() + func2() );

214.2 
function sum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;		
	}
    return res;
}
console.log(sum([1, 2, 3, 4, 5]));

214.3
let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;    
	}
	console.log(res);
}
func(arr)

214.4
function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1() + func2() );

214.5
let res = sum([1, 2, 3, 4, 5]);
console.log(res);
function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

214.6
let res = sum([1, 2, 3, 4, 5]);
console.log(res);
function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
    return sum;
}

214.7
function add(num) {
	if (num <= 9) {
		return console.log('0' + num);
	}
    else {
        return console.log(num); 
    }
}
add(11)

214.8
let arr = [1, 2, 3, 4, 5];
console.log(res);
function sum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

214.9
let num = 12345;
let res = getDigitsSum(num);
console.log(res);
function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;	
	for (let elem of arr) {
		sum += +elem;
	}	
	return sum;
}

214.10
console.log(isPrime(13)); // должен вывести true
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
}

// Практика на функции в JavaScript
215.1
let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;    
	}
	console.log(res);
}
func(arr)

215.2
function getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      let result = num % i;
      if (result == 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  console.log(getDivisors(24)); 

  215.3 
function func(str) {
    let arr=[];
    for (let i=0;i<str.length;i++) {
        arr.push(str[i]);
    }
    return arr
}
console.log(func('Anna')); 

215.4 
function func(str) {
    let arr=[];
    for (let i=str.length-1;i>=0;i--) {
        arr.push(str[i]);
    }
    return arr
}
console.log(func('Anna'));

215.5 
function big (str) {
    let res=str.slice(0,1).toUpperCase()+str.slice(1);
    return res
}
console.log(big('Anna')); 

215.6 
function big(str) {
    let arr=str.split(' ');
    let res=' ';
    for (let i=0; i<arr.length; i++) {
        res += arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
    }
    return res.trim();
}
console.log(big('julia bogdanova'));

215.7 пр
function func(num) {
    let arr=[];
    for (let i=1;i<=num;i++){
        arr.push(i);
    }
    return arr
    }
    console.log(func(7)); 

215.8 
let num = 12345;
let res = getDigitsSum(num);
console.log(res);
function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;	
	for (let elem of arr) {
		sum += +elem;
	}	
	return sum;
} 

215.9 
function isYear (year) {
    return year % 4 == 0;
            }
        let year = +prompt("Введи год:");
        if(isYear(year)){
                console.log("Год " + year + " - високосный.");
            } else {
                console.log("Год " + year + " - не високосный.");
            }

215.10 
function sytki(num){
    return num/60/60/24
}
console.log(sytki(172800)); 

215.11 
function func(arr) {
    let rand=Math.floor(Math.random() * (arr.length));
    return arr[rand];
}
let arr= [1,2,3,4,5]
console.log(func(arr));

215.12 
console.log(isPrime(13)); 
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
}




























