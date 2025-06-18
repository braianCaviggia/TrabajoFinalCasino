import { IJugar } from "./IJugar"
import { Tragamonedas } from "./Tragamonedas"
import { Usuario } from "./Usuario"
import * as rs from "readline-sync"

export class TragamonedasExtremo extends Tragamonedas implements IJugar{
      protected montoMinimo: number
      constructor(usuario : Usuario) {
            super(usuario, "Tragamonedas Extremo") 
            this.montoMinimo = 1501
      }

      public reglas(): void {
  console.log(`
==== Reglas del Tragamonedas Extremo ====
- Apuesta mínima: $1501
- No hay un máximo definido.
Cómo se juega:
- Ingresás el monto y escribís "girar" para comenzar.
- Se muestran 5 símbolos al azar.
- Si los 5 símbolos coinciden, ganás el triple de tu apuesta.
- Si no, perdés la apuesta.
¡Suerte apostando a lo grande!
`);
}

 apostar() {

    this.reglas()

    let montoApuesta = rs.questionInt("Ingrese el monto de apuesta (Minimo $1501): ")

    if (montoApuesta < this.montoMinimo || montoApuesta > this.usuario.getMontoDepositado()) {
        console.log("Apuesta rechazada")
        return
    }

    let girar = rs.question(`Ingrese "girar" para empezar a jugar: `).toLowerCase()

    if (girar === "girar") {
         let tirarTragamoneda = (simbol:string[]) => {
        return simbol[Math.floor(Math.random() * this.simbolos.length)]; //math floor: redondea numero decimal
                                                                         //random: genera numero del 0 al 1
                                                                         // * length: multiplico el numero por longitud del array
   }
        
let resultado =   [tirarTragamoneda(this.simbolos),  //genero 3 veces un simbolo en un array y lo guardo en resultado
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos)
                    ]
    
    console.log(resultado.join("/"))  //muestro el resultado con join para que quede como string y no como array    

    if (resultado[0] === resultado[1] && resultado[1] === resultado[2] && resultado [2]=== resultado [3] && resultado[3] === resultado[4]) { //comparo los simbolos segun las posiciones 
        console.log("\n Ganaste")
        this.usuario.sumarSaldo(montoApuesta * 3)
        
    } else {
        console.log("\n Perdiste")
        this.usuario.restarSaldo(montoApuesta)
    }
    } else {
        console.log("\n Tu giro no se hizo correctamente.")
    }
} 
}
