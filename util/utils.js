const arredondar=(valor)=>{
    return Math.round(valor*100)/100;
}

const formatarDinheiro=(valor)=>{
    return new Intl.NumberFormat("pt-ao",{
        currency:"AOA",style:"currency"
    }).format(valor)
}

const apagarInputsValue=()=>{
    mes.value=ano.meses[0].nome;
    tipo.value="receita";
    valor.value="";
    categoria.value="";
}