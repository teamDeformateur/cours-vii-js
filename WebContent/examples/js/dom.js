"use strict"
// Je récupère la première div que je trouve dans le DOM
let element = document.querySelector("div");
// je crée un noeud paragraphe
let monParagraphe = document.createElement("p");
// je modifie son contenu texte
monParagraphe.textContent = "Youhou";
// j'ajoute le noeud enfant monParagraphe au noeud parent div du DOM
element.appendChild(monParagraphe);


element = document.querySelector("#vousmavezditdedireid");
element.innerHTML = "<p>Vous pouvez répéter la question ?</p>";

let toutesLesDiv = document.querySelectorAll("div");

