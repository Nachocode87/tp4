const cuenta = {
    titular: 'alex',
    saldo: 0,
    ingresar: function(params) {
        this.saldo += params;
    },
    extraer: function(params) {
        this.saldo -= params;
    },
    informar: function() {
        console.log(this.titular+' su saldo es '+this.saldo)
    }
}