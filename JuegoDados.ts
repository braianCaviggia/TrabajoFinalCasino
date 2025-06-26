import * as readlineSync from "readline-sync";
import { Usuario } from "./Usuario";
import { IJugar } from "./IJugar";
import { BienvenidaJuego } from "./BienvenidaJuego";

export class JuegoDados extends BienvenidaJuego implements IJugar   {
  private apuestaMinima: number = 500
  private usuario : Usuario
  constructor(usuario : Usuario) {
    super("Craps")
            this.usuario = usuario
      }

      public reglas(): void {
 console.log( ` 
==== Reglas del Juego de Craps ====
- Apuesta mínima: $500.
- Solo podés apostar si tenés saldo suficiente.
Opciones de apuesta:
- Adivinar un número (del 2 al 12).
- Elegir si la suma será PAR o IMPAR.
Cómo se juega:
- Se lanzan dos dados de 6 caras.
- Se suma el resultado de ambos.
Ganás si:
- Acertás el número exacto o si adivinás si la suma es par/impar.
Si ganás: se suma tu apuesta al saldo.
Si perdés: se descuenta del saldo.
*Si ingresás una opción inválida, se tomará como 'par' por defecto.*
¡Buena suerte!
`) ;
};


  public apostar(): void {
    this.mostrarBienvenida()
    this.reglas()

    const apuesta = readlineSync.questionInt("Ingrese el monto de su apuesta (Minimo $500): ");


    if (apuesta < this.apuestaMinima || apuesta > this.usuario.getMontoDepositado()) {
      console.log(`Apuesta rechazada.`);
      return;
    }

    const tipoApuesta = readlineSync.question("Queres apostar a 'numero' o 'par/impar'? ").toLowerCase();


    let valorApuesta: number | "par" | "impar";
    if (tipoApuesta === "numero") {
      valorApuesta = readlineSync.questionInt("Elegi un numero del 2 al 12: ");
      if(valorApuesta < 2 || valorApuesta > 12) {
        console.log("Numero fuera de rango.")
        return
      }
    } else if (tipoApuesta === "par" || tipoApuesta === "impar") {
      valorApuesta = tipoApuesta;
    } else {
      console.log("Opción no válida. Se asumirá 'par' como apuesta.");
      valorApuesta = "par";
    }

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    console.log(`\n Resultado de los dados: ${dado1} + ${dado2} = ${suma}`);

    if (tipoApuesta === "numero") {
      if (valorApuesta === suma) {
        
        console.log(`\n ¡Adivinaste la suma exacta!`);
         this.usuario.sumarSaldo(apuesta)

      } else {
        console.log("\n No acertaste el número. Perdiste la apuesta.");
        this.usuario.restarSaldo(apuesta)
      }
    } else {
      const esPar = suma % 2 === 0;
      if ((valorApuesta === "par" && esPar) || (valorApuesta === "impar" && !esPar)) {
       
        console.log(`¡Adivinaste par/impar!`);
        this.usuario.sumarSaldo(apuesta)

      } else {
        console.log("No acertaste par/impar. Perdiste la apuesta.");
         this.usuario.restarSaldo(apuesta)
      }
    } 
    console.log(" Gracias por jugar Craps");
  }
}