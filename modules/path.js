const path = require('path')

// Apenas o nome do arquivo atual 
console.log(path.basename(__filename))

// Nome do Diretório atual
console.log(path.dirname(__filename))

// Etensão do arquivo
console.log(path.extname(__filename))

// Criar um objeto path
console.log(path.parse(__filename))

// Junte caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste2', 'teste.html'))

