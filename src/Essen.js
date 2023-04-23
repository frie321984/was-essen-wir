import { writable } from 'svelte/store';

export const menueVorschlag = writable(0);

let meals = [
	{ name: 'Döner', html: 'D&ouml;&shy;ner', zutaten: ['Seitan', 'Fladenbrot', 'Zwiebeln', 'Tomaten', 'Salat', 'Gewürzgurken', 'Majo', 'Ketchup', 'Joghurt'] }
	, { name: 'falsches Frühstück', html: 'fal&shy;sches Früh&shy;stück' }
	, { name: 'Rosmarinkartoffeln', html: 'Ros&shy;ma&shy;rin&shy;kar&shy;toffeln', zutaten: ['Kartoffeln', 'Rosmarin'] }
	, { name: 'Spinat, Kartoffelbrei & Fischstäbchen', html: 'Spinat, Kar&shy;toffel&shy;brei & Fisch&shy;stäb&shy;chen', zutaten: ['Spinat', 'Eier', 'Kartoffelbrei', 'Milch', 'Zwiebeln']}
	, { name: 'Eierkuchen', html: 'Ei&shy;er&shy;ku&shy;chen'}
	, { html: 'Brot'}
	, { name: 'Kaiserschmarrn', html: 'Kai&shy;ser&shy;schmarrn'}
	, { name: 'Pizza'}
	, { name: 'Nudeln mit Tomatensauce', html: 'Nudeln mit To&shy;ma&shy;ten&shy;sauce'}
	, { html: 'Brat&shy;kar&shy;toffeln'}
	, { html: 'Ge&shy;mü&shy;se&shy;sup&shy;pe'}
	, { html: 'Au&shy;ber&shy;gi&shy;nen ara&shy;bisch'}
	, { html: 'La&shy;sa&shy;gne'}
	, { html: 'Kä&shy;se&shy;spät&shy;zle'}
	, { html: 'Bur&shy;ger'}
	, { html: 'Milch&shy;reis'}
	, { name: 'Waffeln'}
	, { html: 'Ge&shy;mü&shy;se&shy;pfan&shy;ne'}
	, { name: 'Thai Aroi'}
	, { html: 'In&shy;disch be&shy;stel&shy;len'}
	, { html: 'Nu&shy;del&shy;suppe'}
	, { html: 'Ser&shy;vietten&shy;knö&shy;del'}
	, { name: 'Salat'}
	, { html: 'Penne mit Zu&shy;cchi&shy;ni'}
	, { name: 'Linsensuppe', html: 'Lin&shy;sen&shy;sup&shy;pe'}
	, { html: 'ge&shy;bra&shy;ten&shy;er Reis mit Ge&shy;mü&shy;se'}
	, { html: '"Blut&shy;suppe"'}
	, { html: 'Pick&shy;nick'}
	, { html: 'Ofen&shy;kar&shy;toffel mit Quark'}
	, { html: 'Lauch&shy;suppe'}
	, { html: 'Rahm&shy;wir&shy;sing'}
	, { html: 'Thai Ge&shy;mü&shy;se&shy;pfanne'}
	, { html: 'In&shy;dische Ge&shy;mü&shy;se&shy;pfanne'}
	, { name: 'Kürbissuppe', html: 'Kür&shy;bis&shy;suppe'}
	, { html: 'Blu&shy;men&shy;kohl&shy;suppe'}
	, { html: 'Ge&shy;mü&shy;se&shy;auf&shy;lauf'}
	, { html: 'Ofen&shy;ge&shy;mü&shy;se'}
	, { html: 'Kar&shy;tof&shy;fel&shy;gra&shy;tin'}
	, { name: 'Spinatlasagne', html: 'Spinatlasagne'}
	, { name: 'Chili con Carne', html: 'Chili con Carne'}
	, { name: 'Schnitzel mit Pommes', html: 'Schnitzel mit Pommes'}
	, { name: 'Ratatouille', html: 'Ratatouille'}
	, { name: 'Kartoffelpuffer mit Apfelmus', html: 'Kartoffelpuffer mit Apfelmus'}
	, { name: 'Tacos', html: 'Tacos'}
	, { name: 'Burger', html: 'Burger'}
];

export const same = (x, y) => x.html === y.html && x.name === y.name

export const mealList = meals;

// meals = meals.slice(0,2);

export const zufall = array => array[Math.floor(Math.random() * array.length)]

export function zufallsEssen() {
	return zufall(meals)
}

export function waehleZufaelligesMenue() {
	menueVorschlag.update(_ => zufallsEssen());
}

let aktuellerVorschlag;
menueVorschlag.subscribe(v => aktuellerVorschlag = v);

export function ablehnenUndNeuVorschlagen() {
	meals = meals.filter(meal => meal != aktuellerVorschlag);
	waehleZufaelligesMenue();
}