const EventEmitter = require('node:events')

class Chat extends EventEmitter{
    /**
     * hello there this is a comment
     * @param {string} msg takes a message
     */
    sendMessage(msg){
        console.log(`Message sent : ${msg}`)
        this.emit('messageReceived', msg)
    }
}

const chat = new Chat()
chat.on('messageReceived', (msg) => {
    console.log(`New message : ${msg}`)
})

chat.sendMessage("Hello Ranjit")
