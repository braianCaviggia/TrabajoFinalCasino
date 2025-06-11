import * as rs from "readline-sync";
import * as fs from 'fs';
import { Usuario } from "./Usuario";
import { IJugar } from "./IJugar";

export class Ruleta implements IJugar{
    private nombre: string
    private usuario : Usuario
    private apuestaMinima : number = 500

    constructor (usuario : Usuario) {
        this.nombre = "Ruleta - Altos y bajos"
        this.usuario = usuario
        this.apuestaMinima = 500

    }

    numeroAzar(min: 1, max: 36): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


    apostar() {

         const montoApuesta = rs.questionInt("Ingrese el monto de su apuesta (Minimo $500): ");
        
        
            if (montoApuesta < this.apuestaMinima) {
              console.log(`La apuesta mínima es ${this.apuestaMinima}. Apuesta no válida.`);
              return;
            }

        let altoBajo = rs.question(`¿Queres apostar "Altos" o "Bajos"? `).toLowerCase()
        let numero = this.numeroAzar(1,36)

         if (altoBajo === "bajos" || altoBajo === "bajo") {
            if (numero >= 1 && numero <= 19) {
                console.log(`Ganaste, salió el numero ${numero}`)
                 this.usuario.sumarSaldo(montoApuesta)
            } else if (numero >19) {
                console.log(`Perdiste, salió el numero ${numero} y es mayor.`)
                    this.usuario.restarSaldo(montoApuesta)
            }     
        } else if (altoBajo === "altos" || altoBajo === "alto" ) { 
            if (numero >=20 && numero <=36) {
                console.log(`Ganaste, salió el numero ${numero}`)
                 this.usuario.sumarSaldo(montoApuesta)
            } else if (numero < 19) {
                console.log(`Perdiste, salió el numero ${numero} y es menor.`)
                    this.usuario.restarSaldo(montoApuesta)
            }
        } else {
            console.log("Apuesta rechazada")
        }
    }
}