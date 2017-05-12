var num = 10, min = 0, compteur = setInterval(decrementNumber, 1000);

function decrementNumber() {
	if (num == min){
		clearInterval(compteur);
		alert("Les enchères sont terminées, merci d'y avoir participé.");
	}
	else{
		num=num-1;
		document.getElementById("counter").innerHTML = num;
	}
}

