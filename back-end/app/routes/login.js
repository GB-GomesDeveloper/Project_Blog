const express = require("express");
const router = express.Router();

    router.get('/login', (req, res) => { // Definindo o endpoit 
        const token = req.query.token;
        const user = req.query.user;
        const password = req.query.password;
        if (!token &&!user && !password) {
            const stats = {
                "Erro": "Parametros não fornecidos"
            }
            res.send(stats);
        }
    })

module.exports = router;