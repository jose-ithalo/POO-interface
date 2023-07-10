import { Vendas } from "./Vendas";

const venda1 = new Vendas();

venda1.adicionar({
    id: 1,
    descricao: 'Camisa',
    categoria: 'Roupa',
    valor: 5000,
    quantidade: 1
});

venda1.adicionar({
    id: 2,
    descricao: 'Mouse',
    categoria: 'Eletrônico',
    valor: 7500,
    quantidade: 2
});

venda1.adicionar({
    id: 3,
    descricao: 'Cama',
    categoria: 'Móveis',
    valor: 20000,
    quantidade: 1
});

console.log(venda1.remover(3));

console.log(venda1.alterarQuantidade(1, 2));

console.log(venda1.imprimirResumo());

// console.log(venda1.finalizarPedido('crédito'));
console.log(venda1.finalizarPedido('débito'));
