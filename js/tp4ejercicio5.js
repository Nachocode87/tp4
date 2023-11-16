class Persona {
    #edad;
    #dni;
    #nombre;
    #sexo;
    #peso;
    #altura;
    #anio;
    #gen;
    constructor(edadP,dniP,nombreP,sexoP,pesoP,alturaP,anioP) {
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
    
    generacion() {
        if (this.anio < 1949) {
            console.log('silent generation, austeridad');

        } else if (this.anio < 1969) {
            console.log('baby boom, ambicion');         
        
        } else if (this.anio < 1981) {
            console.log('generacion X, obsecion por el exito');         
        
        } else if (this.anio < 1981) {
            console.log('generacion Y, frustacion');         
        
        } else {
            console.log('generacion Z, irreverencia');         
        }
    }
    
    esMayorEdad() {
        if (this.edad < 18) {
            console.log('es menor de edad');

        } else {
            console.log('es mayor de edad');
        }
    }

    dniRandom() {
        this.dni = Math.floor(Math.random()*(99999999 - 10000000)+1);
    }

    mostrarDatos() {
        console.log(edadDdni,nombre,sexo,peso,altura,anio);
    }
}

// const pera1 = new Producto(112,'$2','pera');
// const manzana1 = new Producto(114,'$3','manzana');
// const banana1 = new Producto(116,'$2.5','banana');

// let productosEnero = [pera1,manzana1,banana1];

// for (let i = 0; i < productosEnero.length; i++) {
   
//     console.log(productosEnero[i].imprimeDatos())
// }