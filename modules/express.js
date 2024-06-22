// Fazendo a mesma coisa do arquivo http.js, porem utilizando Express. 
// Esse é o modo recomendado de ser feito

const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello World!</h1>')
})

app.get('/users', (req, res) => {
    const users = [{
        name: 'Bruno Cantarelli',
        email: 'cantarellibruno2004@gmail.com'
    },
    {
        name: 'Lucas Cantarelli',
        email: 'lucascantarelli2004@gmail.com'
    }]

    res.status(200).json(users)
})

const port = 8080

app.listen(port, () => console.log(`Rodando com express na porta ${port}`))