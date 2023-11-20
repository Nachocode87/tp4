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

nombreLista = [];

class Contacto {
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
   

    addContacto() {
        nombreLista.push({telefono: this.telefono, nombre: this.nombre})
        console.log(nombreLista)
    }
    eliminarContacto() {
        this.nombreLista.push({telefono: this.telefono, nombre: this.nombre})
        console.log(this.nombreLista)
    }
    existeContacto(nombre) {
        for (let i = 0; i < nombreLista.length; i++) {
            console.log(nombreLista[i])
            if (nombreLista[i].nombre === nombre) {
                console.log('el contacto existe');
                break;
            } else {
                console.log('el contacto no existe');     
            }
        }
    }
    agendaLlena() {
        if(nombreLista.length === 10){
            console.log('su agenda esta llena');
        } else{
            console.log('su agenda tiene lugares disponible')
        }
    }
    huecoLibre() {
        console.log(`su agenda tiene ${10-nombreLista.length} lugares`)
    }
    listarContactos() {
        for (let i = 0; i < nombreLista.length; i++) {
            
            console.log(nombreLista[i].nombre+'---'+nombreLista[i].telefono);
        }
    }
    
}

let jose = new Contacto(123,'joseI');
jose.addContacto();
let nacho = new Contacto(4123,'nacho');
nacho.addContacto();

console.log(jose);
jose.existeContacto('joseI');
jose.agendaLlena();
jose.huecoLibre();
jose.listarContactos();



