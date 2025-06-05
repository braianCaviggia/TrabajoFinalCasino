import { IJugar } from "./IJugar"
import { Tragamonedas } from "./Tragamonedas"
import { Usuario } from "./Usuario"
import * as rs from "readline-sync"

export class TragamonedasBasico extends Tragamonedas implements IJugar{
          protected montoMaximo: number
      constructor() {
            super() 
            this.montoMaximo = 5000
      }

 apostar() {

    let montoApuesta = rs.questionInt("Ingrese el monto de apuesta: ")

    if (montoApuesta <= this.montoMaximo) {
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
        console.log("Ganaste")
    } else {
        console.log("Perdiste")
    }
    } else {
        console.log("Tu giro no se hizo correctamente.")
    }
} else {
    console.log("El maximo de apuesta es de $2000. Si deseas apostar un valor mayor, ingresa al Tragamonedas Extremo (Opcion 4)")
}
 }
}