class Animal {
    #edad;
    #nombre;
    constructor(edadP,nombreP) {
        this.#edad = edadP;
        this.#nombre = nombreP;
    }


    get edad () {
        return this.#edad;
    }
    set edad (edad) {
        this.#edad = edad;
    }
    get nombre () {
        return this.#nombre;
    }
    set nombre (nombre) {
        this.#nombre = nombre;
    }
    
    emitirSonido() {
        console.log(`el animal ${this.nombre} hace sonidos`);
    }
    
    
}

class Perro extends Animal{
    constructor(edadP,nombreP,sonidoP) {
        super(edadP,nombreP)
        this.sonido = sonidoP;
    }

    emitirSonidoPropio() {
        console.log(`el animal ${this.nombre}, rasa perro hace ${this.sonido}`);
    }
}
class Gato extends Animal{
    constructor(edadP,nombreP,sonidoP) {
        super(edadP,nombreP)
        this.sonido = sonidoP;
    }

    emitirSonidoPropio() {
        console.log(`el animal ${this.nombre}, rasa gato hace ${this.sonido}`);
    }
}


const tobi = new Perro(2,'tobi','guau guau');
tobi.emitirSonidoPropio();
const tuc = new Gato(9,'tuc','miau miau');
tuc.emitirSonidoPropio();