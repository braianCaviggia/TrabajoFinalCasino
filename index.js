"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabricaJuegos_1 = require("./fabricaJuegos");
// let usuario = new Usuario()
// usuario.pedirNombre()
// usuario.pedirEdad()
// let ruleta = new Ruleta()
// ruleta.apostar()
var jugarJuego = function () {
    var juegos = new fabricaJuegos_1.fabricaJuegos(); //creo la fabrica de juegos en la variable "juegos"
    juegos.mostrarJuegos(); //muestro los juegos disponibles
    var jugar = juegos.jugar(); //en "jugar" guardo el juego que elija el usuario
    if (jugar) { //si la opcion elegida es correcta...
        jugar.apostar(); //ejecuta la funcion de apostar
    }
};
jugarJuego();
