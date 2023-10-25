//269.Допишите следующий код так, чтобы его запуск алертом выводил '!':
(function() {
	// какой-то код
})()()();

(function(){
    return function(){
        return function(){
        alert('!')
        }
    }
})()()()

//Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function() {
	// какой-то код
})(1)(2);

(function(num1) {
    return function(num2){
    console.log(num1+num2)
    }
})(1)(2);

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function() {
	// какой-то код
})(1)(2)(3);

(function(num1) {
    return function(num2){
        return function(num3){
    console.log(num1+num2+num3)
        }
    }
})(1)(2)(3);

// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
let func = (function() {
	let num = 1;	
	return function() {
        if (num == 5) {
		console.log(num);
		num = 1;
        } else {
        console.log(num++)
        }
	}
})();