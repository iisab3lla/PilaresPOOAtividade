import { Ingresso } from "./Ingresso";

export class VIP extends Ingresso {
    valorAdicional: number

    constructor(
        valor: number,
        valorAdicional: number
    ){
        super(valor);
        this.valorAdicional = valorAdicional
    }
    public ImprimeValor(): void {
        console.log('O valor do ingresso VIP é: ', this.valor + this.valorAdicional);
    }
}