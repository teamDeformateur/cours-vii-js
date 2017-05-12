/*
var compteur = document.getElementById("timer");
var rebours = compteur.textContent;
console.log(rebours);
*/
var num = 5, min = 0, rebours = setInterval(decrementNumber, 1000);

function decrementNumber() {
	if (num == min){
		clearInterval(rebours);
		alert("La bombe a explosé");
	}
	else{
		num=num-1;
		document.getElementById("timer").innerHTML = num;
	}
}

function desamorcer(){
	ClearInterval(rebours)
	alert("Bravooo !!! Vous avez sauvé le monde");
}

