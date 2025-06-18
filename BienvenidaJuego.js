"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BienvenidaJuego = void 0;
var BienvenidaJuego = /** @class */ (function () {
    function BienvenidaJuego(nombreJuego) {
        this.nombreJuego = nombreJuego;
    }
    BienvenidaJuego.prototype.mostrarBienvenida = function () {
        console.log("\n\u00A1Bienvenido/a al juego ".concat(this.nombreJuego, "!"));
    };
    return BienvenidaJuego;
}());
exports.BienvenidaJuego = BienvenidaJuego;
