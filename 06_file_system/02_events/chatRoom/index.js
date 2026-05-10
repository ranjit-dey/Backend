const ChatRoom = require('./chatRoom.js')

const chat = new ChatRoom()

chat.on('join', (user) => {
    console.log(`${user} has joined the chat.`)
})
chat.on('message', (user, message) => {
    console.log(`${user}: ${message}`)
})
chat.on('leave', (user) => {
    console.log(`${user} has left the chat.`)
})


/*== SIMULATING THE CHAT ==*/
chat.join('Alice')
chat.join('Bob')

chat.sendMessage('Alice', "Hey everyone! I am Alice")
chat.sendMessage('Bob', "Hey everyone! I am Bob")
chat.sendMessage('Alice', "Nice to meet you Bob!")
chat.sendMessage('Alice', "Where are you from?")
chat.sendMessage('Bob', "Hi Alice, I am Bob, good to see you..")
chat.sendMessage('Alice', "I am from India 😊")

chat.leave('Alice')
chat.sendMessage('Alice', 'Hi')
chat.leave('Bob')


