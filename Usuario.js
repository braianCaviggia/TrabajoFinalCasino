"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    // private bonoBienvenida : number = 2000
    function Usuario() {
        this.nombre = "";
        // this.edad = 0
        this.saldo = 2000;
    }
    Usuario.prototype.getSaldo = function () {
        return this.saldo;
    };
    Usuario.prototype.SetSaldo = function (nuevoSaldo) {
        this.saldo = nuevoSaldo;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    // public getEdad() {
    //     return this.edad
    // }
    Usuario.prototype.mostrarSaldo = function () {
        console.log("Tu saldo actual es de $".concat(this.saldo));
    };
    Usuario.prototype.sumarSaldo = function (montoApuesta) {
        this.saldo += montoApuesta;
    };
    Usuario.prototype.restarSaldo = function (montoApuesta) {
        this.saldo -= montoApuesta;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
//     bienvenida() {
//     console.log (`Bienvenido ${this.nombre}, tu bono de bienvenida es de ${this.bonoBienvenida}.`)
// }
//     public pedirEdad() {
//             this.edad = rs.questionInt ("Ingresa tu edad: ")
//             if (this.edad >= 18) {
//                this.bienvenida()
//                let jugarJuego = () => {
// let juegos = new fabricaJuegos(this) //creo la fabrica de juegos en la variable "juegos"
// juegos.mostrarJuegos() //muestro los juegos disponibles
// let elegirJuego = juegos.jugar() //en "jugar" guardo el juego que elija el usuario
// if (elegirJuego) {  //si la opcion elegida es correcta...
//     elegirJuego.apostar() //ejecuta la funcion de apostar
// }
// }
// jugarJuego()
// let salir = false
//  while(!salir) {
//     let mostrarMenu = console.log("VOLVIENDO AL MENU...")
//                       console.log("---MENÚ DE OPCIONES---")
//                       console.log("1. Mostrar menu de juegos")
//                       console.log("2. Consultar saldo")
//                       console.log("3. Salir del casino") 
//     let preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ")
//     switch(preguntarUsuario) {
//         case 1: jugarJuego()
//         break
//         case 2: this.mostrarSaldo()
//                 jugarJuego()
//                 break
//         case 3: salir = true
//             let saldoFinal : string = `Tu saldo final luego de jugar es de ${this.saldo}`
//             fs.writeFileSync(`saldoFinalUsuario.txt`,saldoFinal)
//             console.log(`Muchas gracias por jugar ${this.nombre}. Tu saldo final es de ${this.saldo} ¡Hasta la proxima!`)
//         break
//         default : console.log(`No esta disponible esa opcion. Te volvemos a mostrar las opciones para que vuelvas a elegir.`)
//         jugarJuego()
//         break
//     }
//     }
// }
// }
// }
// mostrarMenu() {
// let mostrarMenu = console.log("---MENÚ DE OPCIONES---")
//                   console.log("1. Mostrar menu de juegos")
//                   console.log("2. Salir del casino")
// let preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ")
// switch(preguntarUsuario) {
//     case 1: jugarJuego()
// }
// }
// public pedirEdad(){
// try {
//     this.edad = rs.questionInt("Ingresa tu edad: ");
//     if (this.edad < 18) {
//         throw new Error("Sos menor de edad, las apuestas están prohibidas para ti");
//     }
// } catch (error) {
//     console.log(error.message); 
// } if( this.edad >= 18){
//     this.mostrarSaldo()
// }
// }  
