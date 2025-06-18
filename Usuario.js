"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var rs = require("readline-sync");
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.nombre = "";
        this.saldo = 200000;
        this.montoDepositado = this.montoDepositado;
    }
    Usuario.prototype.depositarMonto = function () {
        this.montoDepositado = rs.questionInt("Ingrese el monto que desees depositar (Dinero disponible en tu cuenta bancaria: $".concat(this.saldo, "): "));
        // this.montoDepositado + 2000
        // this.saldo -= this.montoDepositado 
    };
    Usuario.prototype.setMontoDepositado = function (bono) {
        this.montoDepositado += bono;
    };
    Usuario.prototype.getMontoDepositado = function () {
        return this.montoDepositado;
    };
    Usuario.prototype.SetSaldo = function (nuevoSaldo) {
        this.saldo = nuevoSaldo;
    };
    Usuario.prototype.getSaldo = function () {
        return this.saldo;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.mostrarMontoDepositado = function () {
        console.log("\n Te quedan disponible ".concat(this.montoDepositado, " para usar en tus proximos juegos."));
    };
    Usuario.prototype.mostrarSaldo = function () {
        console.log("Tu saldo actual es de $".concat(this.saldo));
    };
    Usuario.prototype.sumarSaldo = function (montoApuesta) {
        this.montoDepositado += montoApuesta;
    };
    Usuario.prototype.restarSaldo = function (montoApuesta) {
        this.montoDepositado -= montoApuesta;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
