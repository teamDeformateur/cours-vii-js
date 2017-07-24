var personnage = {
	nom : 'Karktor',
	classes : [ 'paladin', 'prètre' ],
	magies : {
		feu : [ 'boule' ],
		glace : [ 'tempête', 'rayon' ]
	}
};

// accès en notation habituelle en supposant qu'un script JS a récupéré les
// données et les a placées dans une variable 'personnage'
personnage.magies['feu'];
personnage.classes[1];

var personnages = [ {
	nom : 'Karktor',
	classes : [ 'paladin', 'prètre' ],
	magies : {
		feu : [ 'boule' ],
		glace : [ 'tempête', 'rayon' ]
	}
}, {
	nom : 'Korgan',
	classes : [ 'voleur', 'assasin' ],
	habilites : {
		pieges : [ 'ours', 'chausse-trapes' ],
		special : [ 'assassinat' ]
	}
} ];
