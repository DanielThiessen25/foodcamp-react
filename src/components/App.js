import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import React from "react";


export default function App() {
    
    const [pedido, setPedido] = React.useState([]);

    function adicionarItem(item) {
        setPedido([...pedido, item]);
        console.log(pedido);
    }

    function removerItem(item) {
        let retirar = 0;
        let novoPedido = [...pedido];
        for (let i = 0; i < novoPedido.length; i++) {
            if (novoPedido[i].nome === item.nome) {
                retirar = i;
            }
        }
        novoPedido.splice(retirar, 1);
        setPedido(novoPedido);
        console.log(pedido);
     
    }

    return (
        <div class="fundo" >
            <Topo />
            <Conteudo adicionar={adicionarItem} remover={removerItem} />
            <Rodape pedido={pedido} />
        </div>
    );


}