import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import React from "react";

export default function App(){
    const [check, setCheck] = React.useState(["", "Selecione os 3 tipos de itens para fechar o pedido"]);

function atualizar(pedido){
        let verificador = [false, false, false];
        for(let i=0; i<pedido.length; i++){
            if(pedido[i].tipo === "prato"){
                verificador[0] = true;
            }
            else if(pedido[i].tipo === "bebida"){
                verificador[1] = true;
            }
            else if(pedido[i].tipo === "sobremesa"){
                verificador[2] = true;
            }
        }
        if(verificador[0] === true && verificador[1] === true && verificador[2] === true ){
            alert("PRONTO");
            setCheck(["pronto", "Tudo certo, pode pedir!"]);
        }
    
}

    return(
        <div class="fundo">
            <Topo  />
            <Conteudo finalizarPedido={atualizar}/>
            <Rodape situacao={check} />
        </div>
    );


}