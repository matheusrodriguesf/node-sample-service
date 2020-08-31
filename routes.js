const router = require('express').Router();
const UserController = require('./app/controllers/UserController');
router.get('/users', UserController.index);
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node API Rest",
        version: "0.0.1"
    });
});
module.exports = router;