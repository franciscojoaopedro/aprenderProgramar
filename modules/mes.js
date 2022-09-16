const Mes=class{
    constructor(nome,saldoIncial){
        if(nome ===""){
            throw new Error(" Mês invalido: O nome é Obrigatório");
        }
        this.nome=nome;
        this.saldoIncial=saldoIncial;
        this.totalDoMes={
            saldo:0, saldoIncial,juros:0,rendimento:0,
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
                const percetangensDasDespesas=arredondar((lancamento.valor/this.totalDoMes.despesas)*100)
                destribuicaoDespesas.push(
                    {categoria:lancamento.categoria,percetual:percetangensDasDespesas}
                )
            }
        }
        this.totalDoMes.destribuicaoDespesas= destribuicaoDespesas;
    }
    // Apurar juros
    apurarJures(){
        if(this.totalDoMes.saldo < 0){
            this.totalDoMes.juros=this.calcularJuros(this.totalDoMes.saldo);
            this.totalDoMes.saldo=arredondar(this.totalDoMes.saldo+ this.totalDoMes.juros)
        }
    }
    //Apurar Rendimentos
    apurarRedimentos(){
        if(this.totalDoMes.saldo > 0){
            this.totalDoMes.rendimento=this.calcularRendimentos(this.totalDoMes.saldo);
            this.totalDoMes.saldo=arredondar(this.totalDoMes.saldo+this.totalDoMes.rendimento)
        }
    }
    // Apurar as receitas
    apurarDespesas(){
        for( const lancamento of this.lancamentos){
            if(lancamento.tipo==="despesa"){
                this.totalDoMes.saldo -=lancamento.valor;
                this.totalDoMes.despesas+=lancamento.valor;
                }
            }
    }
    // Apurar as Despesas
    apurarReceitas(){
        for(const lancamento of this.lancamentos){
            if(lancamento.tipo==="receita"){
                this.totalDoMes.saldo += lancamento.valor;
                this.totalDoMes.receitas+=lancamento.valor;
                }
        }
    }

    calcularSaldo(){
        console.log(this.nome)
        this.totalDoMes.saldo=  this.saldoIncial;
        this.apurarReceitas()
        this.apurarDespesas()
        this.destribuirDespesas()
        this.apurarJures()
        this.apurarRedimentos();
    }


}
