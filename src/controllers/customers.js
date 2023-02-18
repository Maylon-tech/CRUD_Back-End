const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'    // Titulo padrão para as paginas repetidas

function index(req, res) {
    res.render('register', {
        //pageTitle:'Register',
        title: defaultTitle,
    })
}


async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,  // Chave e Valor
    })

    register.save()

    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com Sucesso.'
    })
}


async function list(req, res) {
    const users = await CustomersModel.find()

    res.render('list', {
        //pageTitle:'Users',
        title: 'Listagem de usuarios',
        users,
    })
}


async function formEdit(req, res) {
    //console.log(req.query)
    const { id } = req.query
    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title:'Editar Usuario',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params
    const user = await CustomersModel.findById(id) // Procurando usuário pele ID dele.

    // Tendo acesso as infomações do user para editar os campos do INPUT.
    user.name = name
    user.age = age
    user.email = email

    user.save()

        // Aqui vai renderizar apos Editar a mesma página de edit PORÈM com uma mesagem, (message)
     res.render('edit', {
         title: 'Editar Usuario.',
         user,
         message:'Usuario alterado com sucesso.'
     })

}

async function remove(req, res) {
    const { id } = req.params

    const remover = await CustomersModel.deleteOne({ _id: id })
   
    if(remover.ok) {
        res.redirect('list')
    }

}



function products(req, res) {

    res.render('products', {
        //pageTitle:'Products',
        title: 'Páginas de Produtos',
        users: []
    })
}

module.exports = {
    add,
    index,
    list,
    formEdit,
    edit,
    remove,
    products,
}