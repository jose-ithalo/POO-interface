import { Carrinho } from "./Carrinho";
import { formartarNum } from "./formatar";

export class Vendas extends Carrinho {

    constructor() {
        super();
    }

    finalizarPedido(opcao: string): string {

        let totalVenda: number = 0;

        for (let item of this.listaCarrinho) {
            totalVenda += (item.valor * item.quantidade);
        }

        if (opcao.toLocaleLowerCase() === 'crédito') {
            if (totalVenda > 10000) {
                totalVenda -= totalVenda * 5 / 100;
                return `Pedido finalizado. Total: R$ ${formartarNum(totalVenda)}`;
            }
            return `Pedido finalizado. Total: R$ ${formartarNum(totalVenda)}`;
        }

        if (opcao.toLocaleLowerCase() === 'débito') {
            totalVenda -= totalVenda * 7 / 100;

            return `Pedido finalizado. Total: R$ ${formartarNum(totalVenda)}`;
        }

        return 'Opção inválida de pagamento.\nEscolha crédito ou débito.'
    }

}