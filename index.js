"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario_1 = require("./Usuario");
var fabricaJuegos_1 = require("./fabricaJuegos");
var usuario = new Usuario_1.Usuario();
usuario.pedirNombre();
usuario.pedirEdad();
// let ruleta = new Ruleta()
// ruleta.apostar()
var jugarJuego = function () {
    var juegos = new fabricaJuegos_1.fabricaJuegos(); //creo la fabrica de juegos en la variable "juegos"
    juegos.mostrarJuegos(); //muestro los juegos disponibles
    var elegirJuego = juegos.jugar(); //en "jugar" guardo el juego que elija el usuario
    if (elegirJuego) { //si la opcion elegida es correcta...
        elegirJuego.apostar(); //ejecuta la funcion de apostar
    }
};
jugarJuego();
// let tragamonedas = new TragamonedasBasico()
// tragamonedas.jugar()
