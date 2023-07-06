import { Carrinho } from "./Carrinho";

const carrinho1 = new Carrinho({
    descricao: 'Camisa',
    categoria: 'Roupa',
    valor: 5000,
    quantidade: 1
});

console.log(carrinho1.imprimirResumo());

