// MODLE : buttons 
class Button {
    // params 
    constructor() {
        this.blockOne = document.getElementById('block1');
        this.blockStyle = this.blockOne.style;
    }
    // display div 
    display() {
        if (this.blockStyle.display == "block" )  {
            this.blockStyle.display = "none";	
        } else {
            this.blockStyle.display = "block";
        }
    }
}

