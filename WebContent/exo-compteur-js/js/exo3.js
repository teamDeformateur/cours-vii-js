/*
 * Handlers
 */
function addColor(event) {
	// On arrête le comportement par défaut
	// pour éviter le rechargement de la page
	event.preventDefault();

	// Je récupére l'input
	var value = getValue();

	// Test
	if (testColor(value)) {
		// Oui, c'est une couleur, donc je l'affiche
		displayColor(value);
		displayError('');
	} else {
		// Non, ce n'est pas une couleur, donc j'affiche une erreur
		displayError("ceci n'est pas une couleur");
	}

	// On reset
	resetInput();
}

/*
 * Functions
 */
// Récupère la valeur de l'input
function getValue() {
	// Je récupére l'input
	var input = document.getElementById('colors-input');

	// Je récupére la valeur de l'input
	return input.value;
}

// Réinitialiser l'input
function resetInput() {
	// Je récupère l'input
	var input = document.getElementById('colors-input');

	// Je le vide
	input.value = '';

	// Je l'active
	input.focus();
}

// Affiche la couleur dans le <ul>
function displayColor(color) {
	// Puis de créer un <li>
	var li = document.createElement('li');

	// Puis de mettre la valeur de l'input dans ce <li>
	li.textContent = color;

	// Je rajoute de la couleur
	li.style.color = color;

	// Je récupère mon <ul>
	var ul = document.getElementById('colors-list');

	// Enfin, d'ajouter ce <li> à notre <ul>
	ul.appendChild(li);
}

// Affiche une erreur
function displayError(errorMessage) {
	// Je récupère la div error
	var error = document.getElementById('colors-error');

	// On affiche l'erreur
	error.textContent = errorMessage;
}

// Teste si la value donnée en argument est une couleur
function testColor(value) {
	// Est-ce que ça commence par un dièse ?
	var startWithHash = value.indexOf('#') === 0;

	// Est-ce que ça fait 4 ou 7 caractères ?
	var lengthOk = value.length === 4 || value.length === 7;

	// Renvoie un booléen
	return startWithHash && lengthOk;
}


/*
 * Init
 */
// Je récupère mon formulaire
var form = document.getElementById('colors-form');

// On pose l'écouteur d'évenement
form.addEventListener('submit', addColor);
