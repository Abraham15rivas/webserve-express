const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// partials de hbs
hbs.registerPartials(__dirname + '/views/partials')

// Template engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
            name: 'abraham',
        })
        // let ouput = {
        //     name: 'Abraham',
        //     age: 21,
        //     url: req.url
        // }
        // res.send(ouput)
})

app.get('/about', (req, res) => {

    res.render('about', {
        hello: 'Mundo',
    })
})

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})