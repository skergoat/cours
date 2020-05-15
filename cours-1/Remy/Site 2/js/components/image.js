// MODELE : image
class Image {
    // params
    constructor(imagea, imageb) {
        this.imagea = imagea;
        this.imageb = imageb;
    }
    // agrandir 
    agrandir() {
        // remove class 'plus' from former element 
        this.imageb.classList.remove("plus");
        // give picture different size 
        if(!this.imagea.classList.contains("plus")) {
            this.imagea.style.width = "100%";
            this.imageb.style.width = "50%";
            this.imagea.classList.add("plus");
        }
        // give pictures the same size
        else {
            this.imagea.style.width = "100%";
            this.imageb.style.width = "100%";
            this.imagea.classList.remove("plus");
        }  
    }
}