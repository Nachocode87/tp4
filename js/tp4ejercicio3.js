class Rectangulo {
    #alto;
    #ancho;
    constructor(altoP,anchoP) {
        this.#alto = altoP;
        this.#ancho = anchoP;
    }
    get alto () {
        return this.#alto;
    }
    set alto (alto) {
        this.#alto = alto;
    }
    get ancho () {
        return this.#ancho;
    }
    set ancho (ancho) {
        this.#ancho = ancho;
    }

    perimetro() {
        return this.alto*2 + this.ancho*2;
    }
    area() {
        return this.alto*this.ancho;
    }
    mostrarPropiedades() {
        console.log(`el alto es ${this.alto} y el ancho ${this.ancho} del rectangulo, su perimetro es ${this.perimetro()} y su area ${this.area()}`)
    }
}


