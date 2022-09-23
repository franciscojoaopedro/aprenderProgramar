

CREATE SCHEMA financas_pessoais;

CREATE TABLE financas_pessoais.lancamento (
    id_lancamento serial,
    mes text,
    categoria text,
    tipo text,
    valor numeric
);


INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'janeiro','Salario','receita',3000
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'janeiro','livro','despesa',500
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'janeiro','computador','despesa',100
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'janeiro','internet','despesa',750
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'janeiro','alimentação','despesa',350
);


INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'fevereiro','Salario','receita',5000
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'fevereiro','material','despesa',1500
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'fevereiro','ginásio','despesa',200
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'fevereiro','hospital','despesa',850
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'fevereiro','energia','despesa',2000
);


INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'março','Salario','receita',4000
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'março','lavar carro','despesa',200
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'março','mensalidades','despesa',1500
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'março','material electricos','despesa',550
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'março','teclados','despesa',450
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'março','barbaria','despesa',1000
);



INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'abril','Salario','receita',6000
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'abril','alimentação','despesa',1500
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'abril','hotel','despesa',850
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'abril','cinema','despesa',900
);
INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES (
    'abril','bulachas','despesa',3000
);