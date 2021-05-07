import Faixa from "./Faixas";
import React from "react";


export default function Conteudo(props) {
    const [pedido, setPedido] = React.useState([]);

    

    
    function adicionarItem(item){
        setPedido([...pedido, item]);
        console.log(pedido);
        props.finalizarPedido(pedido);
    }

    function removerItem(item){
        let retirar = 0;
        let atualizarPedido = [...pedido];
        for(let i=0; i<pedido.length; i++){
            if(atualizarPedido[i].nome === item.nome){
                retirar = i;
            }
        }
        atualizarPedido.splice(retirar, 1);
        setPedido(atualizarPedido);
        console.log(pedido);
        props.finalizarPedido(pedido);
    }

    let faixasArray = [
        { tipo: "prato", titulo: "Primeiro, seu prato" },
        { tipo: "bebida", titulo: "Agora, sua bebida" },
        { tipo: "sobremesa", titulo: "Por fim, sua sobremesa" }];

    return (
        <div class="conteudo">
            {faixasArray.map(indice => 
                <Faixa tipo={indice.tipo} titulo={indice.titulo} adicionar={adicionarItem} remover={removerItem}/>
                )}
           
        </div>
    );
}