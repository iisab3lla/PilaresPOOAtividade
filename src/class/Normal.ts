import { Ingresso } from "./Ingresso";

export class Normal extends Ingresso {

    constructor (
        valor: number,
    ){
        super(valor);
    }
    public ImprimeValor(): void {
        console.log('O valor normal do ingresso é: ', this.valor);
    }
}