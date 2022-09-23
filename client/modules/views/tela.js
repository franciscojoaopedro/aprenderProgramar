const Tela=class{
    constructor(){
    this.init();
    
    }
    async init (){
        const response= await fetch("http://localhost:3000/api/lancamentos/")
        const lancamentos= await response.json();
        console.log(lancamentos)
        const ano= new Ano()
        ano.adicionarMes( new Mes("janeiro"))
        ano.adicionarMes( new Mes("fevereiro"))
        ano.adicionarMes( new Mes("março"))
        for(const lancamento of lancamentos){
            console.log(lancamento.tipo)
            ano.adicionarLancamento(
                lancamento.mes,
                new Lancamento(lancamento.categoria,lancamento.tipo,parseFloat(lancamento.valor),
                )
            )
        }
        ano.calcularSaldo();
        console.log(ano)
        this.ano=ano;
        this.renderizar();
    }
    
    adicionarLancamento=()=>{
            const valor=document.querySelector('#valor');
            const categoria=document.querySelector('#categoria');
            const tipo=document.querySelector('#tipo');
            const mes=document.querySelector('#mes');
                this.ano.adicionarLancamento(mes.value,new Lancamento(categoria.value,tipo.value,parseFloat(valor.value)))
                fetch("http://localhost:3000/api/lancamentos/",{method:"post",headers:{"content-type":"application/json"},
                body: JSON.stringify({mes:mes.value,categoria:categoria.value,tipo:tipo.value,valor:parseFloat(valor.value)
                })})
                this.ano.calcularSaldo()
                this.renderizar()
                //apagarInputsValue();
            }
    
     renderizar=()=>{
       document.querySelector('#app').remove();
        const app=new Div('app');  
        const titulo=new h4('Finanças Pessoais')
        app.adicionarElementFilho(titulo.element);
        const form=new Div("form-lancamento");
        const mesSelect=new Select("mes");
        for(const mes of this.ano.meses){
            mesSelect.addOption(mes.nome)
        }
        const tipoSelect=new Select("tipo");
        tipoSelect.addOption('receita');
        tipoSelect.addOption('despesa');
        const valorInputNumber=new Input("valor","number","Valor");
        const categoriaInputText=new Input("categoria","text","Categoria");
        const adicionarButton= new Button("btn-lancamento","Adicionar Lançamentos");
        adicionarButton.addListener(()=>{
            this.adicionarLancamento()
        })
    
        form.adicionarElementFilho(mesSelect.element);
        form.adicionarElementFilho(tipoSelect.element);
        form.adicionarElementFilho(categoriaInputText.element);
        form.adicionarElementFilho(valorInputNumber.element);
        form.adicionarElementFilho(adicionarButton.element);
        app.adicionarElementFilho(form.element)
        const grafico=new Grafico()
    
        for (const mes of this.ano.meses){
            grafico.adicionarColuna(mes.totalizador.saldo,mes.nome);
        }
        app.adicionarElementFilho(grafico.element)
    
        for(const mes of this.ano.meses){
            const nomeDoMes=new h4(mes.nome);
            app.adicionarElementFilho(nomeDoMes.element)
            const tabelaLancamentos= new Tabela('tabela-lancamentos');
            tabelaLancamentos.addRow("th",["Tipo","Categoria","Valor"])
            for(const lancamento of mes.lancamentos){
                tabelaLancamentos.addRow("td",[lancamento.tipo,lancamento.categoria,formatarDinheiro(lancamento.getValoString())])
               // addElement(app,'p',`${lancamento.tipo} :${lancamento.valor}  ${lancamento.categoria}`) 
            }
            tabelaLancamentos.addRow("th",["Juros",formatarDinheiro(mes.totalizador.juros)])
            tabelaLancamentos.addRow("th",["Redimentos",formatarDinheiro(mes.totalizador.rendimento)])
            tabelaLancamentos.addRow("th",["Total",formatarDinheiro(mes.totalizador.saldo)]);
            app.adicionarElementFilho(tabelaLancamentos.element);
        }
       
        const [body]=document.getElementsByTagName('body');
        body.appendChild(app.element);
    
    }
    
    }