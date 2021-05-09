import React from "react";

export default function Item(props){
    const [turn, setTurn] = React.useState(["", "off", 0]);
    const [pelicula, setPelicula] = React.useState("pelicula ");

    let classe = "item "+ turn[0];
    let qtd = 0;
    let menos = "menos " + turn[1];
    let mais = "mais "+ turn[1];
    let classeQuantidade="quantidade " + turn[1];

    let nome = props.nome;
    let preco = props.preco;
    let tipo = props.tipo;

    

    function aumentar (){
            qtd = turn[2];
            qtd ++;
            setTurn(["selecionado", "", qtd]);
            props.adicionar({nome, preco, tipo});
            if(turn[2] == 0){
                setPelicula("pelicula off");
            }     

    }

    function diminuir (){
        if(turn[2] != 0){
            if(turn[2] === 1){
                setTurn(["", "off", 0]);
                props.remover({nome, preco, tipo});
                setPelicula("pelicula");
            }
            else{
                qtd = turn[2];
                qtd --;
                setTurn(["selecionado", "", qtd]);
                props.remover({nome, preco, tipo});
            }
            
        }
    }

    return(
        <div>
        
        <div class={classe} >
        <div class={pelicula} onClick={aumentar}></div>
                    <img src={props.imagem} class="foto" />
                    <h2 class="nomex1">{props.nome}</h2>
                    <h3>{props.descricao}</h3>
                    <div class="preco">
                        <div class="seletor">
                            <h4>R$</h4>
                            <div class="precox1">{props.preco}</div>
                        </div>
                        <div class="seletor">
                        <div class={menos} onClick={diminuir}>-</div>
                        <div class={classeQuantidade}>{turn[2]}</div>
                        <div class={mais} onClick={aumentar}>+</div>
                        </div>
                    </div>
                </div>
                
            </div> 
    );
}