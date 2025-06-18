import { IJugar } from "./IJugar";
import { JuegoDados } from "./JuegoDados";
import { TragamonedasBasico } from "./TragamonedasBasico";
import { TragamonedasExtremo } from "./TragamonedasExtremo";
import { Tragamonedas } from "./Tragamonedas";
import { Ruleta } from "./Ruleta";

export abstract class BienvenidaJuego {
    protected nombreJuego: string;
    constructor(nombreJuego: string) {
        this.nombreJuego = nombreJuego;
    }
    public mostrarBienvenida(): void {
        console.log(`\n¡Bienvenido/a al juego ${this.nombreJuego}!`);
    }
    // Método abstracto que cada juego debe implementar
    public abstract reglas(): void;
}
