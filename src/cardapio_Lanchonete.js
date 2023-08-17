class cardapio_Lanchonete {

    constructor() {

        console.log("BEM VINDO A LANCHONETE".padStart(100," "));

        this.cardapio = [
            {codigo: 'cafe', descricao: 'Café', valor: 3.00},
            {codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50},
            {codigo: 'suco', descricao: 'Suco Natural', valor: 6.20},
            {codigo: 'sanduiche', descricao: 'sanduiche', valor: 6.50},
            {codigo: 'queijo', descricao: 'Queijo (extra do Sanduiche)', valor: 2.00},
            {codigo: 'salgado', descricao: 'Salgado', valor: 7.25},
            {codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50},
            {codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50},
            // ... outros itens do cardápio ...


        ];
    }


        pegarItemCodigo(codigo){
            for(let codClasse of this.cardapio){
                if (codClasse.codigo === codigo)
                    return codClasse.valor;

            }

        }

        validarItemCodigo(codigo){
            return this.cardapio.some(item => item.codigo === codigo);
        }

        imprimirCardapio() {
            console.log('Cardápio:');
            this.cardapio.forEach(item => {
                console.log(`${item.codigo}: ${item.descricao} - ${item.valor.toFixed(2)}`);
            });

            console.log('');
        }

}


export { cardapio_Lanchonete };
