class Persona2 {
    #edad;
    #nombre;
    #profesion;
    constructor(edadP,nombreP,profesionP) {
        this.#edad = edadP;
        this.#nombre = nombreP;
        this.#profesion = profesionP;
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
    get profesion () {
        return this.#profesion;
    }
    set profesion (profesion) {
        this.#profesion = profesion;
    }

    saludar() {
        console.log(`hola como estas ${this.nombre}`)
    }
    despedirse() {
        console.log(`chau hasta luego ${this.nombre}`)
    }
    
}

const nacho = new Persona2(123, 'nacho', 'disenio');
const pepe = new Persona2(456, 'pepe', 'programador');
console.log(nacho.saludar())
console.log(nacho.despedirse())