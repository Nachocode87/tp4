// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
class Contacto{
    #telefono;
    #nombre;
    constructor(telefonoP,nombreP) {
        
        this.#telefono = telefonoP;
        this.#nombre = nombreP;
    }
    
    get telefono () {
        return this.#telefono;
    }
    set telefono (telefono) {
        this.#telefono = telefono;
    }
    get nombre () {
        return this.#nombre;
    }
    set nombre (nombre) {
        this.#nombre = nombre;
    }    
}


class Agenda extends Contacto{
    nombreLista = [];
    constructor() {
        super()
    }
    
    addContacto(obj) {
        if (this.nombreLista.length < 10) {
            this.nombreLista.push(obj)    
            console.log(this.nombreLista)
        } else {
            console.log('su agenda esta llena, elimine elementos')

        }
        
    }
  
    eliminarContacto(nombre) {
        for (let i = 0; i < this.nombreLista.length; i++) {
            
          
            if (this.nombreLista[i].nombre == nombre) {   
                console.log(`el contacto ${this.nombreLista[i].nombre} se elimino`);
                this.nombreLista.splice(i,1)
                break;
            } 

        }
        
    }
    buscarContacto(nombre) {
        for (let i = 0; i < this.nombreLista.length; i++) {
            if (this.nombreLista[i].nombre === nombre) {
                console.log(`el contacto ${nombre} existe`);
            } 
        }
    }
    agendaLlena() {
        if(this.nombreLista.length === 10){
            console.log('su agenda esta llena');
        } else{
            console.log('su agenda tiene lugares disponible')
        }
    }
    
    huecoLibre() {
        console.log(`su agenda tiene ${this.nombreLista.length} lugares`)
    }
    
    listarContactos() {
        for (let i = 0; i < this.nombreLista.length; i++) {
            
            console.log(this.nombreLista[i]);
        }
    }
}

// $ git commit -m 'se logro agregar al array, contar, listar, lugares, buscar




let storage = new Agenda();
let jose = new Contacto(123,'pepe');
storage.addContacto(jose)
let nacho = new Contacto(465,'ignacio');
storage.addContacto(nacho)


storage.agendaLlena()
storage.buscarContacto('ignacio')
storage.buscarContacto('igna')
storage.huecoLibre()
storage.eliminarContacto('ignacio');
storage.listarContactos()
