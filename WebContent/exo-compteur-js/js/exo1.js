/*
 * Functions
 */
function affiche() {
  // Je récupère mon élément
  var counter = document.getElementById('counter');

  // J'incrémente count
  count++;

  // J'affiche
  counter.textContent = count;
}


/*
 * State
 */
var count = 0;


/*
 * Init
 */
// Je récupère mon bouton
var button = document.getElementById('button');

// Je vais écouter le clic
button.addEventListener('click', affiche);
