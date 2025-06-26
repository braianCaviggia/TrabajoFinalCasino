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
exports.Tragamonedas = void 0;
var BienvenidaJuego_1 = require("./BienvenidaJuego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(pUsuario, nombreJuego) {
        var _this = _super.call(this, nombreJuego) || this;
        _this.simbolos = ["🍊", "🍒", "🍒", "🍒", "🍒"];
        _this.usuario = pUsuario;
        return _this;
    }
    Tragamonedas.prototype.apostar = function () {
        this.mostrarBienvenida();
    };
    Tragamonedas.prototype.reglas = function () {
    };
    return Tragamonedas;
}(BienvenidaJuego_1.BienvenidaJuego));
exports.Tragamonedas = Tragamonedas;
