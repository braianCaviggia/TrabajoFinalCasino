import * as rs from "readline-sync"
import { fabricaJuegos } from "./fabricaJuegos";

export class Usuario {
    private nombre: string 
    private edad: number 
    private saldo:number = 2000

    constructor() {
        this.nombre = ""
        this.edad = 0
        
    }

    public getSaldo() {
        return this.saldo
    }

    public SetSaldo (nuevoSaldo : number) {
        this.saldo = nuevoSaldo
    }

    public sumarSaldo(montoApuesta : number) {
        this.saldo +=montoApuesta
    }

    public restarSaldo(montoApuesta : number) {
        this.saldo -=montoApuesta
    }

    pedirNombre(){
    this.nombre = rs.question("Ingresa tu nombre: ") 
    }

        mostrarSaldo() {
        console.log (`Bienvenido ${this.nombre}, tu monto de bienvenida es de $${this.saldo}.`)
    }


    public pedirEdad() {
            this.edad = rs.questionInt ("Ingresa tu edad: ")
            if (this.edad > 18) {
               this.mostrarSaldo()
               let jugarJuego = () => {
let juegos = new fabricaJuegos() //creo la fabrica de juegos en la variable "juegos"

juegos.mostrarJuegos() //muestro los juegos disponibles

let elegirJuego = juegos.jugar() //en "jugar" guardo el juego que elija el usuario


if (elegirJuego) {  //si la opcion elegida es correcta...
    elegirJuego.apostar() //ejecuta la funcion de apostar
}
}
jugarJuego()
        }  else {
            console.log("Sos menor de edad, las apuestas están prohibidas para ti");
            return;
        }
    }

    // public pedirEdad(){
    // try {
    //     this.edad = rs.questionInt("Ingresa tu edad: ");
    //     if (this.edad < 18) {
    //         throw new Error("Sos menor de edad, las apuestas están prohibidas para ti");
    //     }
    // } catch (error) {
    //     console.log(error.message); 
    // } if( this.edad >= 18){
    //     this.mostrarSaldo()
    // }
    // }  
}