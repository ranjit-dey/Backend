const EventEmitter = require('node:events')

class chatRoom extends EventEmitter{
    constructor(){
        super()
        this.users = new Set()
    }

    join(user){
        this.users.add(user)
        this.emit('join', user)
    }

    leave(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit('leave', user)
        }else{
            console.log(`${user} not in the chatRoom`)
        }
    }

    sendMessage(user, message){
        if(this.users.has(user)){
            this.emit('message', user, message)
        }else {
            console.log(`${user} not in the chatRoom`)
        }
    }
}

module.exports = chatRoom
