import { Animal } from "./Animal";

export class Cachorro extends Animal {
    sonoridade: string

    constructor (
        nome: string,
        especie: string,
        cor: string,
        peso: number,
        altura: number,
        sonoridade: string,
    ){
        super(nome, especie, cor, peso, altura)
        this.sonoridade = sonoridade
    }

    public imprimirAnimais(){
        console.log(`Informações do Cachorro: \nNome: ${this.nome} \nEspécie: ${this.especie} \nCor: ${this.cor} \nPeso: ${this.peso} \nAltura: ${this.altura} \nSonoridade: ${this.sonoridade}`)
    }
}