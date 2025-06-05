"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var rs = require("readline-sync");
var fabricaJuegos_1 = require("./fabricaJuegos");
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
    Usuario.prototype.mostrarSaldo = function () {
        console.log("Tu saldo actual es de ".concat(this.saldo));
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
    Usuario.prototype.bienvenida = function () {
        console.log("Bienvenido ".concat(this.nombre, ", tu monto de bienvenida es de $").concat(this.saldo, "."));
    };
    Usuario.prototype.pedirEdad = function () {
        var _this = this;
        this.edad = rs.questionInt("Ingresa tu edad: ");
        if (this.edad >= 18) {
            this.bienvenida();
            var jugarJuego = function () {
                var juegos = new fabricaJuegos_1.fabricaJuegos(_this); //creo la fabrica de juegos en la variable "juegos"
                juegos.mostrarJuegos(); //muestro los juegos disponibles
                var elegirJuego = juegos.jugar(); //en "jugar" guardo el juego que elija el usuario
                if (elegirJuego) { //si la opcion elegida es correcta...
                    elegirJuego.apostar(); //ejecuta la funcion de apostar
                }
            };
            jugarJuego();
        }
        else {
            console.log("Sos menor de edad, las apuestas están prohibidas para ti");
            return;
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
