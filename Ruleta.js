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
exports.Ruleta = void 0;
var rs = require("readline-sync");
var BienvenidaJuego_1 = require("./BienvenidaJuego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(usuario) {
        var _this = _super.call(this, "Ruleta") || this;
        _this.apuestaMinima = 500;
        _this.usuario = usuario;
        _this.apuestaMinima = 500;
        return _this;
    }
    Ruleta.prototype.reglas = function () {
        console.log("\n==== Reglas del Juego de Ruleta ====\n- Apuesta m\u00EDnima: $500.\n- Solo pod\u00E9s apostar si ten\u00E9s saldo suficiente.\nOpciones de apuesta:\n- \"Altos\": si cre\u00E9s que saldr\u00E1 un n\u00FAmero entre 20 y 36.\n- \"Bajos\": si cre\u00E9s que saldr\u00E1 un n\u00FAmero entre 1 y 19.\nC\u00F3mo se juega:\n- La ruleta genera un n\u00FAmero al azar entre 1 y 36.\n- Si acert\u00E1s la categor\u00EDa (alto o bajo), gan\u00E1s el monto apostado.\n- Si no acert\u00E1s, lo perd\u00E9s.\n\u00A1Buena suerte!\n");
    };
    Ruleta.prototype.numeroAzar = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Ruleta.prototype.apostar = function () {
        this.reglas();
        var montoApuesta = rs.questionInt("Ingrese el monto de su apuesta (Minimo $500): ");
        if (montoApuesta < this.apuestaMinima || montoApuesta > this.usuario.getMontoDepositado()) {
            console.log("Apuesta rechazada.");
            return;
        }
        var altoBajo = rs.question("\u00BFQueres apostar \"Altos\" o \"Bajos\"? ").toLowerCase();
        var numero = this.numeroAzar(1, 36);
        if (altoBajo === "bajos" || altoBajo === "bajo") {
            if (numero >= 1 && numero <= 19) {
                console.log("\n Ganaste, sali\u00F3 el numero ".concat(numero));
                this.usuario.sumarSaldo(montoApuesta);
            }
            else if (numero > 19) {
                console.log("\n Perdiste, sali\u00F3 el numero ".concat(numero, " y es mayor."));
                this.usuario.restarSaldo(montoApuesta);
            }
        }
        else if (altoBajo === "altos" || altoBajo === "alto") {
            if (numero >= 20 && numero <= 36) {
                console.log("\n Ganaste, sali\u00F3 el numero ".concat(numero));
                this.usuario.sumarSaldo(montoApuesta);
            }
            else if (numero < 19) {
                console.log("\n Perdiste, sali\u00F3 el numero ".concat(numero, " y es menor."));
                this.usuario.restarSaldo(montoApuesta);
            }
        }
        else {
            console.log("Apuesta rechazada");
        }
    };
    return Ruleta;
}(BienvenidaJuego_1.BienvenidaJuego));
exports.Ruleta = Ruleta;
