let nums = document.querySelectorAll('ul li');
for (let num of nums) {
	num.addEventListener('click', function func() {
        if (this.textContent < 10){
            this.textContent = Number(this.textContent) + 1;
            this.removeEventListener('click', func)
        } else {
            alert(this.textContent + ' ' + '> 10')
        }
    });
}




