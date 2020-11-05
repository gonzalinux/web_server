const express = require('express');
const path = require('path');

//creamos una instancia de express
const app = express();
app.set('view engine','ejs')
app.set("views",path.join(path.join(__dirname, '/views')))
app.engine("html", require("ejs").renderFile);
// puerto donde queremos que escuche nuestro servidor
const port = 80;
app.set('port',port)


// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


//rutas
app.get('/',(req ,res)=>{
    res.render("index.html",{ip:req.connection.remoteAddress})


})

// levantamos nuestro servidor en el puerto seleccionado
app.listen(port,"localhost", () => {
    console.log(`Servidor iniciado en el puerto: ${port}`);
});