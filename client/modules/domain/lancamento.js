const Lancamento = class{
    constructor(categoria,tipo,valor){
        if(tipo !=="receita" && tipo!=="despesa"){
            throw new Error ("Lançamento invalido: Tipo deve ser receita ou despesa!")
        }
        if(valor<=0)throw new Error ("Lançamento invalido: O valor deve ser mair que zero!");
        if(categoria==="") throw new Error("Lançamento invalido:  A categoria é obrigatória");
        this.categoria=categoria;
        this.tipo=tipo;
        this.valor=valor;
    }
    getValoString(){
        return (this.tipo==="despesa")?this.valor * -1: this.valor;
    }
}
