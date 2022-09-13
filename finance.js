
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


function calcularSaldo(mes,saldoIncial=0,salario,aluguel,contaDeAgua,contaDeLuz,internet,transporte,lazer,alimentacao){
    console.log(mes)
    let saldo= saldoIncial+(salario-aluguel-contaDeAgua-contaDeLuz-internet-transporte-lazer-transporte-alimentacao);
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

const salario1=3000;
const aluguel1=1000;
const contaDeLuz1=200;
const contaDeAgua1=100;
const internet1=100;
const transporte1=300;
const lazer1=300;
const alimentacao1=500;


let saldoDeJaniero=calcularSaldo("janeiro",0,salario1,aluguel1
    ,contaDeAgua1,contaDeLuz1,internet1,transporte1,lazer1,alimentacao1)
console.log(saldoDeJaniero)

// Dados de Fevereiro
const salario2=3000;
const aluguel2=1200;
const contaDeLuz2=250;
const contaDeAgua2=100;
const internet2=100;
const transporte2=500;
const lazer2=0;
const alimentacao2=1000;

let saldoDeFevereiro=calcularSaldo("fevereiro",saldoDeJaniero,salario2,aluguel2,contaDeAgua2,contaDeLuz2,internet2,transporte2,lazer2,alimentacao2);
console.log(saldoDeFevereiro)

// Dados de Março
const salario3=4000;
const aluguel3=1200;
const contaDeLuz3=200;
const contaDeAgua3=100;
const internet3=200;
const transporte3=500;
const lazer3=800;
const alimentacao3=1000;



console.log("Saldo  do ano")
const saldoAcumuladoAno=saldoDeJaniero+saldoDeFevereiro
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