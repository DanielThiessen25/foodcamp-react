import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function Revisar(props) {
console.log(props.pedido);
let total = 0;
let preco = "";

for(let i=0; i<props.pedido.length; i++){
    preco = props.pedido[i].preco;
    preco = preco.replace(/,/g, '.');
    preco = parseFloat(preco);
    total += preco;
}
console.log(total);
total = total.toString();
total = total.replace(".", ",");

function abrirLink() {
    const nomeCliente = prompt("Qual o seu nome?");
    const enderecoCliente = prompt("Qual endereço?");
    let pedidoTexto = "Olá, gostaria de fazer o pedido:\n";
    for (let i=0; i<props.pedido.length; i++){
        pedidoTexto += " -"+props.pedido[i].tipo+": "+props.pedido[i].nome+ "\n";
    }
    pedidoTexto += " \n Nome: " + nomeCliente + "\n Endereço: " + enderecoCliente + "\n";
    alert(pedidoTexto);
    let url = encodeURIComponent(pedidoTexto);
    let link = "https://wa.me/?text=" + url;
    window.open(link);
}


    return (
       
        <div class="fundoRevisar">
            <div class="conteudoResumo">
            <div class="tituloResumo"><h1>Revise seu pedido</h1></div>
            
            <div class="boxResumo">

            {props.pedido.map(item => 
                <div class="resumo">
                <div class="anome">{item.nome}</div>
                <div class="seletor">
                    <h4>R$</h4>
                    <div class="apreco">{item.preco}</div>
                </div>
            </div>
                )}

                <div class="resumo">
                    <h2>TOTAL</h2>
                    <div class="seletor">
                        <h4>R$</h4>
                        <div class="total">{total}</div>
                    </div>
                </div>

            </div>

            <div class="tudoCerto" onClick={abrirLink}>Tudo certo, pode pedir!</div>

       <h3 class="cancelar" >Cancelar</h3>
            

            </div>

        </div>
       
    );
}