"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Usuario_1 = require("./Usuario");
var rs = require("readline-sync");
var fs = require("fs");
var fabricaJuegos_1 = require("./fabricaJuegos");
var Casino = /** @class */ (function () {
    function Casino() {
        this.bonoBienvenida = 2000;
    }
    Casino.prototype.getBono = function () {
        return this.bonoBienvenida;
    };
    Casino.prototype.setBono = function () {
        this.usuario.sumarSaldo(this.bonoBienvenida);
    };
    Casino.prototype.EmpezarAJugarCasino = function () {
        var _this = this;
        var nombre = rs.question("Ingresa tu nombre: ");
        while (!isNaN(Number(nombre))) {
            console.log("No se aceptan números");
            nombre = rs.question("Ingresa tu nombre: ");
        }
        var edad = rs.questionInt("Ingresa tu edad: ");
        if (edad < 18) {
            console.log("Sos menor de edad, no podes ingresar al casino");
        }
        else {
            console.log("Bienvenido ".concat(nombre, ". Tu bono de bienvenida es de $").concat(this.bonoBienvenida, "."));
            this.usuario = new Usuario_1.Usuario();
            this.usuario.depositarMonto();
            this.usuario.setMontoDepositado(this.bonoBienvenida);
            if (this.usuario.getMontoDepositado() <= this.usuario.getSaldo() && this.usuario.getMontoDepositado() > 0) {
            }
            else {
                console.log("Dinero insuficiente en tu cuenta bancaria");
                return;
            }
            var jugarJuego = function () {
                var juegos = new fabricaJuegos_1.fabricaJuegos(_this.usuario); //creo la fabrica de juegos en la variable "juegos"
                juegos.mostrarJuegos(); //muestro los juegos disponibles
                var elegirJuego = juegos.jugar(); //en "jugar" guardo el juego que elija el usuario
                if (elegirJuego) { //si la opcion elegida es correcta...
                    elegirJuego.apostar(); //ejecuta la funcion de apostar
                }
            };
            jugarJuego();
            var salir = false;
            while (!salir) {
                var mostrarMenu = console.log("\n VOLVIENDO AL MENU...");
                console.log("---MENÚ DE OPCIONES---");
                console.log("1. Mostrar menu de juegos");
                console.log("2. Consultar saldo");
                console.log("3. Salir del casino");
                var preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ");
                try {
                    switch (preguntarUsuario) {
                        case 1:
                            jugarJuego();
                            break;
                        case 2:
                            this.usuario.mostrarMontoDepositado();
                            break;
                        case 3:
                            salir = true;
                            var saldoFinal = "Tu saldo final luego de jugar es de $".concat(this.usuario.getMontoDepositado(), ".");
                            fs.writeFileSync("saldoFinalUsuario.txt", saldoFinal);
                            console.log("Muchas gracias por jugar ".concat(nombre, ". Tu saldo final es de $").concat(this.usuario.getMontoDepositado(), " \u00A1Hasta la proxima!"));
                            break;
                        default: throw new Error("No esta disponible esa opcion. Te volvemos a mostrar las opciones para que vuelvas a elegir.");
                    }
                }
                catch (error) {
                    console.log(error.message);
                }
            }
        }
    };
    return Casino;
}());
exports.Casino = Casino;
