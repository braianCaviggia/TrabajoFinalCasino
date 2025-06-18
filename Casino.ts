import { Usuario } from "./Usuario";
import * as rs from "readline-sync"
import * as fs from 'fs';
import { fabricaJuegos } from "./fabricaJuegos";
import { error } from "console";

export class Casino {

     private bonoBienvenida : number = 2000
     private usuario : Usuario 
    

     public getBono() {
        return this.bonoBienvenida
    }

    public setBono() {
        this.usuario.sumarSaldo(this.bonoBienvenida)
    }

    public EmpezarAJugarCasino() {
    try{
            let nombre = rs.question("Ingresa tu nombre: ")
        while (!isNaN(Number(nombre))) {
            console.log("No se aceptan números");
            nombre = rs.question("Ingresa tu nombre: ");
        }
          let edad = rs.questionInt ("Ingresa tu edad: ")
            if (edad >= 18) {
              console.log(`Bienvenido ${nombre}. Tu bono de bienvenida es de $${this.bonoBienvenida}.`)
              this.usuario = new Usuario()
              this.usuario.depositarMonto() 
              this.usuario.setMontoDepositado(this.bonoBienvenida)
              if (this.usuario.getMontoDepositado() <= this.usuario.getSaldo()){
           } else {
            console.log("Dinero insuficiente en tu cuenta bancaria")
            return
           }
           
               let jugarJuego = () => {
let juegos = new fabricaJuegos(this.usuario) //creo la fabrica de juegos en la variable "juegos"

juegos.mostrarJuegos() //muestro los juegos disponibles

let elegirJuego = juegos.jugar() //en "jugar" guardo el juego que elija el usuario


if (elegirJuego) {  //si la opcion elegida es correcta...
    elegirJuego.apostar() //ejecuta la funcion de apostar
}
}
jugarJuego()
let salir = false

 while(!salir) {
    let mostrarMenu = console.log("\n VOLVIENDO AL MENU...")
                      console.log("---MENÚ DE OPCIONES---")
                      console.log("1. Mostrar menu de juegos")
                      console.log("2. Consultar saldo")
                      console.log("3. Salir del casino") 
                      

    let preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ")

    switch(preguntarUsuario) {
        case 1: jugarJuego()
        break
        case 2: this.usuario.mostrarMontoDepositado()
                break
        case 3: salir = true
            let saldoFinal : string = `Tu saldo final luego de jugar es de $${this.usuario.getMontoDepositado()}.`
            fs.writeFileSync(`saldoFinalUsuario.txt`,saldoFinal)
            console.log(`Muchas gracias por jugar ${nombre}. Tu saldo final es de $${this.usuario.getMontoDepositado()} ¡Hasta la proxima!`)
        break
        default : console.log(`No esta disponible esa opcion. Te volvemos a mostrar las opciones para que vuelvas a elegir.`)
        jugarJuego()
        break
    }
    }
} else {
    console.log("Sos menor de edad, no podes ingresar al casino")
}
} catch(error:any) {
    console.log("Ocurrio un error al ingresar al casino")
}
    }
}