
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
const janeiro= new Mes("janeiro",saldoIncial);
janeiro.adicionarLancamento(new Lancamento ("Salario","receita",3000))
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
arredondar(janeiro.totalDoMes.saldo);
console.log(janeiro);

const fevereiro= await new Mes("favereiro",janeiro.totalDoMes.saldo);
fevereiro.adicionarLancamento(new Lancamento("Salario","receita",3000))
fevereiro.adicionarLancamento(new Lancamento("Aluguel","despesa",1200))
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz","despesa",250))
fevereiro.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
fevereiro.adicionarLancamento(new Lancamento("Internet","despesa",100))
fevereiro.adicionarLancamento(new Lancamento("Transporte","despesa",500))
fevereiro.adicionarLancamento(new Lancamento("Alimentação","despesa",1000))
fevereiro.adicionarLancamento(new Lancamento("Condomínio","despesa",400))
fevereiro.calcularSaldo()
arredondar(fevereiro.totalDoMes.saldo);

console.log(fevereiro);

const marco= await new Mes("março",fevereiro.totalDoMes.saldo);
marco.adicionarLancamento(new Lancamento("Salario","receita",4000))
marco.adicionarLancamento(new Lancamento("Aluguel","despesa",1200))
marco.adicionarLancamento(new Lancamento("Conta de Luz","despesa",200))
marco.adicionarLancamento(new Lancamento("Conta de Água","despesa",100))
marco.adicionarLancamento(new Lancamento("Internet","despesa",200))
marco.adicionarLancamento(new Lancamento("Transporte","despesa",500))
marco.adicionarLancamento(new Lancamento("Lazer","despesa",800))
marco.adicionarLancamento(new Lancamento("Alimentação","despesa",1000))
marco.adicionarLancamento(new Lancamento("Condomínio","despesa",400))
marco.calcularSaldo()
arredondar(marco.totalDoMes.saldo);
console.log(marco);