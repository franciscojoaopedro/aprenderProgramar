const Ano=class{
    constructor(){
        this.meses=[]
    }
    adicionarMes(mes){
        this.meses.push(mes)
    }

    adicionarLancamento(nomeDoMes,lancamento){
        for(const mes of this.meses){
            if(mes.nome===nomeDoMes){
                mes.adicionarLancamento(lancamento);
                break;
            }
        }
    }

    calcularSaldo(){
        let saldoIncial=0
        for(const mes of this.meses){
            mes.saldoIncial=saldoIncial;
            mes.calcularSaldo();
            saldoIncial=mes.totalizador.saldo;
        }
    }
}