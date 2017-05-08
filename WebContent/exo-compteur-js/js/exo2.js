/*
 * Functions
 */
function addYes() {
  // Je récupère l'élément
  var counterYes = document.getElementById('counter-yes');

  // J'incrémente le compteur
  countYes++;

  // Je modifie le contenu texte
  counterYes.textContent = countYes;
}

function addNo() {
  // Je récupère l'élément
  var counterNo = document.getElementById('counter-no');

  // J'incrémente le compteur
  countNo++;

  // Je modifie le contenu texte
  counterNo.textContent = countNo;
}


/*
 * State
 */
var countYes = 0;
var countNo = 0;


/*
 * Init
 */
/* Je récupère les boutons */
// Je récupère le bouton oui
var buttonYes = document.getElementById('yes');

// Je récupère le bouton non
var buttonNo = document.getElementById('no');

/* Je pose mes events */
// Je pose un evenement click sur mon bouton oui
buttonYes.addEventListener('click', addYes);

// Je pose un evenement click sur mon bouton non
buttonNo.addEventListener('click', addNo);
