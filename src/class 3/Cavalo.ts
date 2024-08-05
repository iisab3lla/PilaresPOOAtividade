import { Animal } from "./Animal";

export class Cavalo extends Animal {
    velocidade: string

    constructor (
        nome: string,
        especie: string,
        cor: string,
        peso: number,
        altura: number,
        velocidade: string
    ){
        super(nome, especie, cor, peso, altura)
        this.velocidade = velocidade
    }

    public imprimirAnimais(){
        console.log(`\nInformações do Cavalo: \nNome: ${this.nome} \nEspécie: ${this.especie} \nCor: ${this.cor} \nPeso: ${this.peso} \nAltura: ${this.altura} \nVelocidade: ${this.velocidade}`)
    }
}