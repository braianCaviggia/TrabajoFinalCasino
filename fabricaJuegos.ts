import { Ruleta } from "./Ruleta"
import { Tragamonedas } from "./Tragamonedas"
import * as rs from "readline-sync"
import { TragamonedasBasico } from "./TragamonedasBasico"
import { TragamonedasExtremo } from "./TragamonedasExtremo"
import { JuegoDados } from "./JuegoDados"


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
        case 1 : 
            console.log("¡Ingresaste a la ruleta!") 
            console.log("------¡SUERTE!------") 
            return new Ruleta()

        case 2 : 
            console.log("¡Ingresaste a Craps") 
            console.log("------¡SUERTE!------") 
            return new JuegoDados()

         case 3 :  
            console.log("¡Ingresaste al Tragamonedas Basico!") 
            console.log("------¡SUERTE!------") 
            return new TragamonedasBasico()

        case 4 : 
            console.log("¡Ingresaste al Tragamonedas Extremo!") 
            console.log("------¡SUERTE!------") 
            return new TragamonedasExtremo()

        
        
        default : return console.log(`No existe juego en la opcion ${elegir}`)
    }
}
}