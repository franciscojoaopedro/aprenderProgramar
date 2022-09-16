
/*
Janeiro
salario: 3000
aluguel:1000
conta de luz:200
conta de água:100
internet:100
transporte:300
lazer:300
alimentação:1000
*/
/*
Fevereiro
salario: 3000
aluguel:1200
conta de luz:250
conta de água:100
internet:100
transporte:500
lazer:0
alimentação:1000
*/
/*
Março
salario: 4000
aluguel:1200
conta de luz:250
conta de água:100
internet:100
transporte:500
lazer:0
alimentação:1000
*/

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
    
}

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
     calcularSaldo(){
        console.log(this.nome)
        this.totalDoMes.saldo=  this.saldoIncial;
    
        for(const lancamento of this.lancamentos){
            if(lancamento.tipo==="receita"){
                this.totalDoMes.saldo += lancamento.valor;
                this.totalDoMes.receitas+=lancamento.valor
            }else{
                this.totalDoMes.saldo -=lancamento.valor;
                this.totalDoMes.despesas+=lancamento.valor;
    
            }
        }
    
        this.totalDoMes.destribuicaoDespesas= destribuirDespesas(this.lancamentos,this.totalDoMes.despesas);
    
        const saldoNegativo= this.totalDoMes.saldo < 0;
        if(saldoNegativo){
            this.totalDoMes.juros=calcularJuros(this.totalDoMes.saldo);
            this.totalDoMes.saldo=arredondar(this.totalDoMes.saldo+ this.totalDoMes.juros)
        }else{
            this.totalDoMes.rendimento=calcularRendimentos(this.totalDoMes.saldo);
            this.totalDoMes.saldo=arredondar(this.totalDoMes.saldo+this.totalDoMes.rendimento)
        }
    }
}






function arredondar(valor){
    return Math.round(valor*100)/100;
}
function calcularJuros(valor){
    return arredondar(valor * 0.1);
}
function calcularRendimentos(valor){
    return arredondar(valor * 0.005);
}
function destribuirDespesas(lancamentos,totalDespesas){
    const destribuicaoDespesas=[]
    for(const lancamento of lancamentos){
        if(lancamento.tipo==="despesa"){
            const percetangensDasDespesas=arredondar((lancamento.valor/totalDespesas)*100)
            destribuicaoDespesas.push(
                {categoria:lancamento.categoria,percetual:percetangensDasDespesas}
            )
        }
    }
    return destribuicaoDespesas
}

// function calcularSaldo(mes,saldoIncial,lancamentos){
//     console.log(mes)
//     const totalDoMes={
//         saldo:0, saldoIncial,juros:0,rendimento:0,
//         receitas:0,despesas:0,destribuicaoDespesas:[]};
//     totalDoMes.saldo= saldoIncial;

//     for(const lancamento of lancamentos){
//         if(lancamento.tipo==="receita"){
//             totalDoMes.saldo += lancamento.valor;
//             totalDoMes.receitas+=lancamento.valor
//         }else{
//             totalDoMes.saldo -=lancamento.valor;
//             totalDoMes.despesas+=lancamento.valor;

//         }
//     }

//     totalDoMes.destribuicaoDespesas= destribuirDespesas(lancamentos,totalDoMes.despesas);

//     let saldoNegativo= totalDoMes.saldo < 0;
//     if(saldoNegativo){
//         totalDoMes.juros=calcularJuros(totalDoMes.saldo);
//         totalDoMes.saldo=arredondar(totalDoMes.saldo+ totalDoMes.juros)
//     }else{
//         totalDoMes.rendimento=calcularRendimentos(totalDoMes.saldo);
//         totalDoMes.saldo=arredondar(totalDoMes.saldo+totalDoMes.rendimento)
//     }
//     return totalDoMes
// }

// Dados de Janeiro
const lancamentoJaneiro=[
    new Lancamento("Salario","receita",3000),
    new Lancamento("Aluguel","despesa",1000),
    new Lancamento("Conta de Luz","despesa",200),
    new Lancamento("Conta de Água","despesa",100),
    new Lancamento("Internet","despesa",100),
    new Lancamento("Transporte","despesa",300),
    new Lancamento("Lazer","despesa",300),
    new Lancamento("Alimentação","despesa",500),
    new Lancamento("Condomínio","despesa",300),
    new Lancamento("Farmácia","despesa",100)
];
let saldoIncial=0;
const janeiro=new Mes("janeiro",saldoIncial);
janeiro.adicionarLancamento(new Lancamento("Salario","receita",3000))
janeiro.adicionarLancamento(new Lancamento("Aluguel","despesa",1000))
janeiro.adicionarLancamento(new Lancamento("Conta de Luz","despesa",200))
janeiro.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
janeiro.adicionarLancamento(new Lancamento("Internet","despesa",100))
janeiro.adicionarLancamento(new Lancamento("Transporte","despesa",300))
janeiro.adicionarLancamento(new Lancamento("Lazer","despesa",300))
janeiro.adicionarLancamento(new Lancamento("Alimentação","despesa",500))
janeiro.adicionarLancamento(new Lancamento("Condomínio","despesa",300))
janeiro.adicionarLancamento(new Lancamento("Farmácia","despesa",100))
janeiro.calcularSaldo()
console.log(janeiro);
