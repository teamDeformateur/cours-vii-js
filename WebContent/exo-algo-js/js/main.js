/*
* /!\ Attention ce code ne marche pas si on l'execute en mode nodeJS sous eclipse.
* Il faut l'executer dans une page HTML et activer la console sous Chrome
*/

//Exo 1

/*La fonction de comparaison prend deux paramètres a et b doit
 * - Renvoyer -1 si a<b
 * - Renvoyer 0 si a=b
 * - Renvoyer 1 si a>b
 */
function compareNumbers(a,b){
	return a-b;
}

function findMaximum(ar){
	// On utilise la fonction 'sort' de la bibliotheque Array.
	// Elle prend en argument une fonction de comparaison (voir ci-dessus)
	// décrivant la regle de tri.
	// Dans le cas présent, il s'agit de les trier numériquement.
	ar.sort(compareNumbers);
	// On affiche le dernier élement du vecteur trié, correspondant à la valeur
	// max
	console.log(ar[ar.length-1]);
}
// Fin Exo 1

// Exo 2
	
function indexation(ar){
	// On passe tout en minuscule
	ar.toLowerCase();
	
	// On enleve la ponctuation
	ar.replace(new RegExp(":|!|\.|,|'","g"), "");
	
	// On récupère tous les mots dans un vecteur
	let array_string = ar.split(" ");
	
	
	// On crée deux tableaux de même taille, l'un contenant l'index des mots,
	// l'autre contenant l'index des occurences correspondant
	let index_string = [];
	let index_occurences = [];
	
	// On parcourt la liste des mots
	for ( let substring of array_string) {
		// Cas ou le mot existe déjà dans la liste des index
		if(index_string.includes(substring)){
			index_occurences[index_string.indexOf(substring)]++;
		}
		
		// Cas ou le mot n'existe pas encore dans la liste des index
		else{
			index_string.push(substring);
			index_occurences.push(1);
		}
	}
	
		// On affiche l'index des mots et occurence
		for(let i=0; i<index_string.length; i++){
			console.log("mot : " + index_string[i] + ", occurence : "+ index_occurences[i] + " fois.");
		}
	}
	
// Fin Exo 2


// Test Exo 1
console.log("exo 1 :");
let a = [1, 10, 1454, 21, 2];
findMaximum(a);


// Test Exo 2
console.log("exo 2: ")
let str = "Orientis vero limes in longum protentus et rectum ab Euphratis fluminis ripis ad usque supercilia porrigitur Nili, laeva Saracenis conterminans gentibus, dextra pelagi fragoribus patens, quam plagam Nicator Seleucus occupatam auxit magnum in modum, cum post Alexandri Macedonis obitum successorio iure teneret regna Persidis, efficaciae inpetrabilis rex, ut indicat cognomentum.";
indexation(str);

// exercice 3

function direBonjour(arg){
	// on affiche dans la console les différents éléments de l'argument
	console.log("Bonjour, je m'appelle " + arg.prenom + " " + arg.nom + ", si vous voulez m'envoyer une lettre, j'habite au " + arg.adresse.numero + " " + arg.adresse.type + " " + arg.adresse.libelle + ", " + arg.adresse.cp + " " + arg.adresse.ville + " en " + arg.adresse.pays );
}

// onn créer un objet personne
var personne = {
		nom : "Reignoux",
		prenom : "Alexis",
		adresse : {
			numero : "1",
		    type : "rue",
		    libelle : "Médecin Colonel Albert Chemin",
		    cp : "33700",
		    ville : "Mérignac",
		    pays : "France"
		}
};

direBonjour(personne);

// On créer une liste de reserrvation
var reservation = [
                   ["6546547", "04/11/1992", "Aj65J32"]
                   ];

function ajouterResa(arg, numResa, dateResa, numVol){
	// on ajoute à la fin de arg un tableau contenant les données voulues
	arg.push([numResa, dateResa, numVol]);
	// et on retourne le tableau
	return arg
}

// on appelle la fonction en réaffectant le tableau des reservations
reservation = ajouterResa(reservation, "kjer65464", "10/05/2017", "654HU62");
console.log(reservation);
