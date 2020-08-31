const db = require('../../config/database');
const table = "users";
class UserController {

    async index(req, res) {
        try {
            const users = await db.select().table(table);
            return res.json(users);
        } catch (error) {
            return res.status(400).json({ error: err.message });
        }
    }
    async store(req, res) {
        try {
            const users = await db(table).insert({ name: "" });
            return users;
        } catch (error) {
            return res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) { }
    async update(req, res) { }
    async destroy(req, res) { }
}
module.exports = new UserController();