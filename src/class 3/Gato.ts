import { Animal } from "./Animal";

export class Gato extends Animal{
    diferencial: string

    constructor (
        nome: string,
        especie: string,
        cor: string,
        peso: number,
        altura: number,
        diferencial: string
    ){
        super(nome, especie, cor, peso, altura)
        this.diferencial = diferencial
    }

    public imprimirAnimais(){
        console.log(`\nInformações do Gato: \nNome: ${this.nome} \nEspécie: ${this.especie} \nCor: ${this.cor} \nPeso: ${this.peso} \nAltura: ${this.altura} \nDiferencial: ${this.diferencial}`)
    }
}