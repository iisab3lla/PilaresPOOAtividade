import { Imovel } from "./Imovel";

export class Novo extends Imovel {
    adicionalImovel: number

    constructor (
        endereco: string,
        preco: number,
        adicionalImovel: number
    ){
        super(endereco, preco);
        this.adicionalImovel = adicionalImovel
    }
    public ValorImovel(): void {
        console.log(
            `O valor deste imóvel localizado no endereço ${this.endereco} é de: ${this.preco}, 
            mais o adicional: ${this.adicionalImovel}, totalizando: ${this.preco + this.adicionalImovel}`
        );
    }
}