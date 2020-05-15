// MODELE : baniere 
class Baniere {
	constructor(op0, op1, op2) {
		this.deco = document.getElementById('deco');
		this.op0 = op0;
		this.op1 = op1;
		this.op2 = op2;
	}
	fade() {
		if ( this.deco.style.opacity == this.op0 ) {
			this.deco.style.opacity = this.op1;
		} else {
			this.deco.style.opacity = this.op2;
		}		
	}
}