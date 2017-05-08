function sayHello2(name) {
	// variable locale
	var text = 'Hello ' + name;
	// fonction anonyme dans variable say dans variable déclarée dans fonction
	// sayHello2
	// fonction anonyme => say
	var say = function() {
		console.log(text);
	};
	return say;
}

var say2 = sayHello2('Bob');
// affiche function(){console.log(text);}
// on peut utiliser la variable text déclarée dans une autre fonction car sa
// référence est conservée dans une closure
// C'est possible car le pointeur de fonction say2 garde une référence secrète
// vers la fonction qui l'a créée
console.log(say2.toString());

say2(); // logs "Hello Bob"

/*
 * Exemple 3
 */
function say667() {
	// variable locale qui va se retrouver référencée dans une closure
	var num = 42;
	// à ce moment, num vaut 42
	var say = function() {
		console.log(num);
	}
	// ajout de 1 à 42 => num = 43
	num++;
	return say;
}
var sayNumber = say667();
// pourtant, la valeur affichée est 43
sayNumber();

/*
 * Exemple 4
 */
var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
	// variable locale qui va se retrouver référencée dans une closure
	var num = 42;
	// fonctions anonymes stockées en tant que variables globales
	gLogNumber = function() {
		console.log(num);
	}
	gIncreaseNumber = function() {
		num++;
	}
	gSetNumber = function(x) {
		num = x;
	}
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;

// l'appel à la fonction qui créé les références de fonctions, réinitialise les
// variables dans le closure
setupSomeGlobals();
gLogNumber(); // 42

oldLog() // 5

/*
 * Exemple 5
 */
function buildList(list) {
	var result = [];
	for (var i = 0; i < list.length; i++) {
		var item = 'item' + i;
		result.push(function() {
			console.log(item + ' ' + list[i])
		});
	}
	return result;
}

function testList() {
	var fnlist = buildList([ 1, 2, 3 ]);
	// Using j only to help prevent confusion -- could use i.
	for (var j = 0; j < fnlist.length; j++) {
		fnlist[j]();
	}
}