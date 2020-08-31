class UserController {

    index(req, res) {
        res.status(200).send({
            message: "Controle criado com sucesso"
        });
    }
    store(req, res) { }
    show(req, res) { }
    update(req, res) { }
    destroy(req, res) { }
}
module.exports = new UserController();