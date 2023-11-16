let auto = {
    color: 'azul',
    marca: 'chevrolet',
    modelo: 'cruze',
    estado: false,
    encender: function() {
        if (this.estado) {
            console.log('el auto ya estaba encendido');
        } else {
            this.estado = true;
            console.log('auto encendido');
        }
    },
    apagar: function() {
        if (this.estado) {
            this.estado = false;
            console.log('el auto se apago');
        } else {
            console.log('el auto ya estaba apagado');
        }
    },
    
};