const app=document.querySelector('#app');
const btnLancamento=document.querySelector('#btn-lancamento');
const valor=document.querySelector('#valor');
const categoria=document.querySelector('#categoria');
const tipo=document.querySelector('#tipo');
const mes=document.querySelector('#mes');
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
const janeiro= new Mes("janeiro");
janeiro.adicionarLancamento(new Lancamento ("Salario","receita",3000))
janeiro.adicionarLancamento(new Lancamento("Aluguel","despesa",1000))
// janeiro.adicionarLancamento(new Lancamento("Conta de Luz","despesa",200))
// janeiro.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
// janeiro.adicionarLancamento(new Lancamento("Internet","despesa",100))
// janeiro.adicionarLancamento(new Lancamento("Transporte","despesa",300))
// janeiro.adicionarLancamento(new Lancamento("Lazer","despesa",300))
// janeiro.adicionarLancamento(new Lancamento("Alimentação","despesa",500))
// janeiro.adicionarLancamento(new Lancamento("Condomínio","despesa",300))
// janeiro.adicionarLancamento(new Lancamento("Farmácia","despesa",100))

const fevereiro=  new Mes("favereiro");
fevereiro.adicionarLancamento(new Lancamento("Salario","receita",3000))
fevereiro.adicionarLancamento(new Lancamento("Aluguel","despesa",1200))
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz","despesa",250))
// fevereiro.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
// fevereiro.adicionarLancamento(new Lancamento("Internet","despesa",100))
// fevereiro.adicionarLancamento(new Lancamento("Transporte","despesa",500))
// fevereiro.adicionarLancamento(new Lancamento("Alimentação","despesa",1000))
// fevereiro.adicionarLancamento(new Lancamento("Condomínio","despesa",400))
const marco=  new Mes("março");
marco.adicionarLancamento(new Lancamento("Salario","receita",4000))
marco.adicionarLancamento(new Lancamento("Aluguel","despesa",1200))
marco.adicionarLancamento(new Lancamento("Conta de Luz","despesa",200))
marco.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
// marco.adicionarLancamento(new Lancamento("Internet","despesa",200))
// marco.adicionarLancamento(new Lancamento("Transporte","despesa",500))
// marco.adicionarLancamento(new Lancamento("Lazer","despesa",800));
// marco.adicionarLancamento(new Lancamento("Alimentação","despesa",1000));
// marco.adicionarLancamento(new Lancamento("Condomínio","despesa",400));


const ano=new Ano()
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.calcularSaldo()

janeiro.adicionarLancamento(new Lancamento("Escola","despesa",500))
fevereiro.adicionarLancamento(new Lancamento("Escola","despesa",400))
marco.adicionarLancamento(new Lancamento("Escola","despesa",500))
ano.calcularSaldo();
console.log(ano.meses)


const addElement=(parent,elementType,text)=>{
    const element=document.createElement(elementType);
    if(text !=="" && text !== undefined && text !==null && text !== 0){
        element.innerText=text
    }
    parent.appendChild(element);
}

const renderizar=()=>{
    if(app.firstChild){
        app.firstChild.remove();
    }
    const painel=document.createElement('div');
    for(const mes of ano.meses){
        addElement(painel,"h3",mes.nome)
        for(const lancamento of mes.lancamentos){
            addElement(painel,'p',`${lancamento.tipo} :${lancamento.valor}  ${lancamento.categoria}`) 
        }
        addElement(painel,"h4",mes.totalizador.saldo)
        addElement(painel,"hr")
    }
    app.appendChild(painel)
}

renderizar();
const apagarInputsValue=()=>{
    mes.value="";
    tipo.value="";
    valor.value="";
    categoria.value="";
}
const adicionarLancamento=()=>{
    ano.adicionarLancamento(mes.value,new Lancamento(categoria.value,tipo.value,parseFloat(valor.value)))
    ano.calcularSaldo()
    renderizar()
    apagarInputsValue();
}
btnLancamento.addEventListener('click',(event)=>{
    event.preventDefault();
    adicionarLancamento()

})












// TESTE IN JS
console.log("============ TESTE ==============");
console.log(janeiro.totalizador.saldo===100.5);
console.log(fevereiro.totalizador.saldo===-494.45);
console.log(marco.totalizador.saldo===-983.89);