//2. Код должен проверить сумму чисел:
let num1 = '1';
let num2 = '2';
if (+num1 + +num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//3. Код должен проверить сумму чисел:
let num3 = '1';
let num4 = '2';
if (Number(num3) + Number(num4) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//4. Код должен проверить первую цифру числа:
let num5 = 123;
if (String(num5)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//5. Код должен проверить первую цифру числа:
let num6 = 123;
if (String(num6)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//6. Код должен проверить первую цифру числа:
let num7 = 123;
if (String(num7)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//7. Код должен проверить первую цифру числа:
let num8 = 123;
let first1 = String(num8)[0];
if (first1 == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//8. Код должен проверить, что в числе ровно две цифры:
let num9 = 12;
let first2=String(num9);
if (first2.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//9.Код должен проверить, что в числе ровно две цифры:
let num10 = 12;
let str1 = String(num10);
if (str1.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//10. Код должен проверить, что в числе ровно две цифры:
let num11 = 12;
if (String(num11).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//11. Код должен проверить, что в числе ровно две цифры:
let num12 = 12;
if (String(num12).length === Number(2)) {
	console.log('+++');
} else {
	console.log('---');
}

//12. Код должен проверить, что в числе ровно две цифры:
let num13 = 12;
if (String(num12).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}
//13.Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:
let num14 = 123033;
let str10=String(num14);
let sum1 = Number(str10[0]) + 
Number(str10[1]) + Number(str10[2]); 
let sum2 = Number(str10[3]) + 
Number(str10[4]) + Number(str10[5]); 
if (sum1 == sum2) {
console.log('суммы равны');
} else {
console.log('суммы не равны');
}