"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var rs = require("readline-sync");
var fs = require("fs");
var fabricaJuegos_1 = require("./fabricaJuegos");
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.bonoBienvenida = 2000;
        this.nombre = "";
        this.edad = 0;
        this.saldo = 2000;
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
        if (isNaN(Number(this.nombre))) {
            // Esto se ejecuta si Number("texto") da NaN
            // isNaN(NaN) da true y entra bien
        }
        else {
            console.log("No se aceptan numeros");
            this.pedirNombre();
        }
    };
    Usuario.prototype.bienvenida = function () {
        console.log("Bienvenido ".concat(this.nombre, ", tu bono de bienvenida es de $").concat(this.bonoBienvenida, "."));
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
            var salir = false;
            while (!salir) {
                var mostrarMenu = console.log("VOLVIENDO AL MENU...");
                console.log("---MENÚ DE OPCIONES---");
                console.log("1. Mostrar menu de juegos");
                console.log("2. Consultar saldo");
                console.log("3. Salir del casino");
                var preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ");
                switch (preguntarUsuario) {
                    case 1:
                        jugarJuego();
                        break;
                    case 2:
                        this.mostrarSaldo();
                        // jugarJuego()
                        break;
                    case 3:
                        salir = true;
                        var saldoFinal = "Tu saldo final luego de jugar es de ".concat(this.saldo);
                        fs.writeFileSync("saldoFinalUsuario.txt", saldoFinal);
                        console.log("Muchas gracias por jugar ".concat(this.nombre, ". Tu saldo final es de ").concat(this.saldo, " \u00A1Hasta la proxima!"));
                        break;
                    default:
                        console.log("No esta disponible esa opcion. Te volvemos a mostrar las opciones para que vuelvas a elegir.");
                        jugarJuego();
                        break;
                }
            }
        }
        else {
            console.log("Sos menor de edad, no podes ingresar al casino");
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
