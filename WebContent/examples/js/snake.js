var serpent = {
	taille : 3,
	direction : "S",
	vitesse : 1,
	position : {
		x : 0,
		y : 0 
	},
	mangerPomme : function(){
		this.taille += 1;
	},
	tournerADroite : function(){
		switch(this.direction){
		case "N":
			this.direction = "E";
			break;
		case "S":
			this.direction = "W";
			break;
		case "E":
			this.direction = "S";
			break;
		case "W":
			this.direction = "N";
			break;
		}
	},
	tournerAGauche : function(){
		switch(this.direction){
		case "N":
			this.direction = "W";
			break;
		case "S":
			this.direction = "E";
			break;
		case "E":
			this.direction = "N";
			break;
		case "W":
			this.direction = "S";
			break;
		}
	},
	statut: function(){
		console.log('Direction : ' +  this.direction + ', taille : ' + this.taille);
	}
	
};
serpent.statut();
serpent.mangerPomme();
serpent.statut();
serpent.tournerAGauche();
serpent.statut();