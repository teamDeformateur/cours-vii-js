var bid = {
	/*
	 * Properties
	 */
	seconds : 10,
	current : 0,

	/*
	 * Properties créées pendant l'éxécution : counterDom formDom currentDom
	 * amountDom timer
	 */

	/*
	 * Init
	 */
	init : function() {
		console.info('bid.init');

		// Je stocke les objets HTML dans bid
		bid.counterDom = document.getElementById('counter');
		bid.formDom = document.getElementById('form');
		bid.currentDom = document.getElementById('current');
		bid.amountDom = document.getElementById('amount');

		// Au bout d'une seconde, décremente-moi le compteur
		bid.createTimeout();

		// Toutes les secondes, décremente-moi le compteur
		// setInterval(bid.decrement, 1000);

		// On écoute la soumission du formulaire
		bid.formDom.addEventListener('submit', bid.submit);
	},

	/*
	 * On décrémente
	 */
	decrement : function() {
		console.info('bid.decrement');

		// Décremente les secondes
		bid.seconds--;

		// Counter
		bid.counterDom.textContent = bid.seconds;

		// On refait ?
		if (bid.seconds > 0) {
			console.info('Il reste des secondes');
			bid.createTimeout();
		} else {
			console.info('L\'enchère est finie');
			// Quand ça arrive à 0, on cache le formulaire
			bid.formDom.style.display = 'none';
		}
	},

	/**
	 * Submit
	 * 
	 * @param event :
	 *            l'objet d'evenement, qui comporte des infos sur l'évenement
	 *            qui vient d'être lancé
	 */
	submit : function(event) {
		console.info('bid.submit');

		// On empêche le comportement par défault
		// Le comportement par défaut d'un form : faire une requete / recharger
		// la page
		event.preventDefault();

		// On récupère la valeur de l'input, et on reset
		var value = parseInt(bid.amountDom.value, 10);
		bid.amountDom.value = '';

		// Est-ce supérieur à l'enchère en cours ?
		if (!isNaN(value) && value > bid.current) {
			// Cette valeur devient l'enchère principale
			bid.current = value;

			// On met à jour le DOM
			bid.currentDom.textContent = value;

			/* On réinitialise le compte à rebours */
			// On arrête le setTimeout
			clearTimeout(bid.timer);

			// On remet à 10
			bid.seconds = 10;
			bid.counterDom.textContent = bid.seconds;

			// Et on relance le compte à rebours
			bid.createTimeout();
		}
	},

	/*
	 * Je crée le compte à rebours
	 */
	createTimeout : function() {
		bid.timer = setTimeout(bid.decrement, 1000);
	}
};

document.addEventListener('DOMContentLoaded', bid.init);
