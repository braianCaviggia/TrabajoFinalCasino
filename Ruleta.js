"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
var rs = require("readline-sync");
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.nombre = "Ruleta - Altos y bajos";
    }
    Ruleta.prototype.numeroAzar = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Ruleta.prototype.apostar = function () {
        var altoBajo = rs.question("\u00BFQueres apostar \"Altos\" o \"Bajos\"? ").toLowerCase();
        var numero = this.numeroAzar(1, 36);
        if (altoBajo === "bajos" || altoBajo === "bajo") {
            if (numero >= 1 && numero <= 19) {
                console.log("Ganaste, sali\u00F3 el numero ".concat(numero));
            }
            else if (numero > 19) {
                console.log("Perdiste, sali\u00F3 el numero ".concat(numero, " y es mayor."));
            }
        }
        else if (altoBajo === "altos" || altoBajo === "alto") {
            if (numero >= 20 && numero <= 36) {
                console.log("Ganaste, sali\u00F3 el numero ".concat(numero));
            }
            else if (numero < 19) {
                console.log("Perdiste, sali\u00F3 el numero ".concat(numero, " y es menor."));
            }
        }
        else {
            console.log("Apuesta rechazada");
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
