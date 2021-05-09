import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Rodape(props) {
    let clicar = false;
    let classe = ["pedir", "Selecione os 3 itens para fechar o pedido"];
    let verificador = [false, false, false];
    let pedido = props.pedido;
    for (let i = 0; i < pedido.length; i++) {
        if (pedido[i].tipo === "prato") {
            verificador[0] = true;
        }
        else if (pedido[i].tipo === "bebida") {
            verificador[1] = true;
        }
        else if (pedido[i].tipo === "sobremesa") {
            verificador[2] = true;
        }
    }
    if (verificador[0] === true && verificador[1] === true && verificador[2] === true) {
        classe = ["pedir pronto", "Tudo certo, pode pedir!"];
        alert("PRONTO");
        clicar = true;
    }

    function fechar(clicar) {
        if (clicar == true) {
            alert("FECHOU PEDIDO");
        }
    }

    return (
        <Router>
            <div class="rodape">
                <Link to="/revisar"><div class={classe[0]} onClick={() => fechar(clicar)}> {classe[1]} </div></Link>
                <Switch>
                    <Route path="/revisar">
                        <Revisar />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}