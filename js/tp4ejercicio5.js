class Persona {
    #edad;
    #dni;
    #nombre;
    #sexo;
    #peso;
    #altura;
    #anio;
    #gen;
    constructor(edadP,dniP,nombreP,sexoP,pesoP,alturaP,anioP,genP) {
        this.#edad = edadP;
        this.#dni = dniP;
        this.#nombre = nombreP;
        this.#sexo = sexoP;
        this.#peso = pesoP;
        this.#altura = alturaP;
        this.#anio = anioP;
    }
    get edad () {
        return this.#edad;
    }
    set edad (edad) {
        this.#edad = edad;
    }

    get dni () {
        return this.#dni;
    }
    set dni (dni) {
        this.#dni = dni;
    }

    get nombre () {
        return this.#nombre;
    }
    set nombre (nombre) {
        this.#nombre = nombre;
    }

    get sexo () {
        return this.#sexo;
    }
    set sexo (sexo) {
        this.#sexo = sexo;
    }
    
    get peso () {
        return this.#peso;
    }
    set peso (peso) {
        this.#peso = peso;
    }
    
    get altura () {
        return this.#altura;
    }
    set altura (altura) {
        this.#altura = altura;
    }
    
    get anio () {
        return this.#anio;
    }
    set anio (anio) {
        this.#anio = anio;
    }
    
    get gen () {
        return this.#gen;
    }
    set gen (gen) {
        this.#gen = gen;
    }

    generacion() {
        if (this.anio < 1949) {
            this.gen = 'silent generation, austeridad';

        } else if (this.anio < 1969) {
            this.gen = 'baby boom, ambicion';         
        
        } else if (this.anio < 1981) {
            this.gen = 'generacion X, obsecion por el exito';         
        }
    }


    
    mostrarGeneracion() {
        console.log(`el nombre del producto es ${this.nombre}, codigo ${this.codigo}, precio ${this.precio}`)
    }
}

// const pera1 = new Producto(112,'$2','pera');
// const manzana1 = new Producto(114,'$3','manzana');
// const banana1 = new Producto(116,'$2.5','banana');

// let productosEnero = [pera1,manzana1,banana1];

// for (let i = 0; i < productosEnero.length; i++) {
   
//     console.log(productosEnero[i].imprimeDatos())
// }