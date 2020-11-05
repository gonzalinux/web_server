const express = require('express');
const path = require('path');
let sassMiddleware = require('node-sass-middleware')

//creamos una instancia de express
const app = express();
app.set('view engine','ejs')
app.set("views",path.join(path.join(__dirname, '/views')))
app.engine("html", require("ejs").renderFile);
app.use(sassMiddleware({
    src: path.join(__dirname, 'bootstrap'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}))

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