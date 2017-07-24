# Javascript Vanilla

## Introduction
* First-class functions : signifie que les fonctions sont considérées comme des variables
* Prototype-based : les classes ne sont pas définies explicitement mais au moment de leur usage ou dérivées à partir d'un autre objet
* Et les classes alors ?
  * Elles existent mais font parties de la dernière version du ECMAScript2015 (6th edition - Juin 2015)

## Orienté-objet
### Déclaration / Création
Objet littéral :
```javascript
var film = {};
```
```javascript
var film = {
    titre: 'The Matrix',
    annee: 1999,
    realisateurs: ['Lilly Wachowski', 'Lana Wachowski'],
    sumup: function(){
        console.log('Le film ' + this.titre + ' a été tourné en ' + this.annee + '. Il a été réalisé par : ' + this.realisateurs[0] + ' et ' + this.realisateurs[1]);
    },
    synopsis: function(){
        console.log('Dans un monde pas si futuriste et fantaisiste que ça, un jeune homme est choisi pour sortir les hommes de leurs illusions. Confronté à de multiples menaces, il aura fort à faire mais surtout, il sera amené à se battre contre lui-même et ses propres doutes.');
    }
};
```
### Redéfinition de membres
```javascript
film.budget = '$63 million';
film.citations = function(){
	console.log('Knock, knock Neo...');
}
// cette fonction est désormais membre de l'objet
film.citations();
```
### Notation crochets
C'est cool, c'est dynamique !
```javascript
film['budget'];
// assignation dynamique
var myDataName = 'casting';
var myDataValue = [ 'Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss','Hugo Weaving' ];
film[myDataName] = myDataValue;
// la propriété casting existe dorénavant
film.casting;
```
### Constructeurs
Création d'objets via constructeurs.
```javascript
function Film(titre){
    this.titre = titre;
    this.sumup = function() {
        console.log('Titre du film : ' + this.titre);
    };
}

// Appels
var matrix = new Film('The matrix');
```
A noter que la fonction sumup() est redéfinie à chaque appel du constructeur. Ce qui n'est pas optimisé. Pour ce faire, il faudra utiliser les prototypes.

#### Autres méthodes de création
```javascript
// Avec Object()
var cloud = new Object();
cloud.titre = 'Cloud atlas';
var  bound = new Object({
	titre: 'Bound',
	infos: function(){
		console.log('Titre : ' + this.titre);
	}
});

// Avec Object.create() (clonage)
var speed = Object.create(bound);
```

### Prototypes
Les objets héritent des fonctionnalités d'autres objets. Cependant, c'est un mécanisme différent de l'héritage en POO.
#### Définition
Un prototype est un modèle d'objet (template) qui fait hériter ses propriétés et méthodes, lui-même peut avoir un prototype et ainsi de suite : c'est la prototype chain.
En POO classique, une classe est définie puis lorsque des instances sont créées, toutes les propriétés et méthodes définies dans la classe sont copiées à l'instance. En JS, un lien est fait entre l'instance et son prototype (propriété `__proto__` de l'objet). Ainsi, les propriétés et méthodes sont trouvées en parcourant la chaîne de prototypes.
#### Accès
Il est possible d'obtenir le prototype d'un objet en invoquant la méthode `Object.getPrototypeOf()`. Ou d'y accéder par la propriété (dépréciée) __proto__.
#### Prototype chain
D'autres part, l'espace de noms d'un objet qui contient tout ce dont les instances hériteront se trouve dans la propriété `prototype`.
Ainsi, tous les membres de Object.prototype sont accessibles via la chaîne. Les autres non.
#### Redéfinition de prototypes
```javascript
// ajout d'une méthode au prototype
FilmComplet.prototype.afficherTitre = function(){
	console.log('Titre du film : ' + this.titre);
};
// tous les FilmComplet disposent de la méthode
jupiter.afficherTitre();
```
#### Best practices
Définir les propriétés dans le constructeur, les méthodes dans le prototype en dehors du constructeur.
```javascript
function Film(titre){
    this.titre = titre;
}
Film.prototype.afficherTitre = function(){
    console.log('Titre du film : ' + this.titre);
}
```
### Héritage
[MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
```javascript
function FilmOscarise(titre, annee, realisateurs, executif, delegue, ceremonie){
	// appel du constructeur de Filmcomplet
	FilmComplet.call(this, titre, annee, realisateurs, executif, delegue);
	this.ceremonie = ceremonie;
}
//créer le lien entre prototypes
FilmOscarise.prototype = Object.create(FilmComplet.prototype);
// redéfinir le bon constructeur 
FilmOscarise.prototype.constructor = FilmOscarise;
```
### JSON
JavaScriptObjectNotation
* format de fichier pûrement données
* guillements
* attention au [format](https://jsonlint.com/)

```javascript
{
    nom: "Karktor",
    classes : ["paladin", "prètre"],
    magies : {
        feu : ["boule"],
        glace : ["tempête","rayon"]
    }
}

// accès en notation habituelle en supposant qu'un script JS a récupéré les données et les a placées dans une variable 'personnage'
personnage.magies['feu'];
personnage.classes[1];
```
#### JSON sous format Array
```javascript
[
    {
        nom: "Karktor",
        classes : ["paladin", "prètre"],
        magies : {
            feu : ["boule"],
            glace : ["tempête","rayon"]
        }
    },
    {
        nom: "Korgan",
        classes : ["voleur", "assasin"],
        habilites : {
            pieges : ["ours", "chausse-trapes"],
            special : ["assassinat"]
        }
    }
]
```
## DOM
Document Object Model
### Rechercher dans le DOM
#### getElementById
#### querySelector
Le querySelector permet de recherche en fonction de sélecteurs plutôt qu'à partir d'un id ou d'un nom. Bien sûr, le sélecteur choisi peut être un ID. Les sélecteurs sont ceux de CSS.
```javascript
var element = document.querySelector('#wrapper');
```
##### Raccourci (en mode flemme)
JQuery n'a rien inventé sur ce point, la preuve :
```javascript
// N'en récupérer qu'un seul
function $(selector, el) {
     if (!el)
     {
        el = document;
     }
     return el.querySelector(selector);
}
// Récupérer tous les éléments
function $$(selector, el) {
     if (!el) 
     {
        el = document;
     }
     return el.querySelectorAll(selector);
}
var element = $('#wrapper');
```

