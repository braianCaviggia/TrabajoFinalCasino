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
exports.TragamonedasBasico = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var rs = require("readline-sync");
var TragamonedasBasico = /** @class */ (function (_super) {
    __extends(TragamonedasBasico, _super);
    function TragamonedasBasico(usuario) {
        var _this = _super.call(this, usuario, "Tragamonedas Extremo") || this;
        _this.montoMaximo = 1500;
        return _this;
    }
    TragamonedasBasico.prototype.reglas = function () {
        console.log("\n==== Reglas del Tragamonedas B\u00E1sico ====\n- Apuesta m\u00EDnima: $100\n- Apuesta m\u00E1xima: $1500\nC\u00F3mo se juega:\n- Ingres\u00E1s el monto y escrib\u00EDs \"girar\" para comenzar.\n- Se muestran 3 s\u00EDmbolos al azar.\n- Si los 3 coinciden, gan\u00E1s.\n- Si no, perd\u00E9s la apuesta.\n\u00A1Prob\u00E1 tu suerte!\n        ");
    };
    TragamonedasBasico.prototype.apostar = function () {
        var _this = this;
        this.reglas();
        var montoApuesta = rs.questionInt("Ingrese el monto de apuesta(Minimo $100 - Maximo $1500): ");
        if (montoApuesta >= 100 && montoApuesta <= this.montoMaximo && montoApuesta < this.usuario.getMontoDepositado()) {
            var girar = rs.question("Ingrese \"girar\" para empezar a jugar: ").toLowerCase();
            if (girar === "girar") {
                var tirarTragamoneda = function (simbol) {
                    return simbol[Math.floor(Math.random() * _this.simbolos.length)]; //math floor: redondea numero decimal
                    //random: genera numero del 0 al 1
                    // * length: multiplico el numero por longitud del array
                };
                var resultado = [tirarTragamoneda(this.simbolos), //genero 3 veces un simbolo en un array y lo guardo en resultado
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos)
                ];
                console.log(resultado.join("/")); //muestro el resultado con join para que quede como string y no como array    
                if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) { //comparo los simbolos segun las posiciones 
                    console.log("\n Ganaste");
                    this.usuario.sumarSaldo(montoApuesta);
                }
                else {
                    console.log("\n Perdiste");
                    this.usuario.restarSaldo(montoApuesta);
                }
            }
            else {
                console.log("Tu giro no se hizo correctamente.");
            }
        }
        else {
            console.log("Apuesta rechazada");
        }
    };
    return TragamonedasBasico;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasBasico = TragamonedasBasico;
