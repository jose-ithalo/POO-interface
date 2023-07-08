export interface IProduto {
    id: number,
    descricao: string,
    categoria: string,
    valor: number,
    quantidade: number
}

export class Carrinho {

    protected listaCarrinho: IProduto[];

    constructor() {

        this.listaCarrinho = [];
    }

    adicionar(produto: IProduto): void {

        this.listaCarrinho.push(produto);
    }

    remover(idProduto: number): string {

        const indeciProduto: number = this.listaCarrinho.findIndex(function (produto) {
            return produto.id === idProduto;
        });

        if (indeciProduto < 0) {
            return 'Produto não encontrado';
        }

        this.listaCarrinho.splice(indeciProduto, 1);

        return 'Produto removido com sucesso!'
    }

    alterarQuantidade(idProduto: number, quant: number): string {

        const produtoSelecionado = this.listaCarrinho.find(function (produto) {
            return produto.id === idProduto;
        });

        if (!produtoSelecionado) {
            return 'Produto não encontrado';
        }

        produtoSelecionado.quantidade = quant;

        return `Quantidade de ${produtoSelecionado.descricao} alterada para ${quant}.`

    }

    imprimirResumo(): IProduto[] {
        return this.listaCarrinho
    }

}