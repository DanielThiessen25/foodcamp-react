import Faixa from "./Faixas";


export default function Conteudo() {

    let faixasArray = [
        { tipo: "prato", titulo: "Primeiro, seu prato" },
        { tipo: "bebida", titulo: "Agora, sua bebida" },
        { tipo: "sobremesa", titulo: "Por fim, sua sobremesa" }]

    return (
        <div class="conteudo">
            {faixasArray.map(indice => 
                <Faixa tipo={indice.tipo} titulo={indice.titulo} />
                )}
           
        </div>
    );
}