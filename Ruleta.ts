import * as rs from "readline-sync"
import { IJugar } from "./IJugar";

export class Ruleta implements IJugar {
    private nombre: string

    constructor () {
        this.nombre = "Ruleta - Altos y bajos"
    }

    numeroAzar(min: 1, max: 36): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


    apostar() {
        let altoBajo = rs.question(`¿Queres apostar "Altos" o "Bajos"? `).toLowerCase()
        let numero = this.numeroAzar(1,36)

         if (altoBajo === "bajos" || altoBajo === "bajo") {
            if (numero >= 1 && numero <= 19) {
                console.log(`Ganaste, salió el numero ${numero}`)
            } else if (numero >19) {
                console.log(`Perdiste, salió el numero ${numero} y es mayor.`)
            }     
        } else if (altoBajo === "altos" || altoBajo === "alto" ) { 
            if (numero >=20 && numero <=36) {
                console.log(`Ganaste, salió el numero ${numero}`)
            } else if (numero < 19) {
                console.log(`Perdiste, salió el numero ${numero} y es menor.`)
            }
        } else {
            console.log("Apuesta rechazada")
        }
    }
}

