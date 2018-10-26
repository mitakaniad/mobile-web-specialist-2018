// add2numbers.js
calculator = () => {
	let numbers = document.querySelectorAll('input');
	let i1 = numbers[0].value ? numbers[0].value : 0 ; //angka pertama
	let i2 = numbers[1].value ? numbers[1].value : 0; //angka kedua

    numbers[2].value = parseInt(i1) + parseInt(i2) ;

	//let pesan = document.getElementById('message');
	//message.innerHTML = "Selesai";
};

let button = document.querySelector('button');
button.addEventListener('click', calculator);