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
            let nombre = rs.question("Ingresa tu nombre: ")
        while (!isNaN(Number(nombre))) { //verifica si ingresa texto o numero
            console.log("No se aceptan números");
            nombre = rs.question("Ingresa tu nombre: ");
        }
          let edad = rs.questionInt ("Ingresa tu edad: ")
            if (edad < 18) { 
              console.log("Sos menor de edad, no podes ingresar al casino")
            } else {
              console.log(`Bienvenido ${nombre}. Tu bono de bienvenida es de $${this.bonoBienvenida}.`)
              this.usuario = new Usuario() //creamos el usuario una vez se loguee
              this.usuario.depositarMonto()  //deosita el monto
              this.usuario.setMontoDepositado(this.bonoBienvenida) //se le suma el bono
              if (this.usuario.getMontoDepositado() <= this.usuario.getSaldo() && this.usuario.getMontoDepositado() > 0){
           } else { //verifica que lo depositado sea correcto
            console.log("Dinero insuficiente en tu cuenta bancaria")
            return
           }  
           
               let jugarJuego = () => {
let juegos = new fabricaJuegos(this.usuario) //creo la fabrica de juegos en la variable "juegos" pasando por parametros el usuario.

juegos.mostrarJuegos() //muestro los juegos disponibles

let elegirJuego = juegos.jugar() //en "elegurJuego" guardo el juego que elija el usuario


if (elegirJuego) {  //si la opcion elegida es correcta...
    elegirJuego.apostar() //ejecuta la funcion de apostar
}
}
jugarJuego()
let salir = false

 while(!salir) {  //mientras la opcion sea distinta a salir, muestra las opciones 
    let mostrarMenu = console.log("\n VOLVIENDO AL MENU...")
                      console.log("---MENÚ DE OPCIONES---")
                      console.log("1. Mostrar menu de juegos")
                      console.log("2. Consultar saldo")
                      console.log("3. Salir del casino") 
                      

    let preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ")
try {
    switch(preguntarUsuario) { //en base a un switch mostramos lo que elija el usuario 
        case 1: jugarJuego() //muestra el menu de opciones
        break
        case 2: this.usuario.mostrarMontoDepositado() //muestra el monto disponible del usuario
        break
        case 3: salir = true //la opcion salir se vuelve true por lo tanto el while finaliza
            let saldoFinal : string = `Tu saldo final luego de jugar es de $${this.usuario.getMontoDepositado()}.`
            fs.writeFileSync(`saldoFinalUsuario.txt`,saldoFinal)
            console.log(`Muchas gracias por jugar ${nombre}. Tu saldo final es de $${this.usuario.getMontoDepositado()} ¡Hasta la proxima!`)
        break

        default :  throw new Error(`No esta disponible esa opcion. Te volvemos a mostrar las opciones para que vuelvas a elegir.`)
    }
       
    } catch(error) {
        console.log(error.message)
        
    } 
} 
}
}}