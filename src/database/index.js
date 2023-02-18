
const mongoose = require('mongoose')

function connect() {
    // Conectando ao Banco de Dado
    // mongoose.set('useNewUrlParser', true)
    // mongoose.set('useUnifiedTopology', true)
    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appName=MongoDB%20Compass&ssl=false')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('conectado com banco.')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect,
}