import Faixa from "./Faixas";
import React from "react";



export default function Conteudo(props) {

    let faixasArray = [
        { tipo: "prato", titulo: "Primeiro, seu prato" },
        { tipo: "bebida", titulo: "Agora, sua bebida" },
        { tipo: "sobremesa", titulo: "Por fim, sua sobremesa" }];

    return (
        <div class="conteudo">
            {faixasArray.map(indice =>
                <Faixa tipo={indice.tipo} titulo={indice.titulo} adicionar={props.adicionar} remover={props.remover} />
            )}
        </div>
    );
}