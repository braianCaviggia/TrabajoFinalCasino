import { Ruleta } from "./Ruleta"
import * as rs from "readline-sync"

export class fabricaJuegos {
mostrarJuegos() {
    let listaJuegos = 
                    console.log("Opcion 1: Ruleta") 
                    console.log("Opcion 2: Craps")
                    console.log("Opcion 3: Tragamonedas Basico")
                    console.log("Opcion 4: Tragamonedas Extremo")
}

jugar() {
    let elegir = rs.questionInt("Ingresa el numero del juego que desees: ")
    switch (elegir) {
        case 1 : console.log("¡Ingresaste a la ruleta!") 
                 console.log("------SUERTE------") 
        return new Ruleta()
        // case 2 : return new Dados()
        // case 3 : return new TragamonedasBasico()
        // case 4 : return new TragamonedasExtremo()
        default : return console.log("El juego no existe")
    }
}
}