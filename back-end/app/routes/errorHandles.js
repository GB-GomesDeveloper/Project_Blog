

const notFoundedRequest = (req, res) => {
    res.status(404).json('Rota não encontrada')
}

const errorRoute = (err, req, res, next) => {
    console.log(err)
    res.status(500)
}

module.exports = {notFoundedRequest, errorRoute};