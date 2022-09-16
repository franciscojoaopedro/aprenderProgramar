
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

function arredondar(valor){
    return Math.round(valor*100)/100;
}
function calcularJuros(valor){
    return arredondar(valor * 0.1);
}
function calcularRendimentos(valor){
    return arredondar(valor * 0.005);
}

function calcularSaldo(mes,saldoIncial,lancamentos){
    console.log(mes)
    let totalDoMes={
        saldo:0, saldoIncial,juros:0,rendimento:0,
        receitas:0,despesas:0,destribuicaoDespesas:[]};
    totalDoMes.saldo= saldoIncial;

    for(lancamento of lancamentos){
        if(lancamento.tipo==="receita"){
            totalDoMes.saldo += lancamento.valor;
            totalDoMes.receitas+=lancamento.valor
        }else{
            totalDoMes.saldo -=lancamento.valor;
            totalDoMes.despesas+=lancamento.valor;

        }
    }

    for( lancamento of lancamentos){
        if(lancamento.tipo==="despesa"){
            const percentagensDasDespesas=arredondar((lancamento.valor/totalDoMes.despesas)*100);
            totalDoMes.destribuicaoDespesas.push({categoria:lancamento.categoria, percentual:percentagensDasDespesas})

        }
    }

    let saldoNegativo= totalDoMes.saldo < 0;
    if(saldoNegativo){
        totalDoMes.juros=calcularJuros(totalDoMes.saldo);
        totalDoMes.saldo=arredondar(totalDoMes.saldo+ totalDoMes.juros)
    }else{
        totalDoMes.rendimento=calcularRendimentos(totalDoMes.saldo);
        totalDoMes.saldo=arredondar(totalDoMes.saldo+totalDoMes.rendimento)
    }
    return totalDoMes
}
let saldoIncial=0;
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
let saldoDeJaniero=calcularSaldo("janeiro",saldoIncial,lancamentoJaneiro)
console.log("========= Saldo de Janiero ==========");
console.log(saldoDeJaniero)
// Dados de Fevereiro
const lancamentoFevereiro=[
    new Lancamento("Salario","receita",3000),
    new Lancamento("Aluguel","despesa",1200),
    new Lancamento("Conta de Luz","despesa",250),
    new Lancamento("Conta de Água","despesa",100),
    new Lancamento("Internet","despesa",200),
    new Lancamento("Transporte","despesa",500),
    new Lancamento("Lazer","despesa",800),
    new Lancamento("Alimentação","despesa",1000),
    new Lancamento("Condomínio","despesa",400),
    new Lancamento("Farmácia","despesa",01)
];
let saldoDeFevereiro=calcularSaldo("fevereiro",saldoDeJaniero.saldo,lancamentoFevereiro);
console.log("========= Saldo de Fevereiro ==========");
console.log(saldoDeFevereiro)

// Dados de Março
const lancamentoMarco=[
    new Lancamento("Salario","receita",4000),
    new Lancamento("Aluguel","despesa",1200),
    new Lancamento("Conta de Luz","despesa",200),
    new Lancamento("Conta de Água","despesa",100),
    new Lancamento("Internet","despesa",200),
    new Lancamento("Transporte","despesa",500),
    new Lancamento("Lazer","despesa",800),
    new Lancamento("Alimentação","despesa",1000),
    new Lancamento("Condomínio","despesa",400),
    new Lancamento("Farmácia","despesa",200)
];
const saldoDeMarco=calcularSaldo("março",saldoDeFevereiro.saldo,lancamentoMarco);
console.log("========= Saldo de Março ==========");
console.log(saldoDeMarco)
console.log('============================================')
console.log("Saldo  do ano")
const saldoAcumuladoAno=saldoDeJaniero.saldo+saldoDeFevereiro.saldo +saldoDeMarco.saldo;
console.log(saldoAcumuladoAno)


/*


let saldo1=(salario1-aluguel1-contaDeLuz1-contaDeAgua1-internet1-transporte1-lazer1-alimentacao1);
let saldoNegativo1=saldo1<0;
console.log("Saldo de Janeiro")
console.log(saldo1)

if(saldoNegativo1){
    console.log("Em Janiero o saldo é negativo")
    console.log("Juros de Janeiro",saldo1 *0.1)
    let juros1=calcularJuros(saldo1);
    saldo1=saldo1 + juros1;
}else{
    console.log("Em Janiero o saldo é positivo")
    console.log( "Rendimento de Janeiro ",saldo1 * 0.005)
    let rendimento1=calcularRendimentos(saldo1)
    saldo1=saldo1+rendimento1; 
}
console.log("Saldo de Janeiro", saldo1);


const salario2=3000;
const aluguel2=1200;
const contaDeLuz2=250;
const contaDeAgua2=100;
const internet2=100;
const transporte2=500;
const lazer2=0;
const alimentacao2=1000;

let saldo2=(salario2-aluguel2-contaDeLuz2-contaDeAgua2-internet2-transporte2-lazer2-alimentacao2);
let saldoNegativo2=saldo2<0;
console.log("===========================")
console.log("Saldo de Fevereiro")
console.log(saldo2)

if(saldoNegativo2){
    console.log("Em Fevereiro o saldo é negativo")
   
    console.log("Juros de Janeiro",saldo2 *0.10)
    let juros2=calcularJuros(saldo2)
    saldo2=saldo2 + juros2
}else{
    console.log("Em Fevereiro o saldo é positivo")
    console.log( "Rendimento de Janeiro ",saldo2 * 0.005)
    let rendimento2=calcularRendimentos(saldo2)
    saldo2=saldo2+rendimento2

}
const saldoAcumuladoAno=(saldo1+saldo2);
console.log("Saldo de Fevereiro", saldo2);
console.log("==========================");

console.log("Saldo Acumulado Anual ")
console.log(saldoAcumuladoAno)
*/