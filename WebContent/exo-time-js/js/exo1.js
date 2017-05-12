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
	clearInterval(rebours);
	alert("Bravooo !!! Vous avez sauvé le monde !! <3 <3 <3 <=====3");
}

var stop = document.getElementById('stop');

//Je vais écouter le clic
stop.addEventListener('click', desamorcer); 