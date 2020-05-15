
class Personnage {

    constructor(name, life, experience) {
        this.name = name;
        this.life = life; 
        this.experience = experience;
    }

    blesser(ennemi) {

        ennemi.life = ennemi.life - this.experience;

        if(ennemi.life == 0) {
            return ennemi.name + ' n\'a plus que ' + ennemi.life + ' points de vie. ' + this.name + ' a gagne le combat ! ' + ennemi.name + ' est mort. ' + this.name + ' gagne 10 points d\'experience. Il a donc ' + (this.experience + 10) + ' d\'experience';   
        }
        else {
            return ennemi.name + ' n\'a plus que ' + ennemi.life + ' points de vie';
        }
    }
}

let zorg = new Personnage('Zorg', 200, 50);
console.log(zorg.name);

let elerond = new Personnage('Elerond', 200, 50);
console.log(zorg.name);

console.log(zorg.blesser(elerond));
console.log(elerond.blesser(zorg));

console.log(zorg.blesser(elerond));
console.log(elerond.blesser(zorg));

console.log(zorg.blesser(elerond));
console.log(elerond.blesser(zorg));

console.log(zorg.blesser(elerond));
