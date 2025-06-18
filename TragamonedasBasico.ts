import { IJugar } from "./IJugar"
import { Tragamonedas } from "./Tragamonedas"
import { Usuario } from "./Usuario"
import * as rs from "readline-sync"

export class TragamonedasBasico extends Tragamonedas implements IJugar{
          protected montoMaximo: number
      constructor(usuario: Usuario) {
            super(usuario, "Tragamonedas Extremo") 
            this.montoMaximo = 1500
      }

      public reglas(): void {
        console.log(`
==== Reglas del Tragamonedas Básico ====
- Apuesta mínima: $100
- Apuesta máxima: $1500
Cómo se juega:
- Ingresás el monto y escribís "girar" para comenzar.
- Se muestran 3 símbolos al azar.
- Si los 3 coinciden, ganás.
- Si no, perdés la apuesta.
¡Probá tu suerte!
        `);
    }

 apostar() {

    this.reglas()

    let montoApuesta = rs.questionInt("Ingrese el monto de apuesta(Minimo $100 - Maximo $1500): ")

    if (montoApuesta >= 100 && montoApuesta <= this.montoMaximo && montoApuesta < this.usuario.getMontoDepositado()) {
    let girar = rs.question(`Ingrese "girar" para empezar a jugar: `).toLowerCase()

    if (girar === "girar") {
         let tirarTragamoneda = (simbol:string[]) => {
        return simbol[Math.floor(Math.random() * this.simbolos.length)]; //math floor: redondea numero decimal
                                                                         //random: genera numero del 0 al 1
                                                                         // * length: multiplico el numero por longitud del array
   }
        
let resultado =   [tirarTragamoneda(this.simbolos),  //genero 3 veces un simbolo en un array y lo guardo en resultado
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos)
                    ]
    
    console.log(resultado.join("/"))  //muestro el resultado con join para que quede como string y no como array    

    if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) { //comparo los simbolos segun las posiciones 
        console.log("\n Ganaste")
              this.usuario.sumarSaldo(montoApuesta)
    } else {
        console.log("\n Perdiste")
        this.usuario.restarSaldo(montoApuesta)
    }
    } else {
        console.log("Tu giro no se hizo correctamente.")
    }
} else {
    console.log("Apuesta rechazada")
}
 }
}