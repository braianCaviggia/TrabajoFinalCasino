"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoDados = void 0;
var readlineSync = require("readline-sync");
var BienvenidaJuego_1 = require("./BienvenidaJuego");
var JuegoDados = /** @class */ (function (_super) {
    __extends(JuegoDados, _super);
    function JuegoDados(usuario) {
        var _this = _super.call(this, "Craps") || this;
        _this.apuestaMinima = 500;
        _this.usuario = usuario;
        _this.apuestaMinima = 500;
        return _this;
    }
    JuegoDados.prototype.reglas = function () {
        console.log(" \n==== Reglas del Juego de Dados ====\n- Apuesta m\u00EDnima: $500.\n- Solo pod\u00E9s apostar si ten\u00E9s saldo suficiente.\nOpciones de apuesta:\n- Adivinar un n\u00FAmero (del 2 al 12).\n- Elegir si la suma ser\u00E1 PAR o IMPAR.\nC\u00F3mo se juega:\n- Se lanzan dos dados de 6 caras.\n- Se suma el resultado de ambos.\nGan\u00E1s si:\n- Acert\u00E1s el n\u00FAmero exacto o si adivin\u00E1s si la suma es par/impar.\nSi gan\u00E1s: se suma tu apuesta al saldo.\nSi perd\u00E9s: se descuenta del saldo.\n*Si ingres\u00E1s una opci\u00F3n inv\u00E1lida, se tomar\u00E1 como 'par' por defecto.*\n\u00A1Buena suerte!\n");
    };
    ;
    JuegoDados.prototype.apostar = function () {
        this.mostrarBienvenida();
        this.reglas();
        var apuesta = readlineSync.questionInt("Ingrese el monto de su apuesta (Minimo $500): ");
        if (apuesta < this.apuestaMinima || apuesta > this.usuario.getMontoDepositado()) {
            console.log("Apuesta rechazada.");
            return;
        }
        var tipoApuesta = readlineSync.question("Queres apostar a 'numero' o 'par/impar'? ").toLowerCase();
        var valorApuesta;
        if (tipoApuesta === "numero") {
            valorApuesta = readlineSync.questionInt("Elegi un numero del 2 al 12: ");
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
        console.log("\n Resultado de los dados: ".concat(dado1, " + ").concat(dado2, " = ").concat(suma));
        if (tipoApuesta === "numero") {
            if (valorApuesta === suma) {
                console.log("\n \u00A1Adivinaste la suma exacta!");
                this.usuario.sumarSaldo(apuesta);
            }
            else {
                console.log("\n No acertaste el número. Perdiste la apuesta.");
                this.usuario.restarSaldo(apuesta);
            }
        }
        else {
            var esPar = suma % 2 === 0;
            if ((valorApuesta === "par" && esPar) || (valorApuesta === "impar" && !esPar)) {
                console.log("\u00A1Adivinaste par/impar!");
                this.usuario.sumarSaldo(apuesta);
            }
            else {
                console.log("No acertaste par/impar. Perdiste la apuesta.");
                this.usuario.restarSaldo(apuesta);
            }
        }
        console.log(" Gracias por jugar");
    };
    return JuegoDados;
}(BienvenidaJuego_1.BienvenidaJuego));
exports.JuegoDados = JuegoDados;
