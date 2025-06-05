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
exports.TragamonedasExtremo = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var rs = require("readline-sync");
var TragamonedasExtremo = /** @class */ (function (_super) {
    __extends(TragamonedasExtremo, _super);
    function TragamonedasExtremo(usuario) {
        var _this = _super.call(this, usuario) || this;
        _this.montoMinimo = 5000;
        return _this;
    }
    TragamonedasExtremo.prototype.apostar = function () {
        var _this = this;
        var montoApuesta = rs.questionInt("Ingrese el monto de apuesta: ");
        if (montoApuesta >= this.montoMinimo) {
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
                    console.log("Ganaste");
                    this.usuario.sumarSaldo(montoApuesta);
                    this.usuario.mostrarSaldo();
                }
                else {
                    console.log("Perdiste");
                    this.usuario.restarSaldo(montoApuesta);
                    this.usuario.mostrarSaldo();
                }
            }
            else {
                console.log("Tu giro no se hizo correctamente.");
            }
        }
        else {
            console.log("El minimo de apuesta es de $2000. Si deseas apostar un valor menor, ingresa al Tragamonedas Basico (Opcion 3)");
        }
    };
    return TragamonedasExtremo;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasExtremo = TragamonedasExtremo;
