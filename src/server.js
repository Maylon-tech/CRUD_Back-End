const express = require('express')
const path = require('path')

const app = express()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita o server para receber dados via POST (Formulario)
app.use(express.urlencoded({ extended: true }))

// Rotas 
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 error (not found)
app.use((req, res) => {  // Middleware
    res.send('Página não encontrado.!!')
})

// Executando o Servidor
const PORT = process.env.PORT || 9090
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))