import { Ingresso } from "./Ingresso";

export class Camarote extends Ingresso {
    valorCamarote: number

    constructor(
        valor: number,
        valorCamarote: number
    ){
        super(valor);
        this.valorCamarote = valorCamarote
    }
    public ImprimeValor(): void {
        console.log('O valor do camarote é: ', this.valor + this.valorCamarote);
    }
}