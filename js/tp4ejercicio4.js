class Producto {
    #codigo;
    #precio;
    #nombre;
    constructor(codigoP,precioP,nombreP) {
        this.#codigo = codigoP;
        this.#precio = precioP;
        this.#nombre = nombreP;
    }
    get codigo () {
        return this.#codigo;
    }
    set codigo (codigo) {
        this.#codigo = codigo;
    }
    get precio () {
        return this.#precio;
    }
    set precio (precio) {
        this.#precio = precio;
    }
    get nombre () {
        return this.#nombre;
    }
    set nombre (nombre) {
        this.#nombre = nombre;
    }

    
    
    imprimeDatos() {
        console.log(`el nombre del producto es ${this.nombre}, codigo ${this.codigo}, precio ${this.precio}`)
    }
}

const pera1 = new Producto(112,'$2','pera');
const manzana1 = new Producto(114,'$3','manzana');
const banana1 = new Producto(116,'$2.5','banana');

let productosEnero = [pera1,manzana1,banana1];

for (let i = 0; i < productosEnero.length; i++) {
   
    console.log(productosEnero[i].imprimeDatos())
}