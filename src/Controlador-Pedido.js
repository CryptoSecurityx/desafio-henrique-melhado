import { cardapio_Lanchonete } from "./cardapio_Lanchonete.js";
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";
import entradaDados from "readline-sync";




class Controller{

    constructor() {
        this.cardapio = new cardapio_Lanchonete();
        this.caixa = new CaixaDaLanchonete();
        this.pagamento = new CaixaDaLanchonete();
    }


    ProcPedido(){
        this.cardapio.imprimirCardapio();
        const itensEscolhidos = this.GetItems();
        const pagamento = this.pagamento();

        this.pagamento.calcularValorDaCompra(pagamento, itensEscolhidos);





    }


    GetItems(){


        var sair = false;
        var itensEscolhidos = [];
        var veritemPrincipal = true;

            parar:
            while ( !sair) {

                var item = entradaDados.question("Selecione um Item do Cardapio ou aperte s para sair: ")

                if (item.toLowerCase() === 's'){
                    sair = false;
                    break parar;

                }


                validacao:
                if(item.toLowerCase() === 'chantily'){

                    for (let i =0; i< itensEscolhidos.length; i++){

                        if (typeof itensEscolhidos[i] === 'string' && itensEscolhidos[i].include('cafe')){
                            break validacao;
                        }
                    }

                    veritemPrincipal = false;

                }

                validacao:
                if(item.toLowerCase() === 'queijo'){

                    for (let i =0; i< itensEscolhidos.length; i++){

                        if (typeof itensEscolhidos[i] === 'string' && itensEscolhidos[i].include('sanduiche')){
                            break validacao;
                        }
                    }

                    veritemPrincipal = false;

                }

                if (!veritemPrincipal){
                    console.log("Item extra nao pode ser pedido sem o principal")
                    veritemPrincipal = true;
                    continue;

                }

                let quantidade = null;

                while (true){
                    quantidade = parseInt(entradaDados.question(`Escolha uma quantidade do item ${item}: `));
                    if (quantidade === 0)
                        console.log("quantidade invalida.");
                    else
                        break;
                }



                let escolha = `${item}, ${quantidade}`;

                itensEscolhidos.push(escolha);
            }

            return itensEscolhidos;



    }

    pagamento(){
        return entradaDados.question("Pagamento em dinheiro , debito ou credito.");

    }

}

export { Controller }