const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', { message })
    }
}

const logger = new Logger()
const logFile = './eventlog.txt'

const logToFile = (event) => {
    const logMessage = `${new Date().toLocaleTimeString()} - ${event.message} \n`
    fs.appendFileSync(logFile, logMessage)
}

logger.on('message', logToFile)

setInterval(() => {
    const memoryUsage = os.freemem() / (1024 * 1024 * 1024).toFixed(2)
    logger.log(`Current memory usage: ${memoryUsage.toFixed(2)} GB`)
}, 3000)

logger.log('Application started')
logger.log('Application event occurred')
