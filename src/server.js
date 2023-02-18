const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')


const app = express()

// Conexão com o Banco de Dados
db.connect()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita o server para receber dados via POST (Formulario)
app.use(express.urlencoded({ extended: true }))

// Definindo as Rotas 
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => {  // Middleware
    res.send('Página não encontrado.!!')
})

// Executando o Servidor
const PORT = process.env.PORT || 9090
app.listen(PORT)