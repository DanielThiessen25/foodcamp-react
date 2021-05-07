import Item from "./Item";
export default function Faixas(props) {
    var itensArray=[];
    if(props.tipo === "prato"){
       itensArray = [
            { nome: "Ovo e Bifão", imagem: "imgs/almoco.jpg", descricao: "Um grande ovo com bife e fritas", preco: "19,90" },
            { nome: "Strogonoff de Frango", imagem: "imgs/strogonoff.jpg", descricao: "Strogonoff de frango perfeito", preco: "15,90" },
            { nome: "Macarronada", imagem: "imgs/macarrao.jpg", descricao: "600g de macarrão", preco: "30,50" }];
    
    }
    else if(props.tipo === "bebida"){
        itensArray = [
            { nome: "Refrigerante", imagem: "imgs/bebidas.jpg", descricao: "Lata 350ml", preco: "5,90" },
            { nome: "Suco", imagem: "imgs/sucos.jpg", descricao: "Copos de 500ml", preco: "7,50" },
            { nome: "Cerveja", imagem: "imgs/cerveja.jpg", descricao: "Copo de 750ml", preco: "10,90" }];
    }

    else if(props.tipo === "sobremesa"){
        itensArray = [
            { nome: "Bolacha", imagem: "imgs/cookie.jpg", descricao: "Uma grande bolacha recheada", preco: "7,50" },
            { nome: "Sorvete", imagem: "imgs/sorvete.jpg", descricao: "3 bolas de sorvete de chocolate", preco: "12,75" },
            { nome: "Pudim", imagem: "imgs/pudim.jpg", descricao: "Só um pudim", preco: "6,50" }];
    }


    return (
        <div>
            <div class="titulo">
                {props.titulo}
            </div>

            <div class="faixa">
                {itensArray.map(item =>
                    <Item nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} />
                )}

            </div>
        </div>
    );
}