var num = 10, min = 0, compteur = setInterval(decrementNumber, 1000);

function decrementNumber() {// fonction compteur

	if (num == min) {
		clearInterval(compteur);
		alert("Les enchères sont terminées, merci d'y avoir participé.");
	} else {
		num = num - 1;
		document.getElementById("counter").innerHTML = num;
	}
}

function encheres(event) {
	// j'empeche la page de se rafraichir
	event.preventDefault();
	// si le compteur est arrivé a 0
	if (document.getElementById("counter").innerHTML == 0) {
		// on empeche d'encherir
		alert("Vous ne pouvez plus enchérir, les echères sont déjà terminées.");
	} else {
		// je récupère la valeur des dernieres enchères
		var val = document.getElementById("current");
		var valeur = parseInt(val.value);
		// je récupère le montant saisi par l'utilisateur
		var mont = document.getElementById("amount");
		var montant = parseInt(mont.value);

		// Si le montant saisi est superieur à celui des enchères, le montant des encheres devient celui saisi par l'utilisateur
		if (montant > parseInt(val.innerHTML)) {
			val.innerHTML = montant;
		} else {
			//sinon un message d'alerte apparait
			alert("les enchères sont trop hautes pour le montant saisi.")
		}

	}
}

var enchere = document.getElementById('encherir');
enchere.addEventListener('click', encheres);