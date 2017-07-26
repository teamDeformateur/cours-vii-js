"use strict"
// Je récupère la première div que je trouve dans le DOM
let element = document.querySelector("div");
// je crée un noeud paragraphe
let monParagraphe = document.createElement("p");
// je modifie son contenu texte
monParagraphe.textContent = "Youhou";
// j'ajoute le noeud enfant monParagraphe au noeud parent div du DOM
element.appendChild(monParagraphe);

// I get the button
var button = document.querySelector('#button1');
// I add a click listener
button.onclick = onClickListener;

var compteur = 0;

// i declare the listener
function onClickListener(event){
	// i get a paragraph
	let p = document.querySelector("#coordinates");
	// i change the content of the paragraph
	p.textContent = compteur++;
}

//element = document.querySelector("#vousmavezditdedireid");
//element.innerHTML = "<p>Vous pouvez répéter la question ?</p>";

let toutesLesDiv = document.querySelectorAll("div");

