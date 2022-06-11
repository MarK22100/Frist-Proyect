// levantando modulos externos
const express = require("express")

//Definiendo el puerto
const port = 4000

const app = express()

//Muestra en pantalla
app.get("/", (peticion,respuesta) =>{
    respuesta.send("Hello, World")
})
/* app.post("/post",(req,res)=>{
    res.send("Metodo Post")
}) */

app.listen(port,()=>{
    console.log("Listening in: http://localhost:"+port)
})
