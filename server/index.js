const express = require("express");
const conectDB = require('./config/db')
const cors = require("cors");

const app = express();


//FUNCION PARA CONECTAR A LA BASE DE DATOS
conectDB();

app.use(cors());

app.use(express.json());

app.use('/api/transferencias', require('./routes/transferencia'));
app.use('/api/destinatarios', require('./routes/destinatario'));


//INCIALIZADOR DEL SERVIDOR
app.listen(4000, ()=>{
    console.log("Servidor corriendo en el puerto 4000")
})