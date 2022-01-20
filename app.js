const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000;

//handlebars
//app.set('view engine', 'hbs');
//hbs.registerPartials(__dirname + '/views/partials');
//app.engine('html', require('hbs').__express);
//Servir contenido estatico
app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})
/* 
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'ramon carcamo',
        titulo: 'Curso de nodejs'
    });
})
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'ramon carcamo',
        titulo: 'Curso de nodejs'
    });
})
app.get('/elements', (req, res) => {
    res.render('generic',{
        nombre: 'ramon carcamo',
        titulo: 'Curso de nodejs'
    });
})
app.get('*', (req, res) => {
  res.sendFile(__dirname+'/public/404.html')
}) */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})