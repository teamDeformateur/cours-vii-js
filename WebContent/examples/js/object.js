var film = {
	titre : 'The Matrix',
	annee : 1999,
	realisateurs : [ 'Lilly Wachowski', 'Lana Wachowski' ],
	producteurs : {
		executif : 'Joel Silver',
		delegue : 'Tom Jones'
	},
	sumup : function() {
		console.log('Le film ' + this.titre + ' a été tourné en ' + this.annee
				+ '. Il a été réalisé par : ' + this.realisateurs[0] + ' et '
				+ this.realisateurs[1] + '. Les producteurs sont : '
				+ this.producteurs.executif + ' et ' + this.producteurs.delegue
				+ '.');
	},
	synopsis : function() {
		console
				.log('Dans un monde pas si futuriste et fantaisiste que ça, un jeune homme est choisi pour sortir les hommes de leurs illusions. Confronté à de multiples menaces, il aura fort à faire mais surtout, il sera amené à se battre contre lui-même et ses propres doutes.');
	}
};

film.sumup();
film.synopsis();

film.budget = '$63 million';
film.citations = function() {
	console.log('Knock, knock Neo...');
};

film.citations();

film['budget'];

var myDataName = 'casting';
var myDataValue = [ 'Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss',
		'Hugo Weaving' ];
film[myDataName] = myDataValue;
console.log(film.casting);
console.log(film['casting']);

function Film(titre){
    this.titre = titre;
    this.sumup = function() {
        console.log('Titre du film : ' + this.titre);
    };
}
var matrix = new Film('The matrix');
var vendetta = new Film('V for Vendetta');
matrix.sumup();
vendetta.sumup();


function FilmComplet(titre, annee, realisateurs, executif, delegue){
    this.titre = titre;
    this.annee = annee;
    this.realisateurs = realisateurs;
    this.producteurs = { executif, delegue };
    this.sumup = function() {
    	console.log('Le film ' + this.titre + ' a été tourné en ' + this.annee
				+ '. Il a été réalisé par : ' + this.realisateurs[0] + ' et '
				+ this.realisateurs[1] + '. Les producteurs sont : '
				+ this.producteurs.executif + ' et ' + this.producteurs.delegue
				+ '.');
    };
	this.synopsis = function() {
		console
				.log('Dans un monde pas si futuriste et fantaisiste que ça, un jeune homme est choisi pour sortir les hommes de leurs illusions. Confronté à de multiples menaces, il aura fort à faire mais surtout, il sera amené à se battre contre lui-même et ses propres doutes.');
	}
}
// Instanciation
var jupiter = new FilmComplet('Jupiter: ascending', 2015, [ 'Lilly Wachowski', 'Lana Wachowski' ], 'Grant Hill', 'The Wachowskis');
jupiter.sumup();

var cloud = new Object();
cloud.titre = 'Cloud atlas';

var bound = new Object(
	{
	titre: 'Bound',
	infos: function(){
		console.log('Titre : ' + this.titre);
		}
	}
);

bound.infos();
// clonage
var speed = Object.create(bound);
speed.titre = "Speed racer";
speed.infos();

// speed devient un FilmComplet
speed = new FilmComplet("Speed racer", 2008, [ 'Lilly Wachowski', 'Lana Wachowski' ], 'Joel Silver', 'Grant Hill');
// ajout d'une méthode au prototype
FilmComplet.prototype.afficherTitre = function(){
	console.log('Titre du film : ' + this.titre);
};

// tous les FilmComplet disposent de la méthode
jupiter.afficherTitre();
speed.afficherTitre();
// ajout d'un membre à jupiter
jupiter.afficherInfos = function(){
	console.log('foo');
}
// fonctionne
jupiter.afficherInfos();
// ne fonctionne pas
//speed.afficherInfos();

/*
 * Héritage
 */
function FilmOscarise(titre, annee, realisateurs, executif, delegue, ceremonie){
	// appel du constructeur de Filmcomplet
	FilmComplet.call(this, titre, annee, realisateurs, executif, delegue);
	this.ceremonie = ceremonie;
}

var titanic = new FilmOscarise('', 2000, ['Cameron'], '', '', '');

//créer le lien entre prototypes (clonage du prototype)
FilmOscarise.prototype = Object.create(FilmComplet.prototype);
// redéfinir le bon constructeur 
FilmOscarise.prototype.constructor = FilmOscarise;

