import * as rs from "readline-sync"
import { IJugar } from "./IJugar";
import { Usuario } from "./Usuario";

export class Ruleta implements IJugar {
    private nombre: string
    private apuestaMinima : number = 500
    private usuario : Usuario

    constructor (usuario : Usuario) {
        this.nombre = "Ruleta - Altos y bajos"
        this.usuario = usuario
    }

    numeroAzar(min: 1, max: 36): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


    apostar() {

        let montoApuesta = rs.questionInt("Ingrese el monto de apuesta: ")
        
            if (montoApuesta >= this.apuestaMinima) {

        let altoBajo = rs.question(`¿Queres apostar "Altos" o "Bajos"? `).toLowerCase()
        let numero = this.numeroAzar(1,36)

         if (altoBajo === "bajos" || altoBajo === "bajo") {
            if (numero >= 1 && numero <= 19) {
                console.log(`Ganaste, salió el numero ${numero}`)
                this.usuario.sumarSaldo(montoApuesta)
                this.usuario.mostrarSaldo()
            } else if (numero >19) {
                console.log(`Perdiste, salió el numero ${numero} y es mayor.`)
                        this.usuario.restarSaldo(montoApuesta)
                        this.usuario.mostrarSaldo()
            }     
        } else if (altoBajo === "altos" || altoBajo === "alto" ) { 
            if (numero >=20 && numero <=36) {
                console.log(`Ganaste, salió el numero ${numero}`)
                this.usuario.sumarSaldo(montoApuesta)
                this.usuario.mostrarSaldo()
            } else if (numero < 19) {
                console.log(`Perdiste, salió el numero ${numero} y es menor.`)
                        this.usuario.restarSaldo(montoApuesta)
                        this.usuario.mostrarSaldo()
            }
        } else {
            console.log("Apuesta rechazada")
        } 
        
    } else {
    console.log("El minimo de apuesta es de $500.")
}
}
}
