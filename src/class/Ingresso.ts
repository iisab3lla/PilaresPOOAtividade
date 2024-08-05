export class Ingresso {
    public valor: number;

    constructor(valor: number){
        this.valor = valor
    }
    public ImprimeValor(){
        console.log('O valor do ingresso é: ', this.valor);
    }
}