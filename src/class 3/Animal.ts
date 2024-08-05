
 export class Animal {
    nome: string;
    especie: string;
    cor: string;
    peso: number;
    altura: number;

    constructor(
        nome: string,
        especie: string,
        cor: string,
        peso: number,
        altura: number,
    ){
        this.nome = nome;
        this.especie = especie;
        this.cor = cor;
        this.peso  = peso;
        this.altura = altura;
    }
}