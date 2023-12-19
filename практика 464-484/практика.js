// №464
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//     p.addEventListener('click', ()=>{
//         p.textContent ++;
//     })
//     parent.appendChild(p);
// }

// №465.1
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//       li.textContent = arr[i];
//     ul.appendChild(li);
//   };

// №465.2
// let ul = document.querySelector('ul');
// let arr = ['nasta', 'anna', 'yulia'];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click', ()=>{
//         alert(li.textContent)
//     })
//     ul.appendChild(li);
//   };

// №465.3
// let ul = document.querySelector('ul');
// let arr = ['nasta', 'anna', 'yulia'];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click', ()=>{
//         li.textContent += '!'
//     })
//     ul.appendChild(li);
//   };

// №465.4
// let ul = document.querySelector('ul');
// let arr = ['nasta', 'anna', 'yulia'];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click', func)
//     function func() {
//         li.textContent += '!'
//         li.removeEventListener('click', func);
//     }
//     ul.appendChild(li);
//   };

// №466.1
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// №466.2
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// №466.3
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent = 'x'
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// №466.4
// let table = document.querySelector('#table');
// let width = document.querySelector('#width');
// let height = document.querySelector('#height');
// height.addEventListener('blur', function(){
//     for (let i = 0; i < width.value; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < height.value; i++) {
// 		let td = document.createElement('td');
//         td.textContent += 'pupsik';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// })

// №467.1
// let table = document.querySelector('#table');
// let k = 1; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');	
// 		td.textContent = k; 
// 		k++; 
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// №467.2
// let table = document.querySelector('#table');
// let k = 2; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');	
// 		td.textContent = k; 
// 		k +=2; 
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// №468.2
// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem **2;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// №469.1
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let employee of employees) {
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
//     table.appendChild(tr);
// }

// №469.2
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let employee of employees) {
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
//     td1.textContent = employee.name;
//     tr.appendChild(td1);
// let td2 = document.createElement('td');
//     td2.textContent = employee.age;
//     td2.addEventListener('click', ()=>{
//         td2.textContent ++;
//     });
//     tr.appendChild(td2);
// let td3 = document.createElement('td');
//     td3.textContent = employee.salary;
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }

// №469.3
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let employee of employees) {
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
//     td1.textContent = employee.name;
//     tr.appendChild(td1);
// let td2 = document.createElement('td');
//     td2.textContent = employee.age;
//     td2.addEventListener('click', ()=>{
//         td2.textContent ++;
//     });
//     tr.appendChild(td2);
// let td3 = document.createElement('td');
//     td3.textContent = employee.salary;
//     td3.addEventListener('click', ()=>{
//       td3.textContent = employee.salary += employee.salary* 0.1  
//     });
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }

// №470.1
// let table = document.querySelector('#table');
// let btn = document.querySelector('input');
// let tr = document.createElement('tr');
// btn.addEventListener('click', function(){
//     for (let i = 1; i <= 1; i++) {
//     let td = document.createElement('td');
//     tr.textContent += "x"
// } 
//     table.appendChild(tr);
// });

// №470.2
// let table = document.querySelector('#table');
// let btn = document.querySelector('input');
// let count = 1;
// btn.addEventListener('click', ()=> {
//     ++ count;
//     let newtr = document.createElement('tr');
//     for (let i = 0; i < count; i++) {
//     let td = document.createElement('td');
//     newtr.appendChild(td)
// }
// table.append(newtr);
// let trs = document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let td = document.createElement('td');
//     tr.append(td);
// }
// });

// №471
// let tds = document.querySelectorAll('#table td');
// let btn = document.querySelector('input');
// btn.addEventListener('click', ()=>{
//     for (let td of tds) {
//         td.textContent *= 2;
//     }
// })

// №472
// let parent = document.querySelector('#parent');
// let btn = document.querySelector('input');
// let count = 4;
// btn.addEventListener('click', function() {
//     let li = document.createElement("li");
//     li.textContent = count;
//     count++;
//     parent.appendChild(li);
//     li.addEventListener('click', function() {
//         li.remove();
//     });
//     parent.addEventListener('click', func)
//     function func(event) {
//         if (event.target.tagName === "LI") {
//           parent.removeChild(event.target);
//         }
//     }
// });
// СПРОСИТЬ

// №473
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(event) {
// 	elem.remove();
//  event.preventDefault();
// });

// №474.1
// let elems = document.querySelectorAll('ul li');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

// №474.2
// let table = document.querySelectorAll('#table');
// let trs = document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let td = document.createElement('td');
//     let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
//     tr.append(td);
//     td.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         tr.remove();
//         event.preventDefault();
//     });
// }

// №475.1
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent;
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

// №475.2
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func)
// function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	elem.removeEventListener('click', func)
// 	input.addEventListener('blur', function() {
// 		elem.textContent = input.value;
//     	});
// 	elem.parentElement.appendChild(input);
// }

// №476
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//     elem.textContent = '';
// 	elem.appendChild(input);
//     input.addEventListener('blur', ()=>{
//         elem.textContent = input.value;
//         elem.addEventListener('click', func);
//     });
//     elem.removeEventListener('click', func);
// });

// №477.1
// let list = document.querySelectorAll('ul li');
// for (let li of list) {
// 	li.addEventListener('click', function func() {
//         let input = document.createElement('input');
// 		input.value = li.textContent;		
// 		li.textContent = '';
// 		li.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			li.textContent = input.value;
// 			li.addEventListener('click', func);
// 		});
// 		li.removeEventListener('click', func);
// 	});
// }

// №477.2
// let table = document.querySelectorAll('#table');
// let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
//     td.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = td.textContent;
//         td.textContent = '';
//         td.appendChild(input);
//         input.addEventListener('blur', function() {
//             td.textContent = input.value;
//             td.addEventListener('click', func);
//         });
//         td.removeEventListener('click', func);
//     });
// }

// №478.1
// let elems = document.querySelectorAll('#parent span');
// let ps = document.querySelectorAll('#parent p');
// for (let p of ps) {
//     let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	p.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		p.remove();
// 		event.preventDefault();
// 	});
// }
// for (let elem of elems) {
//     elem.addEventListener('click', function func() {
//         let input = document.createElement('input');
//     	input.value = elem.textContent;		
//     	elem.textContent = '';
//     	elem.appendChild(input);
//     	input.addEventListener('blur', function() {
//             elem.textContent = input.value;
//             elem.addEventListener('click', func);
//         });
//         elem.removeEventListener('click', func);
//     });
// }


// №478.2
// let elems = document.querySelectorAll('#parent p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     span.textContent = elem.textContent;	
//     elem.textContent = '';	
//     elem.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         elem.remove();
//         event.preventDefault();
//     });
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;		
//         span.textContent = '';
//         span.appendChild(input);
//         input.addEventListener('blur', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         });
//         span.removeEventListener('click', func);
//     });
// }

// №479.1
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     span.textContent = elem.textContent;	
//     elem.textContent = '';	
//     elem.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         span.className = 'anna'
//         event.preventDefault();
//     });
// }

// №479.2
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     span.textContent = elem.textContent;	
//     elem.textContent = '';	
//     elem.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         span.className = 'anna'
//         remove.remove();
//         event.preventDefault();
//     });
// }

// №479.3
// let table = document.querySelectorAll('#table');
// let trs = document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let td = document.createElement('td');
//     let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
//     tr.append(td);
//     td.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         tr.className = 'anna2'
//         event.preventDefault();
//     });
// }

// №479.4
// let table = document.querySelectorAll('#table');
// let trs = document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let td = document.createElement('td');
//     let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
//     tr.append(td);
//     td.appendChild(remove);
//     remove.addEventListener('click', function event(event) {
//         tr.classList.toggle('anna2');
//         event.preventDefault();
//     });
// }

// №480
// let elem = document.querySelector('p');
// let btn = document.querySelector('input');
// btn.addEventListener('click', function() {
// 	elem.classList.toggle('anna3');
// });

// №481.1
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('anna3');
// 	});
// }

// №481.2
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('anna3');
// 	});
// }

// №481.3
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		button.previousElementSibling.classList.toggle('anna3');
// 	});
// }

// №482.1
// let list = document.querySelectorAll('ul li');
// for (let li of list) {
// 	li.addEventListener('click', function() {
// 		li.classList.add('anna2');
// 	});
// }

// №482.2
// let list = document.querySelectorAll('ul li');
// for (let li of list) {
// 	li.addEventListener('click', function() {
// 		li.classList.toggle('anna2');
// 	});
// }

// №483.1
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
// 		td.classList.add(color);
// 	});
// }

// №483.2
// let tds = document.querySelectorAll('#table td');
// let i = 0;
// let colors = ['color1', 'color2', 'color3'];
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		td.classList.add(colors[i]);	
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }

// №484.1
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     ul.appendChild(li);
// };

// №484.2
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     ul.appendChild(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;		
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('change', function() {
//             li.textContent = input.value;
//             li.addEventListener('click', func);
//         });
//         li.removeEventListener('click', func);
//     });
// };

// №484.3
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     ul.appendChild(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;		
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('change', function() {
//             li.textContent = input.value;
//             li.addEventListener('click', func);
//         });
//         li.removeEventListener('click', func);
//     });
// };
// let input = document.querySelector('input');
// input.addEventListener('change', function() {
//     let li = document.createElement('li');	
//     li.textContent = input.value;	
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;		
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('change', function() {
//             li.textContent = input.value;
//             li.addEventListener('click', func);
//         });
//         li.removeEventListener('click', func);
//     });
//     ul.appendChild(li);
// });

// №484.4
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     ul.appendChild(li);
//     let span = document.createElement('span');
//     span.textContent = li.textContent;	
//     li.textContent = '';	
//     li.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     li.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         li.remove();
//         event.preventDefault();
//     });
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;		
//         span.textContent = '';
//         span.appendChild(input);
//         input.addEventListener('change', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         });
//         span.removeEventListener('click', func);
//     });
// };
// let input = document.querySelector('input');
// input.addEventListener('change', function() {
//     let li = document.createElement('li');	
//     li.textContent = input.value;
//     let span = document.createElement('span');
//     span.textContent = li.textContent;	
//     li.textContent = '';	
//     li.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     li.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         li.remove();
//         event.preventDefault();
//     });
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;		
//         span.textContent = '';
//         span.appendChild(input);
//         input.addEventListener('change', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         });
//         span.removeEventListener('click', func);
//     });
//     ul.appendChild(li);
// });


// №484.5
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = arr[i];
//     ul.appendChild(li);
//     let span = document.createElement('span');
//     span.textContent = li.textContent;	
//     li.textContent = '';	
//     li.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     li.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         span.className = 'anna'
//         event.preventDefault();
//     });
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;		
//         span.textContent = '';
//         span.appendChild(input);
//         input.addEventListener('change', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         });
//         span.removeEventListener('click', func);
//     });
// };
// let input = document.querySelector('input');
// input.addEventListener('change', function() {
//     let li = document.createElement('li');	
//     li.textContent = input.value;
//     let span = document.createElement('span');
//     span.textContent = li.textContent;	
//     li.textContent = '';	
//     li.insertAdjacentElement('beforeEnd', span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     li.appendChild(remove);
//     remove.addEventListener('click', function(event) {
//         span.className = 'anna'
//         event.preventDefault();
//     });
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;		
//         span.textContent = '';
//         span.appendChild(input);
//         input.addEventListener('change', function() {
//             span.textContent = input.value;
//             span.addEventListener('click', func);
//         });
//         span.removeEventListener('click', func);
//     });
//     ul.appendChild(li);
// });


// №484.6
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
//     table.appendChild(tr);
// }

// №484.7
// let employees = [
// 		{name: 'employee1', age: 30, salary: 400},
// 		{name: 'employee2', age: 31, salary: 500},
// 		{name: 'employee3', age: 32, salary: 600},
// 	];
// let table = document.querySelector('#table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// };
// let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
//     td.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = td.textContent;
//         td.textContent = '';
//         td.appendChild(input);
//         input.addEventListener('change', function() {
//             td.textContent = input.value;
//             td.addEventListener('click', func);
//         });
//         td.removeEventListener('click', func);
//     });
// }

// №484.8
// let employees = [
// 		{name: 'employee1', age: 30, salary: 400},
// 		{name: 'employee2', age: 31, salary: 500},
// 		{name: 'employee3', age: 32, salary: 600},
// 	];
// let table = document.querySelector('#table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// };
// let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
//     td.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = td.textContent;
//         td.textContent = '';
//         td.appendChild(input);
//         input.addEventListener('change', function() {
//             td.textContent = input.value;
//             td.addEventListener('click', func);
//         });
//         td.removeEventListener('click', func);
//     });
// }
// let trs = document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     remove.addEventListener('click', (event) => {
//         event.preventDefault()
//         tr.remove()
//     })
//     let td = document.createElement('td');
//     td.appendChild(remove);
//     tr.appendChild(td);
// }

// №484.9
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// };
// let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
// 	td.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 	    input.value = td.textContent;
// 	    td.textContent = '';
// 	    td.appendChild(input);
// 	    input.addEventListener('change', function() {
// 	        td.textContent = input.value;
// 	        td.addEventListener('click', func);
// 		});
// 		td.removeEventListener('click', func);
// 	});
// }
// let btn = document.querySelector('button');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener ('click', function() {
// 	let tr = document.createElement('tr');
// 	let newtd1 = document.createElement('td');;
// 	newtd1.textContent = inp1.value;
// 	tr.appendChild(newtd1);
// 	let newtd2 = document.createElement('td');;
// 	newtd2.textContent = inp2.value;
// 	tr.appendChild(newtd2);
// 	let newtd3 = document.createElement('td');;
// 	newtd3.textContent = inp3.value;
// 	tr.appendChild(newtd3);
// 	table.appendChild(tr);
// 	newtd1.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 	    input.value = newtd1.textContent;
// 	    newtd1.textContent = '';
// 	    newtd1.appendChild(input);
// 	    input.addEventListener('change', function() {
// 	        newtd1.textContent = input.value;
// 	        newtd1.addEventListener('click', func);
// 		});
// 		newtd1.removeEventListener('click', func);
// 	});
// 	newtd2.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 	    input.value = newtd2.textContent;
// 	    newtd2.textContent = '';
// 	    newtd2.appendChild(input);
// 	    input.addEventListener('change', function() {
// 	        newtd2.textContent = input.value;
// 	        newtd2.addEventListener('click', func);
// 		});
// 		newtd2.removeEventListener('click', func);
// 	});
// 	newtd3.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 	    input.value = newtd3.textContent;
// 	    newtd3.textContent = '';
// 	    newtd3.appendChild(input);
// 	    input.addEventListener('change', function() {
// 	        newtd3.textContent = input.value;
// 	        newtd3.addEventListener('click', func);
// 		});
// 		newtd3.removeEventListener('click', func);
// 	});
// });

// №484.10
// let ul = document.querySelector('ul');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key] + ' ';
//         li.appendChild(span);
//     }
//     ul.appendChild(li);
// }

// №484.11
// let ul = document.querySelector('ul');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key] + ' ';
// 		span.addEventListener('click', function func() {
// 			let input = document.createElement('input');
// 			input.value = span.textContent;		
// 			span.textContent = '';
// 			span.appendChild(input);
// 			input.addEventListener('change', function() {
// 				span.textContent = input.value;
// 				span.addEventListener('click', func);
// 			});
// 			span.removeEventListener('click', func);
// 		});
//         li.appendChild(span);
//     }
//     ul.appendChild(li);
// }

// №484.12
// let ul = document.querySelector('ul');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key] + ' ';
// 		span.addEventListener('click', function func() {
// 			let input = document.createElement('input');
// 			input.value = span.textContent;		
// 			span.textContent = '';
// 			span.appendChild(input);
// 			input.addEventListener('change', function() {
// 				span.textContent = input.value;
// 				span.addEventListener('click', func);
// 			});
// 			span.removeEventListener('click', func);
// 		});
//         li.appendChild(span);
//     }
// 	let remove = document.createElement('a');
//     	remove.href = '';
//     	remove.textContent = 'remove';
//     	li.appendChild(remove);
//     	remove.addEventListener('click', function(event) {
//         li.remove();
//         event.preventDefault();
//     });
//     ul.appendChild(li);
// }

// №484.13
// let ul = document.querySelector('ul');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key] + ' ';
// 		span.addEventListener('click', function func() {
// 			let input = document.createElement('input');
// 			input.value = span.textContent;		
// 			span.textContent = '';
// 			span.appendChild(input);
// 			input.addEventListener('change', function() {
// 				span.textContent = input.value;
// 				span.addEventListener('click', func);
// 			});
// 			span.removeEventListener('click', func);
// 		});
//         li.appendChild(span);
//     }
// 	let remove = document.createElement('a');
//     	remove.href = '';
//     	remove.textContent = 'remove';
//     	li.appendChild(remove);
//     	remove.addEventListener('click', function(event) {
//         li.remove();
//         event.preventDefault();
//     });
//     ul.appendChild(li);
// }
// let btn = document.querySelector('button');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click',function func() {
//     let li = document.createElement('li');
//     let span1 = document.createElement('span');
//     span1.textContent = inp1.value + ' ';
//     inp1.value = '';
//     li.appendChild(span1);
//     let span2 = document.createElement('span');
//     span2.textContent = inp2.value + ' ';
//     inp2.value = '';
//     li.appendChild(span2);
//     let span3 = document.createElement('span');
//     span3.textContent = inp3.value + ' ';
//     inp3.value = '';
//     li.appendChild(span3);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         li.remove();
//         event.preventDefault();
//     })
//     ul.appendChild(li);
// 	span1.addEventListener('click',function func() {
// 		let input = document.createElement('input');
// 		input.value = span1.textContent;
// 		span1.textContent='';
// 		span1.appendChild(input);
// 		input.addEventListener('change',function() {
// 		    span1.textContent=input.value + ' ';
// 		    span1.addEventListener('click',func);
// 		})
// 		span1.removeEventListener('click',func);
// 	})
// 	 span2.addEventListener('click',function func() {
// 		let input = document.createElement('input');
// 		input.value = span2.textContent;
// 		span2.textContent='';
// 		span2.appendChild(input);
// 		input.addEventListener('change',function() {
// 		    span2.textContent=input.value + ' ';
// 		    span2.addEventListener('click',func);
// 		})
// 		span2.removeEventListener('click',func);
// 	})
// 	span3.addEventListener('click',function func() {
// 		let input = document.createElement('input');
// 		input.value = span3.textContent;
// 		span3.textContent='';
// 		span3.appendChild(input);
// 		input.addEventListener('change',function() {
// 		        span3.textContent=input.value + ' ';
// 		        span3.addEventListener('click',func);
// 		})
// 		span3.removeEventListener('click',func);
// 	})
// })
			