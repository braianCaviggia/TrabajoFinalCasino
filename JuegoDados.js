"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoDados = void 0;
var readlineSync = require("readline-sync");
var JuegoDados = /** @class */ (function () {
    function JuegoDados(usuario) {
        this.apuestaMinima = 500;
        this.usuario = usuario;
        this.apuestaMinima = 100;
    }
    JuegoDados.prototype.apostar = function () {
        // const nombreJugador = readlineSync.question("Ingrese su nombre: ");
        // console.log(`¡Bienvenido al juego de dados, ${nombreJugador}!`);
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
        // let ganancia = 0;
        if (tipoApuesta === "numero") {
            if (valorApuesta === suma) {
                // ganancia = apuesta * 36;
                console.log("\u00A1Adivinaste la suma exacta!");
                this.usuario.sumarSaldo(apuesta);
                this.usuario.mostrarSaldo();
            }
            else {
                console.log("No acertaste el número. Perdiste la apuesta.");
                this.usuario.restarSaldo(apuesta);
                this.usuario.mostrarSaldo();
            }
        }
        else {
            var esPar = suma % 2 === 0;
            if ((valorApuesta === "par" && esPar) || (valorApuesta === "impar" && !esPar)) {
                // ganancia = apuesta * 2;
                console.log("\u00A1Adivinaste par/impar!");
                this.usuario.sumarSaldo(apuesta);
                this.usuario.mostrarSaldo();
            }
            else {
                console.log("No acertaste par/impar. Perdiste la apuesta.");
                this.usuario.restarSaldo(apuesta);
                this.usuario.mostrarSaldo();
            }
        }
        // if (ganancia > 0) {
        //   console.log(`Ganaste $${ganancia}`);
        // } else {
        //   console.log(`Perdiste $${apuesta}`);
        // }
        console.log("Gracias por jugar");
    };
    return JuegoDados;
}());
exports.JuegoDados = JuegoDados;
