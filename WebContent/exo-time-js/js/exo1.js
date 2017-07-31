// Je récupère mon bouton
var button = document.getElementById('stop');

// le temps passe...
function tictac(){
	var temps = document.getElementById('timer');
	var secondes = parseInt(temps.textContent,10);
	secondes--;
	temps.textContent = secondes;
}

//j'exécute la fonction tictac toutes les secondes
var intervalID = setInterval(tictac, 1000);

function writeOk() {
  console.info('writeOk');

  // Je récupère le div
  var counter = document.getElementById('counter');

  // J'écris dedans
  counter.textContent = 'Trop tard.. BOUM !';
  
  // je désactive le bouton
  button.style.visibility = "hidden";

  // J'arrête l'interval
  clearInterval(intervalID);
}


// J'exécute la fonction writeOk dans 3000 ms
var timer = setTimeout(writeOk, 3000);

// Stopper le timer
function stopTimer() {
  console.info('stopTimer');

  // Avec clearTimeout, on peut arrêter le compte à rebours
  clearTimeout(timer);
  //J'arrête l'interval
  clearInterval(intervalID);
  alert("Bravooo !!! Vous avez sauvé le monde"); 
}

//J'écoute le clic
button.addEventListener('click', stopTimer);

