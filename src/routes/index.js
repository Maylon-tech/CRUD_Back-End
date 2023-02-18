const router = require('express').Router()

const CustomersController = require('../controllers/customers')      // Nome = Padrão de projetos
const IndexController = require('../controllers/index')


// Rotas 
router.get('/', IndexController.index)

// Registro 
router.get('/register', CustomersController.index)  // Essa Rota Busca o index. dentro do CustomersController.
router.post('/register/add', CustomersController.add)


// Rota - Listar
router.get('/list', CustomersController.list)

// Rota - Editar
router.get('/edit', CustomersController.formEdit)  // Vai pra pagina Editar.
router.post('/edit/:id', CustomersController.edit)   // Sai da pagina Editar atualizando os dados.

// Rota - Remover
router.get('/remove/:id', CustomersController.remove)



router.get('/products', CustomersController.products)

// Quando bater nessa Rota de addicionar um novo registro - vai chamar a função { CustomersController.add } la do Controller
module.exports = router