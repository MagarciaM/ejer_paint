class Lienzo {
	constructor () {
		this._arrayFiguras = new Array();
	}
	
	add (figura) {

		/*if (!figura.indexOf(Figura)) {
			console.log('El obj debe ser un obj Figura');
		} */
		
		this._arrayFiguras.push(figura);
	}

	remove() {
		this._arrayFiguras.pop();
	}

	write () {
		console.log(this._arrayFiguras);
	}
}

class Figura {
    constructor (colorFondo, colorBorde) {
        this._colorFondo = colorFondo;
        this._colorBorde = colorBorde;
	}
	
	cambiarColorFondo(color) {
		this._colorFondo = color;
	}

	cambiarColorBorde(color) {
		this._colorBorde = color;
	}
}

class Corazon extends Figura {
    
}

class Rayo extends Figura {
    
}

class Estrella extends Figura {
    
}