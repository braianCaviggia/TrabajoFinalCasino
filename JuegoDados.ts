import * as readlineSync from "readline-sync";
import * as fs from 'fs';
import { Usuario } from "./Usuario";
import { IJugar } from "./IJugar";

export class JuegoDados implements IJugar  {
  private apuestaMinima: number = 500
  private usuario : Usuario
  constructor(usuario : Usuario) {
            this.usuario = usuario
            this.apuestaMinima = 100
      }


  public apostar(): void {
    // const nombreJugador = readlineSync.question("Ingrese su nombre: ");
    // console.log(`¡Bienvenido al juego de dados, ${nombreJugador}!`);


       //CREAR TXT:
    // let saldo : number= 100
    // let mostrarSaldo : string = `el saldo final es ${saldo}`

    // fs.writeFileSync(`saldo.txt`, mostrarSaldo)

    const apuesta = readlineSync.questionInt("Ingrese el monto de su apuesta: ");


    if (apuesta < this.apuestaMinima) {
      console.log(`La apuesta mínima es ${this.apuestaMinima}. Apuesta no válida.`);
      return;
    }

    const tipoApuesta = readlineSync.question("Queres apostar a 'numero' o 'par/impar'? ").toLowerCase();


    let valorApuesta: number | "par" | "impar";
    if (tipoApuesta === "numero") {
      valorApuesta = readlineSync.questionInt("Elegí un número del 2 al 12: ");
    } else if (tipoApuesta === "par" || tipoApuesta === "impar") {
      valorApuesta = tipoApuesta;
    } else {
      console.log("Opción no válida. Se asumirá 'par' como apuesta.");
      valorApuesta = "par";
    }

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    console.log(`Resultado de los dados: ${dado1} + ${dado2} = ${suma}`);

    if (tipoApuesta === "numero") {
      if (valorApuesta === suma) {
        // ganancia = apuesta * 36;
        console.log(`¡Adivinaste la suma exacta!`);
         this.usuario.sumarSaldo(apuesta)
         this.usuario.mostrarSaldo()

      } else {
        console.log("No acertaste el número. Perdiste la apuesta.");
        this.usuario.restarSaldo(apuesta)
        this.usuario.mostrarSaldo()
      }
    } else {
      const esPar = suma % 2 === 0;
      if ((valorApuesta === "par" && esPar) || (valorApuesta === "impar" && !esPar)) {
        // ganancia = apuesta * 2;
        console.log(`¡Adivinaste par/impar!`);
        this.usuario.sumarSaldo(apuesta)
        this.usuario.mostrarSaldo()

      } else {
        console.log("No acertaste par/impar. Perdiste la apuesta.");
         this.usuario.restarSaldo(apuesta)
        this.usuario.mostrarSaldo()
      }
    } 

    let saldoTotal : number = this.usuario.getSaldo()
    let saldoFinal : string = `Tu saldo final luego de jugar en los Craps es de ${saldoTotal}`

    fs.writeFileSync(`saldoFinalCraps.txt`,saldoFinal)

    // if (ganancia > 0) {
    //   console.log(`Ganaste $${ganancia}`);
    // } else {
    //   console.log(`Perdiste $${apuesta}`);
    // }

    console.log("Gracias por jugar");
  }
}