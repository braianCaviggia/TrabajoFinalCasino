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
        while (!isNaN(Number(nombre))) { //verifica si ingresa texto o numero
            console.log("No se aceptan números");
            nombre = rs.question("Ingresa tu nombre: ");
        }
        var edad = rs.questionInt("Ingresa tu edad: ");
        if (edad < 18) {
            console.log("Sos menor de edad, no podes ingresar al casino");
        }
        else {
            console.log("Bienvenido ".concat(nombre, ". Tu bono de bienvenida es de $").concat(this.bonoBienvenida, "."));
            this.usuario = new Usuario_1.Usuario(); //creamos el usuario una vez se loguee
            this.usuario.depositarMonto(); //deosita el monto
            this.usuario.setMontoDepositado(this.bonoBienvenida); //se le suma el bono
            if (this.usuario.getMontoDepositado() <= this.usuario.getSaldo() && this.usuario.getMontoDepositado() > 0) {
            }
            else { //verifica que lo depositado sea correcto
                console.log("Dinero insuficiente en tu cuenta bancaria");
                return;
            }
            var jugarJuego = function () {
                var juegos = new fabricaJuegos_1.fabricaJuegos(_this.usuario); //creo la fabrica de juegos en la variable "juegos" pasando por parametros el usuario.
                juegos.mostrarJuegos(); //muestro los juegos disponibles
                var elegirJuego = juegos.jugar(); //en "elegurJuego" guardo el juego que elija el usuario
                if (elegirJuego) { //si la opcion elegida es correcta...
                    elegirJuego.apostar(); //ejecuta la funcion de apostar
                }
            };
            jugarJuego();
            var salir = false;
            while (!salir) { //mientras la opcion sea distinta a salir, muestra las opciones 
                var mostrarMenu = console.log("\n VOLVIENDO AL MENU...");
                console.log("---MENÚ DE OPCIONES---");
                console.log("1. Mostrar menu de juegos");
                console.log("2. Consultar saldo");
                console.log("3. Salir del casino");
                var preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ");
                try {
                    switch (preguntarUsuario) { //en base a un switch mostramos lo que elija el usuario 
                        case 1:
                            jugarJuego(); //muestra el menu de opciones
                            break;
                        case 2:
                            this.usuario.mostrarMontoDepositado(); //muestra el monto disponible del usuario
                            break;
                        case 3:
                            salir = true; //la opcion salir se vuelve true por lo tanto el while finaliza
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
