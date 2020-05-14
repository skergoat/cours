
/****** 
 * lesson : 1 
 * title : oop (Oriented Object Programming)
 * author : Stephane Kergoat 
 * 
 * This file contains the lesson's examples 
 * 
 * you should copy and paste examples you need in another file 
 * or comment examples you do not need 
 * because all these examples are put together in the same file 
 * which may create contradictions and bugs  
*/

/*********************************
 * 1. Qu'est qu'un objet ? 
 * 
 * Exemples du cours   
 * *******************************/

/***************
 * A. proprietes de l'objet dans la console  
 * ************/

let personnage = {
    name: 'Zorg',
	type: 'Orc',
    life: 50,
    experience: 250 
};

console.log(personnage.name);
console.log(personnage.type);
console.log(personnage.life); 

/******************
 * B. coup d'épée  
 * ***************/

console.log('Zorg recoit un coup d\'épée');
personnage.life = personnage.life - 10;
console.log(personnage.life);

/****************** 
 * C. blesser
 *  ***************/

let personnage = {
    name: 'Zorg',
    type: 'Orc',
    life: 50,
    experience: 20,

    blesser(ennemi) {
       return this.name + ` Zorg blesse son ennemi. Ce dernier n\'a plus que ` + (ennemi.life - this.experience) + ' points de vie';
    } 
};

let ennemi = {
    name: 'Eleronde',
    type: 'Elfe',
    life: 50,
    experience: 20,
};

console.log(personnage.blesser(ennemi));

/******************
 * D. interet de l'objet   
 * ***************/

 // simple function 
function hello() {
	alert('hello');
}
hello();

// functions in an object 
let presentation = {
	// function 1  
	hello() {
		alert('hello');
	},
	// function 2
	name() {
		alert('my name is Remy !');
	}
};
presentation.hello();
presentation.name();

// function with param 
function hello(name) {
	alert('Hello ' + name);
}
hello('Remy');

// objet with function and param  
let presentation = {
	name: 'Remy', 
 // function 1   
    hello() {
        alert('hello ' + this.name);
    },
 // function 2
    nom() {
    alert('my name is ' + this.name + ' !');
    }
};
presentation.name = 'Stephane';
presentation.hello(); // renvoie 'hello Stephane'
presentation.nom(); // renvoie 'my name is Stephane'

/*********************************
 * 2. Les classes 
 * 
 * Exemples du cours   
 * *******************************/
class Personnage {
    constructor(name, life) {
        this.name = name;
        this.life = life; 
    }

    blesser(ennemi) {
        return "vous avez blesse " + ennemi.name + ". Il n'a plus que " + ennemi.life + " points de vie"; 
    }
}

let zorg = new Personnage('zorg', 250);
let ennemi = new Personnage('elerond', 250);

console.log(zorg.blesser(ennemi));
