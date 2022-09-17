const arredondar=(valor)=>{
    return Math.round(valor*100)/100;
}

const formatarDinheiro=(valor)=>{
    return new Intl.NumberFormat("pt-ao",{
        currency:"AOA",style:"currency"
    }).format(valor)
}