interface ICarrinho {

    id: number,
    descricao: string,
    categoria: string,
    valor: number,
    quantidade: number
}

export class Carrinho implements ICarrinho {
    id: number;
    descricao: string;
    categoria: string;
    valor: number;
    quantidade: number;

    public listaCarrinho: Omit<ICarrinho, 'id'>[] = [];

    constructor(produto: Omit<ICarrinho, 'id'>) {

        let idProduto: number = 0;

        this.id = idProduto += 1;
        this.descricao = produto.descricao;
        this.categoria = produto.categoria;
        this.valor = produto.valor;
        this.quantidade = produto.quantidade;

        this.listaCarrinho.push(produto)
    }

    adicionar(): void {
        throw new Error("Method not implemented.");
    }
    remover(): void {
        throw new Error("Method not implemented.");
    }
    alterarQuantidade(): void {
        throw new Error("Method not implemented.");
    }
    imprimirResumo() {
        return this.listaCarrinho
    }

}