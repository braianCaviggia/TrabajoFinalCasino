import { Usuario } from "./Usuario";
import { Ruleta } from "./Ruleta";
import { TragamonedasBasico } from "./TragamonedasBasico";
import { fabricaJuegos } from "./fabricaJuegos";

// let usuario = new Usuario()

// usuario.pedirNombre()
// usuario.pedirEdad()

// let ruleta = new Ruleta()

// ruleta.apostar()

// let jugarJuego = () => {
// let juegos = new fabricaJuegos() //creo la fabrica de juegos en la variable "juegos"

// juegos.mostrarJuegos() //muestro los juegos disponibles

// let jugar = juegos.jugar() //en "jugar" guardo el juego que elija el usuario


// if (jugar) {  //si la opcion elegida es correcta...
//     jugar.apostar() //ejecuta la funcion de apostar
// }
// }

// jugarJuego() 

let tragamonedas = new TragamonedasBasico()

tragamonedas.tirar()