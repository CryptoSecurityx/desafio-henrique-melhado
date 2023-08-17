//import { cardapio_Lanchonete } from "./cardapio_Lanchonete.js";
//import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";
import {Controller} from "./Controlador-Pedido.js";

class Main{

    constructor() {
        this.controller = new Controller();

    }

    iniciar(){
        this.controller.ProcPedido();
    }

}
    const main = new Main();
    main.iniciar();