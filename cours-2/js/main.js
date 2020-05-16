/**
 * extension de classe (new way)
 */

// parent 
class Personnage {
    // parent params 
    constructor(name, life, experience) {
        this.name = name;
        this.life = life; 
        this.experience = experience;
    }

    // perso introduce himself    
    hello() {
        console.log('hello, je suis un ' + this.type + ' ! Je m\'appelle ' +  this.name + ' Je possede ' + this.life + ' pts de vie et ' + this.experience + ' pts d\'experience.');
    }

    // parent method to hit 
    blesser(ennemi) {
        // when ennemi is hit, he looses life 
        ennemi.life = ennemi.life - this.experience;
        // when one ennemi is dead 
        if(ennemi.life == 0) {
            return ennemi.name + ' n\'a plus que ' + ennemi.life + ' points de vie. ' + this.name + ' a gagne le combat ! ' + ennemi.name + ' est mort. ' + this.name + ' gagne 10 points d\'experience. Il a donc ' + (this.experience + 10) + ' d\'experience';   
        }
        else {
            return '-' + this.experience + ' pts de vie ! ' + ennemi.name + ' n\'a plus que ' + ennemi.life + ' points de vie';
        }
    }
}

// child 1 
class Orc extends Personnage {
    // colere 
    constructor(name, life, experience) {
        // calling parent constructor
        super(name, life, experience);
        this.type = 'orc';
        this.hate = true;
    }

    colere() {  
        // if colere is true 
        if(this.hate == true) {
            // then zorg gets stronger 
            this.experience = this.experience + 10; 
            console.log('Zorg est en colere ! Il obtient 10 points d\'experience supplementaires.');
            // call method in object
            this.hello();
        }  
        else {
            console.log('vous avez deja utilisé la colère de l\'orc !');
        }
        this.hate = false;      
    }
}

// child 2 
class Elfe extends Personnage {
    // magie 
    constructor(name, life, experience) {
        // calling parent constructor
        super(name, life, experience);
        this.type = 'elfe';
        this.magic = true;
    }

    guerison() {    
        // if magie is true      
        if(this.magic == true) {
            // then elerond gets more life  
            this.life = this.life + 50;
            console.log('Elerond a une potion de guerison. Il obtient 50 points de vie supplementaires.');
            // call method in object
            this.hello();
        }  
        else {
            console.log('vous avez déjà utilisé le sort de guérison');
        }
        this.magic = false;
    }
}

// calling parent methods  
let zorg = new Orc('Zorg', 200, 10);
zorg.hello();

let elerond = new Elfe('Elerond', 200, 10);
elerond.hello();

console.log(zorg.blesser(elerond));
console.log(elerond.blesser(zorg));

// calling child methods 
elerond.guerison();
zorg.colere();

console.log(zorg.blesser(elerond));
console.log(elerond.blesser(zorg));

console.log(zorg.blesser(elerond));
console.log(elerond.blesser(zorg));

// calling child methods again
elerond.guerison();
zorg.colere();

// as long as elerond.life is bigger than zorg.experience 
while(elerond.life > zorg.experience) {
    // make them fight 
    console.log(zorg.blesser(elerond));
    console.log(elerond.blesser(zorg));  
    // if experience of persos are == to their ennemi xp, then : 
    if(elerond.life == zorg.experience || zorg.life == elerond.experience) {
        // the first hits the second 
        console.log(zorg.blesser(elerond));
        // if the second is still alive, then he hits the first 
        if(elerond.life != 0) {
           console.log(elerond.blesser(zorg)); 
        }
    }
}









