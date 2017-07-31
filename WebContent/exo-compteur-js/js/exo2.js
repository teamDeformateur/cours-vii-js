let bouton = document.querySelector('#yes');

bouton.onclick = function() {

	let counter = document.querySelector('#counter-yes');

	let val = parseInt(counter.textContent);

	counter.textContent = ++val;
};

let boutonNo = document.querySelector('#no');

boutonNo.onclick = function() {

	let counter = document.querySelector('#counter-no');

	let val = parseInt(counter.textContent);

	counter.textContent = ++val;
};
