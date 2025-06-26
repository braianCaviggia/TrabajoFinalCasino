import * as rs from "readline-sync"

export class Usuario {
    protected nombre: string
    protected saldo:number 
    protected montoDepositado: number

    constructor() {
        this.nombre = ""
        this.saldo = 200000
        this.montoDepositado = this.montoDepositado 
    }
    public depositarMonto() {
        this.montoDepositado = rs.questionInt(`Ingrese el monto que desees depositar (Dinero disponible en tu cuenta bancaria: $${this.saldo}): `)
    }
    

    public sumarMontoDepositado(bono) {
        this.montoDepositado += bono 
    }

    public getMontoDepositado() {
        return this.montoDepositado
    }

    public SetSaldo (nuevoSaldo : number) {
        this.saldo = nuevoSaldo
    }

     public getSaldo() {
        return this.saldo
    }

    public getNombre() {
        return this.nombre
    }

    public mostrarMontoDepositado() {
        console.log(`\n Te quedan disponible ${this.montoDepositado} para usar en tus proximos juegos.`)
    }

    public mostrarSaldo()  {
        console.log(`Tu saldo actual es de $${this.saldo}`)
    }

    public sumarSaldo(montoApuesta : number) {
        this.montoDepositado +=montoApuesta
    }

    public restarSaldo(montoApuesta : number) {
        this.montoDepositado -=montoApuesta
    }

}