

const saldoDeJaniero=calcularSaldo("janeiro",saldoIncial,lancamentoJaneiro)
console.log("========= Saldo de Janiero ==========");
console.log(saldoDeJaniero)
// Dados de Fevereiro
const lancamentoFevereiro=[
    new Lancamento("Salario","receita",5000),
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
const saldoDeFevereiro=calcularSaldo("fevereiro",saldoDeJaniero.saldo,lancamentoFevereiro);
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