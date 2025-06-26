import { BienvenidaJuego } from "./BienvenidaJuego";
import { IJugar } from "./IJugar";
import { Usuario } from "./Usuario";

export class Tragamonedas extends BienvenidaJuego implements IJugar{
       protected simbolos : string[] = ["🍊","🍒","🍒","🍒","🍒"]
       protected usuario : Usuario
       protected montoMinimo : number
       protected montoMaximo : number

       constructor(pUsuario : Usuario, nombreJuego:string) {
              super(nombreJuego)
              this.usuario = pUsuario
       }



       public apostar() {
           this.mostrarBienvenida()
       }

       public reglas(): void {
           
       }

   
}