"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoDados = void 0;
var readlineSync = require("readline-sync");
var JuegoDados = /** @class */ (function () {
    function JuegoDados() {
        this.apuestaMinima = 100;
    }
    JuegoDados.prototype.apostar = function () {
        var nombreJugador = readlineSync.question("Ingrese su nombre: ");
        console.log("\u00A1Bienvenido al juego de dados, ".concat(nombreJugador, "!"));
        var apuesta = readlineSync.questionInt("Ingrese el monto de su apuesta: ");
        if (apuesta < this.apuestaMinima) {
            console.log("La apuesta m\u00EDnima es ".concat(this.apuestaMinima, ". Apuesta no v\u00E1lida."));
            return;
        }
        var tipoApuesta = readlineSync.question("Queres apostar a 'numero' o 'par/impar'? ").toLowerCase();
        var valorApuesta;
        if (tipoApuesta === "numero") {
            valorApuesta = readlineSync.questionInt("Elegí un número del 2 al 12: ");
        }
        else if (tipoApuesta === "par" || tipoApuesta === "impar") {
            valorApuesta = tipoApuesta;
        }
        else {
            console.log("Opción no válida. Se asumirá 'par' como apuesta.");
            valorApuesta = "par";
        }
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        var suma = dado1 + dado2;
        console.log("Resultado de los dados: ".concat(dado1, " + ").concat(dado2, " = ").concat(suma));
        var ganancia = 0;
        if (tipoApuesta === "numero") {
            if (valorApuesta === suma) {
                ganancia = apuesta * 36;
                console.log("\u00A1Adivinaste la suma exacta! Gan\u00E1s $".concat(ganancia));
            }
            else {
                console.log("No acertaste el número. Perdiste la apuesta.");
            }
        }
        else {
            var esPar = suma % 2 === 0;
            if ((valorApuesta === "par" && esPar) || (valorApuesta === "impar" && !esPar)) {
                ganancia = apuesta * 2;
                console.log("\u00A1Adivinaste par/impar! Gan\u00E1s $".concat(ganancia));
            }
            else {
                console.log("No acertaste par/impar. Perdiste la apuesta.");
            }
        }
        if (ganancia > 0) {
            console.log("Ganaste $".concat(ganancia));
        }
        else {
            console.log("Perdiste $".concat(apuesta));
        }
        console.log("Gracias por jugar");
    };
    return JuegoDados;
}());
exports.JuegoDados = JuegoDados;
