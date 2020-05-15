
class Personnage {

    constructor(name, life, experience) {
        this.name = name;
        this.life = life; 
        this.experience = experience;
    }

    blesser(ennemi) {
        // when ennemi is hit, he looses life 
        ennemi.life = ennemi.life - this.experience;
        // when one ennemi is dead 
        if(ennemi.life == 0) {
            return ennemi.name + ' n\'a plus que ' + ennemi.life + ' points de vie. ' + this.name + ' a gagne le combat ! ' + ennemi.name + ' est mort. ' + this.name + ' gagne 10 points d\'experience. Il a donc ' + (this.experience + 10) + ' d\'experience';   
        }
        else {
            return ennemi.name + ' n\'a plus que ' + ennemi.life + ' points de vie';
        }
    }
}

let zorg = new Personnage('Zorg', 200, 40);
let elerond = new Personnage('Elerond', 200, 40);

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





