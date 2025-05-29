export class TragamonedasBasico {
    private simbolos : string[] = ["🍎","🍊","🍒","🍒","🍒","🍒"]

 tirar() {

   let tirarTragamoneda = (simbol:string[]) => {
        return simbol[Math.floor(Math.random() * this.simbolos.length)]; //math floor: redondea numero decimal
                                                                         //random: genera numero del 0 al 1
                                                                         // * length: multiplico el numero por longitud del array
   }
        
let resultado =   [tirarTragamoneda(this.simbolos),  //genero 3 veces un simbolo en un array y lo guardo en resultado
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos)
                    ]
    
    console.log(resultado.join("/"))  //muestro el resultado con join para que quede como string y no como array    

    if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) { //comparo los simbolos segun las posiciones 
        console.log("Ganaste")
    } else {
        console.log("Perdiste")
    }
}
}

