import entradaDados from 'readline-sync';
import { cardapio_Lanchonete } from "./cardapio_Lanchonete.js";


class CaixaDaLanchonete {
    calcularValorDaCompra(metodo_Pagamento, itens) {

        var cardapio_Restaurant = new cardapio_Lanchonete();
        let valor = 0;

        for (let items of itens){
            items = items.split(',')
            let codigoItem = item[0];

            for (let i=0; i < item[1]; i++){
                let codigo = codigoItem.toLowerCase();
                let preco = cardapio_Restaurant.pegarItemCodigo(codigo);

                if (preco === undefined){

                    console.log("codigo nao existente.");
                    return "item invalido.";
                }

                valor += Number(preco);

            }





        }


        console.log(metodo_Pagamento);

        if (valor === 0){
            console.log("o carrinho esta vazio.");
            return "o carrinho esta vazio.";
        }

        switch (metodo_Pagamento){
            case 'dinheiro':
                console.log("A forma de pagamento no dinheiro. Valor total: " + valor);
                valor *= 0.95;
                break;

            case 'credito':
                valor *= 1.03;
                console.log("A forma de pagamento no credito. Valor total: " + valor);
                break;
            case 'debito':
                console.log("A forma de pagamento no debito. Valor total: " + valor);
                break;

            default:
                return "Forma de pagamento invalida."

        }




        return `Total da Compra: R$ ${valor.toFixed(2)}`; // valor total
    }

}


var caixa = new cardapio_Lanchonete();




    console.log(itensEscolhidos)

    //let confirma = entradaDados.question("Confirma seu Pedido? ")

    //fruits.unshift('kiwi');

    var metodo_Pagamento = entradaDados.question("Selecione um metodo de pagamento: ")


    var c1 = new CaixaDaLanchonete();
    c1.calcularValorDaCompra(metodo_Pagamento, itensEscolhidos)

    console.log(itensEscolhidos)

//calcularValorDaCompra(forma_Pagamento, item)



export { CaixaDaLanchonete };
