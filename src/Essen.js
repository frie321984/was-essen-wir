import { writable } from 'svelte/store';

export const auswahl = writable(0);

let meals = [ 
		'Spinat, Kar&shy;toffel&shy;brei & Fisch&shy;stäb&shy;chen'
	, 'Ei&shy;er&shy;ku&shy;chen'
	, 'Brot'
	, 'Kai&shy;ser&shy;schmarrn'
	, 'Pizza'
	, 'Nudeln mit To&shy;ma&shy;ten&shy;sauce'
	, 'Brat&shy;kar&shy;toffeln'
	, 'Ge&shy;mü&shy;se&shy;sup&shy;pe'
	, 'Au&shy;ber&shy;gi&shy;nen ara&shy;bisch'
	, 'La&shy;sa&shy;gne'
	, 'Kä&shy;se&shy;spät&shy;zle'
	, 'Bur&shy;ger'
	, 'Milch&shy;reis'
	, 'Waffeln'
	, 'Ge&shy;mü&shy;se&shy;pfan&shy;ne'
	, 'Thai Aroi'
	, 'In&shy;disch be&shy;stel&shy;len'
	, 'Nu&shy;del&shy;suppe'
	, 'Ser&shy;vietten&shy;knö&shy;del'
	, 'Sa&shy;lat'
	, 'Penne mit Zu&shy;cchi&shy;ni'
	, 'Lin&shy;sen&shy;sup&shy;pe'
	, 'ge&shy;bra&shy;ten&shy;er Reis mit Ge&shy;mü&shy;se'
	, '"Blut&shy;suppe"'
	, 'Pick&shy;nick'
	, 'Ofen&shy;kar&shy;toffel mit Quark'
	, 'Lauch&shy;suppe'
	, 'Rahm&shy;wir&shy;sing'
	, 'Thai Ge&shy;mü&shy;se&shy;pfanne'
	, 'In&shy;dische Ge&shy;mü&shy;se&shy;pfanne'
	, 'Kür&shy;bis&shy;suppe'
	, 'Dö&shy;ner'
	, 'fal&shy;sches Früh&shy;stück'
	, 'Blu&shy;men&shy;kohl&shy;suppe'
	, 'Ge&shy;mü&shy;se&shy;auf&shy;lauf'
	, 'Ofen&shy;ge&shy;mü&shy;se'
	, 'Ros&shy;ma&shy;rin&shy;kar&shy;toffeln'
	, 'Kar&shy;tof&shy;fel&shy;gra&shy;tin'
];

export function zufall() {
	auswahl.update(_ => meals[Math.floor(Math.random() * meals.length)]);
}

export function entferne(schmecktHeuteNicht) {
	meals = meals.filter(meal => meal != schmecktHeuteNicht);
	zufall();
}