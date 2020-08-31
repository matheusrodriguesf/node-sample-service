const knex = require('knex');
const config = require('../../knexfile').development;
const db = knex(config);
class UserController {

    async index(req, res) {
        await db.select().table("users");
    }
    async store(req, res) {
        await db("users").insert({ name: "" });
    }
    async show(req, res) { }
    async update(req, res) { }
    async destroy(req, res) { }
}
module.exports = new UserController();