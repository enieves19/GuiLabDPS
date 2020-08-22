const interface = require ('readline-sync');

class Empleado {
    nombre;
    salario;

    constructor (nombre, salario ) {
        this.nombre = nombre;
        this.salario = salario;
    }

    calcularSalario () {
        let afp = 0.0725
        let isss = 0.03
        let renta = 0.13
        let resultado = this.salario - this.salario*afp - this.salario*isss - this.salario*renta;
        return ''+this.nombre+' tu salario despues de descuentos (afp, iss, renta) es de: $'+resultado;
    }
}

nombre = interface.question("Digite un nombre: ");
salario = interface.question("Digite un salario: ");

empleado = new Empleado(String(nombre), salario);

console.log(empleado.calcularSalario())