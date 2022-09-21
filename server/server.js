const express= require ("express");
const cors=require("cors");
const app=express();
app.use(cors())
app.use(express.json());
app.use("/",express.static("../client"))


const lancamentos=[
    {mes: "janeiro",categoria:"Salario",tipo:"receita",valor:3000},
    {mes: "janeiro",categoria:"Aluguel",tipo:"despesa",valor:1000},
    {mes: "janeiro",categoria:"Conta de Luz",tipo:"despesa",valor:200},
    {mes: "janeiro",categoria:"Conta de Água",tipo: "despesa",valor:100   } ,
    {mes: "janeiro",categoria:"Internet",tipo: "despesa", valor:100  },
    {mes:"fevereiro", categoria:"Salario",tipo:"receita",valor:3000},
    {mes:"fevereiro", categoria:"Aluguel",tipo: "despesa",valor:1200},
    {mes:"fevereiro", categoria:"Conta de Luz", tipo:"despesa",valor:250},
    {mes:"março", categoria:"Salario",tipo:"receita",valor:4000},
    {mes:"março", categoria:"Aluguel",tipo:"despesa",valor:1200},
    {mes:"março", categoria:"Conta de Luz",tipo:"despesa",valor:200},
    {mes:"março", categoria:"Conta de Água",tipo:"despesa",valor:100},
]

app.get("/api/lancamentos",(req,res)=>{
    res.json(lancamentos);
})

app.post("/api/lancamentos",(req,res)=>{
    const lancamento=req.body
    lancamentos.push(lancamento);
    res.send();
})
app.listen(3000)