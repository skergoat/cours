// CONTROLLER 
class Init {
    // params 
    constructor() {
        this.baniere = document.getElementById('baniere');
        this.boutonOne = document.getElementById('bouton1');
        this.image = document.querySelectorAll('.images');
        this.btndevis = document.getElementById('section-devis__box');
    }
    // load class
    main() {
        // baniere
        this.baniere.addEventListener('mouseover', function() {
            let baniere = new Baniere('0', '1', '0');
            baniere.fade();	
        });
        this.baniere.addEventListener('mouseout', function() {
            let baniere = new Baniere('1', '0', '0');
            baniere.fade();
        });
        // button 1 
        this.boutonOne.addEventListener('click', function() {
            let button = new Button();
            button.display();
        });
        // images
        // get all images and loop on it  
        document.querySelectorAll('.images').forEach(function(object) {
            // the image clicked 
            let image1 = document.getElementById(object.id);
            // when main image is clicked 
            image1.addEventListener('click', function() { 
                // then guess the second image id
                switch(this.id) {
                    case'imageagrandir':
                    var image2 = document.getElementById('imageagrandir2');
                    break;
                    case'imageagrandir2':
                    var image2 = document.getElementById('imageagrandir');
                    break;
                }
                // then send image 1 and 2 to Image class
                let images = new Image(this, image2);
                // and then execute the fonction 
                images.agrandir();
            });
        });
        // smooth scroll 
        $('a[href^="#"]').click(function(){ 
            var anchor = new Anchor();
            anchor.smoothScrool(this);
        });
        devis 
        this.btndevis.addEventListener('click', function() {
            var devis = new Devis();
            devis.devisGratuit();
        });
    }
}


