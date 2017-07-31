let bouton = document.querySelector('#button');

bouton.onclick = function() {

	let counter = document.querySelector('#counter');

	let val = parseInt(counter.textContent);

	counter.textContent = ++val;
};
