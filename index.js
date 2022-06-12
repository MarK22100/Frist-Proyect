// levantando modulos externos
const express = require("express")

//Definiendo el puerto
const port = 4000

const app = express()

//importando router
const users = require("./routes/users")

//Usando router
app.use(users) // Le decimos a user que utilice el router



app.listen(port,()=>{
    console.log("Listening in: http://localhost:"+port)
})
