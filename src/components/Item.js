import React from "react";

export default function Item(props){

    const [turn, setTurn] = React.useState("");
    let nome = props.nome;
    let preco = props.preco;
    let tipo = props.tipo;

    function selecionar(){
        if(turn === "selecionado"){
            setTurn("");
            props.remover({nome, preco, tipo});
        }
        else{
            setTurn("selecionado");
            props.adicionar({nome, preco, tipo});
        }
        
        
    }

    let classe = "item "+ turn;

    return(
        <div class={classe} onClick={() => selecionar()}>
                    <img src={props.imagem} class="foto" />
                    <h2 class="nomex1">{props.nome}</h2>
                    <h3>{props.descricao}</h3>
                    <div class="preco">
                        <div class="seletor">
                            <h4>R$</h4>
                            <div class="precox1">{props.preco}</div>
                        </div>
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
    );
}