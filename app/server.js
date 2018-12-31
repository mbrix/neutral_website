const app = require('./index')
const config = require('./config')

app.listen(config.express.port, config.express.ip, (error) => {
  if (error) {
    log.error('Unable to listen for connections', error)
    process.exit(10)
  }

  console.info(`express is listening on http://${config.express.ip + ':' + config.express.port}`)
})
