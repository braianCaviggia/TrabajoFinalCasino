import * as rs from "readline-sync"

export class Usuario {
    private nombre: string 
    private edad: number 
    private saldo:number = 2000

    constructor() {
        this.nombre = ""
        this.edad = 0
    }

    pedirNombre(){
    this.nombre = rs.question("Ingresa tu nombre: ") 
    }

    pedirEdad(){
        this.edad = rs.questionInt("Ingresa tu edad: ") 
         if (this.edad >= 18) {
            console.log("Sos mayor de edad. Podes apostar") 
            this.mostrarSaldo()
            
        } else {
            console.log("Sos menor de edad. No podes apostar") 
        }
    }

    mostrarSaldo() {
        console.log (`Bienvenido ${this.nombre}, tu monto de bienvenida es de $${this.saldo}.`)
    }

    
}