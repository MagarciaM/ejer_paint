class Lienzo {
	constructor() {
		this._arrayFiguras = new Array();
	}

	add(figura) {
		this._arrayFiguras.push(figura);
	}

	remove(figura) {
		var element = this._arrayFiguras.indexOf(figura);
		if (element > -1) {
			this._arrayFiguras.splice(element, 1);
		}
	}

	write(element) {
		for (var i = 0; i < this._arrayFiguras.length; i++) {
			element(this._arrayFiguras[i].write(element));
		}

	}
}

class Figura {
	constructor(colorFondo, colorBorde) {
		this._colorFondo = colorFondo;
		this._colorBorde = colorBorde;
	}

	cambiarColorFondo(color) {
		this._colorFondo = color;
	}

	cambiarColorBorde(color) {
		this._colorBorde = color;
	}

	write(element, string) {
		element('Figura ' + string + ', Color de Fondo = ' + this._colorFondo + ', Color de Borde = ' + this._colorBorde);
	}
}

class Corazon extends Figura {
	write(element) {
		super.write(element, 'Corazón');
	}
}

class Rayo extends Figura {
	write(element) {
		super.write(element, 'Rayo');
	}
}

class Estrella extends Figura {
	write(element) {
		super.write(element, 'Estrella');
	}
}