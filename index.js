const app = require('./config/express')();
const port = app.get('port');
const routes = require('./routes');
app.use(routes);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});