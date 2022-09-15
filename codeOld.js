
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
    let saldo= saldoIncial;
    saldo += lancamentos.reduce((acumulador,lacamento)=>acumulador+lacamento.valor,0);
    let saldoNegativo= saldo < 0;

    if(saldoNegativo){
        let juros=calcularJuros(saldo);
        saldo=arredondar(saldo+juros)
    }else{
        let rendimento=calcularRendimentos(saldo);
        saldo=arredondar(saldo+rendimento)
    }
    return saldo
}
let saldoIncial=0;
// Dados de Janeiro
const lancamentoJaneiro=[
    {tipo:"receita",valor:3000}, 
    {tipo:"despesa",valor:1000},
    {tipo:"despesa",valor:200},
    {tipo:"despesa",valor:100},
    {tipo:"despesa",valor:100},
    {tipo:"despesa",valor:300},
    {tipo:"despesa",valor:300},
    {tipo:"despesa",valor:500},
    {tipo:"despesa",valor:300},
    {tipo:"despesa",valor:100}
];
let saldoDeJaniero=calcularSaldo("janeiro",saldoIncial,lancamentoJaneiro)
console.log("========= Saldo de Janiero ==========");
console.log(saldoDeJaniero)
// Dados de Fevereiro
const lancamentoFevereiro=[
    {tipo:"receita",valor:3000},
    {tipo:"despesa",valor:1200},
    {tipo:"despesa",valor:250},
    {tipo:"despesa",valor:100},
    {tipo:"despesa",valor:100},
    {tipo:"despesa",valor:500},
    {tipo:"despesa",valor: 0},
    {tipo:"despesa",valor:1000},
    {tipo:"despesa",valor:400},
    {tipo:"despesa",valor:0}
];
let saldoDeFevereiro=calcularSaldo("fevereiro",saldoIncial,lancamentoFevereiro);
console.log("========= Saldo de Fevereiro ==========");
console.log(saldoDeFevereiro)

// Dados de Março
const lancamentoMarco=[
    {tipo:"receita",valor:4000},
    {tipo:"despesa",valor:1200},
    {tipo:"despesa",valor:200},
    {tipo:"despesa",valor:100},
    {tipo:"despesa",valor:200},
    {tipo:"despesa",valor:500},
    {tipo:"despesa",valor:800},
    {tipo:"despesa",valor:1000},
    {tipo:"despesa",valor:400},
    {tipo:"despesa",valor:0}
];
const saldoDeMarco=calcularSaldo("março",saldoIncial,lancamentoMarco);
console.log("========= Saldo de Março ==========");
console.log(saldoDeMarco)
console.log('============================================')
console.log("Saldo  do ano")
const saldoAcumuladoAno=saldoDeJaniero+saldoDeFevereiro +saldoDeMarco;
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