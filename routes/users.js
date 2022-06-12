const express = require("express")

const router = express.Router()


//Muestra en pantalla
router.get("/users", (peticion,respuesta) =>{
    respuesta.send("Hello, World")
})

router.get("/login", (peticion,respuesta) =>{
    respuesta.json({
        ruta:"LOGIN"
    })
})

module.exports = router