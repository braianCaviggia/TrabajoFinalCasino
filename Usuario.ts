import * as rs from "readline-sync"

export class Usuario {
    private nombre: string 
    private edad: number 
    private saldo:number = 2000

    constructor() {
        this.nombre = ""
        this.edad = 0

    }

    public getSaldo(pSaldo : number) {
        return this.saldo
    }

    public SetSaldo (nuevoSaldo : number) {
        this.saldo = nuevoSaldo
    }

    pedirNombre(){
    this.nombre = rs.question("Ingresa tu nombre: ") 
    }

    public pedirEdad(){
    try {
        this.edad = rs.questionInt("Ingresa tu edad: ");
        if (this.edad < 18) {
            throw new Error("Sos menor de edad, las apuestas están prohibidas para ti");
        }
    } catch (error) {
        console.log(error.message); 
    } if( this.edad >= 18){
        this.mostrarSaldo()
    }
    }
    mostrarSaldo() {
        console.log (`Bienvenido ${this.nombre}, tu monto de bienvenida es de $${this.saldo}.`)
    }
    
  
}