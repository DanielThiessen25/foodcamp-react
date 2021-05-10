import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Revisar from "./Revisar";

export default function Rodape(props) {
    let clicar = false;
    let classe = ["pedir linkDesabilitado", "Selecione os 3 itens para fechar o pedido"];
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
        clicar = true;
    }

    function fechar(clicar) {
        if (clicar == true) {
        }
    }

    return (
        <Router>
            <div class="rodape">
            <Link to="/revisar" className={classe[0]}><div onClick={() => fechar(clicar)}> {classe[1]} </div></Link>
                <Switch>
                    <Route path="/revisar">
                        <Revisar  pedido={pedido}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}