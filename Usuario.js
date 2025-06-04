"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var rs = require("readline-sync");
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.saldo = 2000;
        this.nombre = "";
        this.edad = 0;
    }
    Usuario.prototype.getSaldo = function () {
        return this.saldo;
    };
    Usuario.prototype.SetSaldo = function (nuevoSaldo) {
        this.saldo = nuevoSaldo;
    };
    Usuario.prototype.sumarSaldo = function (montoApuesta) {
        this.saldo += montoApuesta;
    };
    Usuario.prototype.restarSaldo = function (montoApuesta) {
        this.saldo -= montoApuesta;
    };
    Usuario.prototype.pedirNombre = function () {
        this.nombre = rs.question("Ingresa tu nombre: ");
    };
    Usuario.prototype.pedirEdad = function () {
        try {
            this.edad = rs.questionInt("Ingresa tu edad: ");
            if (this.edad > 18) {
                this.mostrarSaldo();
                throw new Error("Sos menor de edad, las apuestas están prohibidas para ti");
                return;
            }
        }
        catch (error) {
            console.log(error.message);
        }
        if (this.edad >= 18) {
            this.mostrarSaldo();
        }
    };
    Usuario.prototype.mostrarSaldo = function () {
        console.log("Bienvenido ".concat(this.nombre, ", tu monto de bienvenida es de $").concat(this.saldo, "."));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
