const http = require('http')

const port = 8080

const server = http.createServer((req, res) => { // A pessoa manda o request(req) e o servidor devolve a response(res)
    if (req.url === '/home') { // http://localhost:8080/home
        res.writeHead(200, { "Content-Type": "text/html" }) // A response é do tipo html
        res.end('<h1>home page</h1>')
    }

    if(req.url === '/users'){
        const users = [{
            name: 'Bruno Cantarelli',
            email: 'cantarellibruno2004@gmail.com'
        },
        {
            name: 'Lucas Cantarelli',
            email: 'lucascantarelli2004@gmail.com'
        }
    ]

    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(users)) // Transforma o JSON em string para poder enviar para o servidor 
    }
})

server.listen(port, () => console.log(`Rodando na port ${port}!`)) 
