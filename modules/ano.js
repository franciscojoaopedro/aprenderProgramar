const Ano=class{
    constructor(){
        this.meses=[]
    }
    adicionarMes(mes){
        this.meses.push(mes)
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