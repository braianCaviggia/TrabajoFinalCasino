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
    function TragamonedasBasico() {
        var _this = _super.call(this) || this;
        _this.montoMaximo = 2000;
        return _this;
    }
    TragamonedasBasico.prototype.apostar = function () {
        var _this = this;
        var montoApuesta = rs.questionInt("Ingrese el monto de apuesta: ");
        if (montoApuesta <= this.montoMaximo) {
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
                }
                else {
                    console.log("Perdiste");
                }
            }
            else {
                console.log("Tu giro no se hizo correctamente.");
            }
        }
        else {
            console.log("El maximo de apuesta es de $2000. Si deseas apostar un valor mayor, ingresa al Tragamonedas Extremo (Opcion 4)");
        }
    };
    return TragamonedasBasico;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasBasico = TragamonedasBasico;
