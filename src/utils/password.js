const bcrypt = require('bcrypt')

        // Essa Função tem o propósito de cryptografar a senha vindo do input do User.

// A senha virá do Input = do usuário pelo pwd.
async function crypto(pwd) {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

    return password 
}

module.exports = {
    crypto,
}