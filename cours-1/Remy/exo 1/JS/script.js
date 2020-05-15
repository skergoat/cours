/* 

let test = "hello!";

function hello() {

        alert('hello');
}

let zorg = {

    name: "zorg",
    life: 200,
    experience: 50,

    welcome() {

        return "Bonjour je m'apelle" + this.name;

    },


    blesse() {

        return "Votre ennemi ne possede plus que " + (this.life - this.experience) + "de point de vie";
    }
};

console.log(zorg.name); */

/* --------------------------------------------------------------------------------------------- */

/* class Personnage {

    constructor(name, life) { // Le constructeur permet d'enregistrer les parmamètres de l'objets

        this.name = name;
        this.life = life;
    }


    blesser(ennemi) {

        return 'Vous avez blesse ' + ennemi.name + " il n'a plus que " + ennemi.life + ' points de vie';
    }

}

let zorg = new Personnage('zorg', 250);

let patate = new Personnage('patate', 250);

console.log(zorg.blesser(patate)); */


// Faire affronter 2 personnages; quand un tombe à 0 pts de vies, dire : 1) l'ennemi est tombé à 0, 2) l'attaquant a réporter le combat 3) lui ajouter de l'experience

// A chaque fois que quelq'un attaque dire : "L'attaquant attaque l'ennemi et il ne lui reste plus que pt de vie";

// Tout ds la console


class Personnage {

    constructor(name, life, experience) {
        this.name = name;
        this.life = life;
        this.experience = experience;
    }

    attaque(ennemi) {

        var vie = ennemi.life - this.experience;
        /**
         * je ne sais pas ce que tu as voulu faire ici ? 
         */
        var ennemiLife = ennemi.life -= this.experience;

        /***
         * pas utile. L'exprience peut s'acquerir par le vainqueur une fois le combat remporte 
         */
        this.experience += 15;  // L'attaquant gagne 15 pts d'experience quand il se fait attaquer
        ennemi.experience += 10; // L'enemi gagne 10 pts d'experience quand il se fait attaquer

        /**
         * attention, la consigne etait qu'au moment ou l'un des deux tue l'autre il prend de l'experience. 
         * Donc tu dois indiquer 1) que l'ennemi est mort 2) que le vainqueur prende de l'experience 
         */
        if (ennemiLife <= 0) {
            return ennemi.name + " est mort ! Il a sucombé à l'attaque de " + this.name + " . ";
        } else { 
            return this.name + " a blesse " + ennemi.name + " ! Il ne lui rest plus que " + vie + " points de vies ! Il a désormait " + ennemi.experience + " xp ! Et " + this.name + " a désormais " + this.experience + " xp !";
        }
    }
}

let zorg = new Personnage("zorg", 250, 50);
let MonsieurPatate = new Personnage("MonsieurPatate", 300, 45);

/*  METHODE UNE


console.log(zorg);

console.log(MonsieurPatate);


console.log(zorg.attaque(MonsieurPatate));

console.log(MonsieurPatate.attaque(zorg));

console.log(zorg.attaque(MonsieurPatate));

console.log(MonsieurPatate.attaque(zorg));

console.log(zorg.attaque(MonsieurPatate));

console.log(MonsieurPatate.attaque(zorg));



console.log(zorg.attaque(MonsieurPatate));

 */

 // METHODE DEUX

while (zorg.life > 0 || MonsieurPatate.life > 0) {

    console.log(zorg.attaque(MonsieurPatate));
    console.log(MonsieurPatate.attaque(zorg));
}

/**
 * Super ! Bravo pour ta solution ! C'est top ! 
 */
