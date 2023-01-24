document.addEventListener('DOMContentLoaded', main);


function main() {
	const submitButton = document.getElementById('Submit');
	submitButton.addEventListener('click', submit);	
}

function submit() {
	const inputAngka = document.getElementById('inputNumber').value;
	cekGanjiGenap(inputAngka);
}

function cekGanjiGenap(bilangan) {
	if (bilangan % 2 === 0) {
		alert(`${bilangan} merupakan bilangan genap`);
	} else {
		alert(`${bilangan} merupakan bilangan ganjil`);
	}
}