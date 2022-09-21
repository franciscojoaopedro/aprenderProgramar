const Mes=class{
    constructor(nome){
        if(nome ===""){
            throw new Error(" Mês invalido: O nome é Obrigatório");
        }
        this.nome=nome;
        this.saldoIncial=0;
        this.totalizador={
            saldo:0,juros:0,rendimento:0,
            receitas:0,despesas:0,destribuicaoDespesas:[]};
        this.lancamentos=[]

    }
     adicionarLancamento (lancamento) {
        this.lancamentos.push(lancamento);
    }
    calcularJuros(valor){
        return arredondar(valor * 0.1);
    }
     calcularRendimentos(valor){
        return arredondar(valor * 0.005);
    }
    destribuirDespesas(){
        const destribuicaoDespesas=[]
        for(const lancamento of this.lancamentos){
            if(lancamento.tipo==="despesa"){
                const percetangensDasDespesas=arredondar((lancamento.valor/this.totalizador.despesas)*100)
                destribuicaoDespesas.push(
                    {categoria:lancamento.categoria,percetual:percetangensDasDespesas}
                )
            }
        }
        this.totalizador.destribuicaoDespesas= destribuicaoDespesas;
    }
    // Apurar juros
    apurarJures(){
        if(this.totalizador.saldo < 0){
            this.totalizador.juros=this.calcularJuros(this.totalizador.saldo);
            this.totalizador.saldo=arredondar(this.totalizador.saldo+ this.totalizador.juros)
        }
    }
    //Apurar Rendimentos
    apurarRedimentos(){
        if(this.totalizador.saldo > 0){
            this.totalizador.rendimento=this.calcularRendimentos(this.totalizador.saldo);
            this.totalizador.saldo=arredondar(this.totalizador.saldo+this.totalizador.rendimento)
        }
    }
    // Apurar as receitas
    apurarDespesas(){
        for( const lancamento of this.lancamentos){
            if(lancamento.tipo==="despesa"){
                this.totalizador.saldo -=lancamento.valor;
                this.totalizador.despesas+=lancamento.valor;
                }
            }
    }
    // Apurar as Despesas
    apurarReceitas(){
        for(const lancamento of this.lancamentos){
            if(lancamento.tipo==="receita"){
                this.totalizador.saldo += lancamento.valor;
                this.totalizador.receitas+=lancamento.valor;
                }
        }
    }

    calcularSaldo(){
        this.totalizador={
            saldo:0,juros:0,rendimento:0,
            receitas:0,despesas:0,destribuicaoDespesas:[]};
        this.totalizador.saldo=  this.saldoIncial;
        this.apurarReceitas();
        this.apurarDespesas();
        this.destribuirDespesas();
        this.apurarJures();
        this.apurarRedimentos();
    }


}
