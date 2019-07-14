const variables = require('./bin/variables')
const app = require('./app')

app.listen(variables.Api.port, () => {
    console.info(`Servidor rodando na porta ${variables.Api.port}.`)
})