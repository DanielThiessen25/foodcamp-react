import React from "react";

export default function Item(props){
    const [turn, setTurn] = React.useState(["", "off", 0]);

    let qtd = 0;
    let menos = "menos " + turn[1];
    let mais = "mais "+ turn[1];
    let classeQuantidade="quantidade " + turn[1];

    let nome = props.nome;
    let preco = props.preco;
    let tipo = props.tipo;

    function selecionar(){
        if(turn[0] === "selecionado"){
            setTurn(["", "off", 0]);
            props.remover({nome, preco, tipo});
        }
        else{
            qtd ++;
            setTurn(["selecionado", "", qtd]);
            props.adicionar({nome, preco, tipo});
        }
        
    }

    let classe = "item "+ turn[0];

    return(
        <div class={classe} onClick={selecionar}>
                    <img src={props.imagem} class="foto" />
                    <h2 class="nomex1">{props.nome}</h2>
                    <h3>{props.descricao}</h3>
                    <div class="preco">
                        <div class="seletor">
                            <h4>R$</h4>
                            <div class="precox1">{props.preco}</div>
                        </div>
                        <div class="seletor">
                        <div class={menos}>-</div>
                        <div class={classeQuantidade}>{turn[2]}</div>
                        <div class={mais}>+</div>
                        </div>
                    </div>
                </div>
    );
}