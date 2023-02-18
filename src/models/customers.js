const mongoose = require('mongoose')

// Definindo as collection da Tabela Schema_mongoose.

            // PRINCÍPIOS DE M V C  == Model View Controller

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

const Model = mongoose.model('customers', schema)

//  Será Criando num banco de dado ( mongoDB) chamado projeto-crud...

module.exports = Model