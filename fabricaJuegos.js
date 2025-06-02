"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fabricaJuegos = void 0;
var Ruleta_1 = require("./Ruleta");
var rs = require("readline-sync");
var TragamonedasBasico_1 = require("./TragamonedasBasico");
var TragamonedasExtremo_1 = require("./TragamonedasExtremo");
var fabricaJuegos = /** @class */ (function () {
    function fabricaJuegos() {
    }
    fabricaJuegos.prototype.mostrarJuegos = function () {
        var listaJuegos = console.log("Opcion 1: Ruleta");
        console.log("Opcion 2: Craps");
        console.log("Opcion 3: Tragamonedas Basico");
        console.log("Opcion 4: Tragamonedas Extremo");
    };
    fabricaJuegos.prototype.jugar = function () {
        var elegir = rs.questionInt("Ingresa el numero del juego que desees: ");
        switch (elegir) {
            case 1:
                console.log("¡Ingresaste a la ruleta!");
                console.log("------SUERTE------");
                return new Ruleta_1.Ruleta();
            // case 2 : return new Dados()
            case 3:
                console.log("¡Ingresaste al Tragamonedas Basico!");
                console.log("------SUERTE------");
                return new TragamonedasBasico_1.TragamonedasBasico();
            case 4:
                console.log("¡Ingresaste al Tragamonedas Extremo!");
                console.log("------SUERTE------");
                return new TragamonedasExtremo_1.TragamonedasExtremo();
            default: return console.log("El juego no existe");
        }
    };
    return fabricaJuegos;
}());
exports.fabricaJuegos = fabricaJuegos;
