import * as rs from "readline-sync";
import { Usuario } from "./Usuario";
import { IJugar } from "./IJugar";
import { BienvenidaJuego } from "./BienvenidaJuego";

export class Ruleta extends BienvenidaJuego implements IJugar{

    private usuario : Usuario
    private apuestaMinima : number = 500

    constructor (usuario : Usuario) {
        super("Ruleta")

        this.usuario = usuario
        this.apuestaMinima = 500

    }


    public reglas(): void {
    console.log(`
==== Reglas del Juego de Ruleta ====
- Apuesta mínima: $500.
- Solo podés apostar si tenés saldo suficiente.
Opciones de apuesta:
- "Altos": si creés que saldrá un número entre 20 y 36.
- "Bajos": si creés que saldrá un número entre 1 y 19.
Cómo se juega:
- La ruleta genera un número al azar entre 1 y 36.
- Si acertás la categoría (alto o bajo), ganás el monto apostado.
- Si no acertás, lo perdés.
¡Buena suerte!
`);
}

    numeroAzar(min: 1, max: 36): number {
        return Math.floor(Math.random() * (max - min + 1)) + min; //devuelve numero entero al azar
}


    apostar() {
        this.mostrarBienvenida()
        this.reglas()
        

         const montoApuesta = rs.questionInt("Ingrese el monto de su apuesta (Minimo $500): ");
        
        
            if (montoApuesta < this.apuestaMinima || montoApuesta > this.usuario.getMontoDepositado()) {
              console.log(`Apuesta rechazada.`);
              return;
            }

        let altoBajo = rs.question(`¿Queres apostar "Altos" o "Bajos"? `).toLowerCase()
        let numero = this.numeroAzar(1,36)

         if (altoBajo === "bajos" || altoBajo === "bajo") {
            if (numero >= 1 && numero <= 19) {
                console.log(`\n Ganaste, salió el numero ${numero}`)
                 this.usuario.sumarSaldo(montoApuesta)
            } else if (numero >19) {
                console.log(`\n Perdiste, salió el numero ${numero} y es mayor.`)
                    this.usuario.restarSaldo(montoApuesta)
            }     
        } else if (altoBajo === "altos" || altoBajo === "alto" ) { 
            if (numero >=20 && numero <=36) {
                console.log(`\n Ganaste, salió el numero ${numero}`)
                 this.usuario.sumarSaldo(montoApuesta)
            } else if (numero < 19) {
                console.log(`\n Perdiste, salió el numero ${numero} y es menor.`)
                    this.usuario.restarSaldo(montoApuesta)
            }
        } else {
            console.log("Apuesta rechazada")
        }
    }
}