const app=document.querySelector('#app');


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
janeiro.adicionarLancamento(new Lancamento("Conta de Luz","despesa",200))
janeiro.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
janeiro.adicionarLancamento(new Lancamento("Internet","despesa",100))
janeiro.adicionarLancamento(new Lancamento("Transporte","despesa",300))
janeiro.adicionarLancamento(new Lancamento("Lazer","despesa",300))

const fevereiro=  new Mes("fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salario","receita",3000))
fevereiro.adicionarLancamento(new Lancamento("Aluguel","despesa",1200))
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz","despesa",250))

const marco=  new Mes("março");
marco.adicionarLancamento(new Lancamento("Salario","receita",4000))
marco.adicionarLancamento(new Lancamento("Aluguel","despesa",1200))
marco.adicionarLancamento(new Lancamento("Conta de Luz","despesa",200))
marco.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))

marco.adicionarLancamento(new Lancamento("Alimentação","despesa",1000));
marco.adicionarLancamento(new Lancamento("Condomínio","despesa",400));


const ano=new Ano()
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.calcularSaldo()

janeiro.adicionarLancamento(new Lancamento("Escola","despesa",500))
fevereiro.adicionarLancamento(new Lancamento("Escola","despesa",400))
marco.adicionarLancamento(new Lancamento("Escola","despesa",500))
ano.calcularSaldo();

const adicionarLancamento=()=>{

const valor=document.querySelector('#valor');
const categoria=document.querySelector('#categoria');
const tipo=document.querySelector('#tipo');
const mes=document.querySelector('#mes');
    ano.adicionarLancamento(mes.value,new Lancamento(categoria.value,tipo.value,parseFloat(valor.value)))
    ano.calcularSaldo()
    renderizar()
    apagarInputsValue();
}

const renderizar=()=>{
    if(app.firstChild){
        app.firstChild.remove();
    }

    const painel=new Div();
    const titulo=new h4('Finanças Pessoais')
    painel.adicionarElementFilho(titulo.element);
    const form=new Div("form-lancamento");
    const mesSelect=new Select("mes");
    for(const mes of ano.meses){
        mesSelect.addOption(mes.nome)
    }
    const tipoSelect=new Select("tipo");
    tipoSelect.addOption('receita');
    tipoSelect.addOption('despesa');
    const valorInputNumber=new Input("valor","number","Valor");
    const categoriaInputText=new Input("categoria","text","Categoria");
    const adicionarButton= new Button("btn-lancamento","Adicionar Lançamentos");
    adicionarButton.addListener(()=>{
        adicionarLancamento()
    })

    form.adicionarElementFilho(mesSelect.element);
    form.adicionarElementFilho(tipoSelect.element);
    form.adicionarElementFilho(categoriaInputText.element);
    form.adicionarElementFilho(valorInputNumber.element);
    form.adicionarElementFilho(adicionarButton.element);
    painel.adicionarElementFilho(form.element)
    const grafico=new Grafico()

    for (const mes of ano.meses){
        grafico.adicionarColuna(mes.totalizador.saldo,mes.nome);
    }
    painel.adicionarElementFilho(grafico.element)

    for(const mes of ano.meses){
        const nomeDoMes=new h4(mes.nome);
        painel.adicionarElementFilho(nomeDoMes.element)
        const tabelaLancamentos= new Tabela('tabela-lancamentos');
        tabelaLancamentos.addRow("th",["Tipo","Categoria","Valor"])
        for(const lancamento of mes.lancamentos){
            tabelaLancamentos.addRow("td",[lancamento.tipo,lancamento.categoria,formatarDinheiro(lancamento.getValoString())])
           // addElement(painel,'p',`${lancamento.tipo} :${lancamento.valor}  ${lancamento.categoria}`) 
        }
        tabelaLancamentos.addRow("th",["Juros",formatarDinheiro(mes.totalizador.juros)])
        tabelaLancamentos.addRow("th",["Redimentos",formatarDinheiro(mes.totalizador.rendimento)])
        tabelaLancamentos.addRow("th",["Total",formatarDinheiro(mes.totalizador.saldo)]);
        painel.adicionarElementFilho(tabelaLancamentos.element);
    }
    app.appendChild(painel.element)
}

renderizar();


