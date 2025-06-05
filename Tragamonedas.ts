import { IJugar } from "./IJugar";
import { Usuario } from "./Usuario";

export class Tragamonedas {
       protected simbolos : string[] = ["🍎","🍊","🍒","🍒","🍒","🍒"]
       protected usuario : Usuario
       protected montoMinimo : number
       protected montoMaximo : number

       constructor(pUsuario : Usuario) {
              this.usuario = pUsuario
       }
   
}