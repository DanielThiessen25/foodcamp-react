export default function Item(props){
    return(
        <div class="item">
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