const express= require ("express");

const pgp=require("pg-promise")

const cors=require("cors");
const app=express();
app.use(cors())
app.use(express.json());
app.use("/",express.static("../client"))

const connection=pgp()("postgres://postgres:777@localhost:5432/app");


app.get("/api/lancamentos",async (req,res)=>{
    const lancamentos= await connection.query("select * from financas_pessoais.lancamento")
   console.log(lancamentos);
    res.json(lancamentos);
})

app.post("/api/lancamentos",async (req,res) =>{
    const lancamento=req.body

    await connection.query ("INSERT INTO financas_pessoais.lancamento (mes,categoria,tipo,valor) VALUES ($1,$2,$3,$4)",[lancamento.mes,lancamento.categoria,lancamento.tipo,lancamento.valor]);

    res.send();
})
app.listen(3000)