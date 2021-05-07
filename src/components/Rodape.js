export default function Rodape(props){
    let classes = "pedir "+ props.situacao[0];

    return(
        <div class="rodape">
            <div class={classes}>{props.situacao[1]}</div>
        </div>

    );
}