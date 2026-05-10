/**
 * Node.js EventEmitter - Complete Example
 * --------------------------------------
 * EventEmitter is used for handling asynchronous, event-driven architecture.
 * Common use cases:
 * - Notifications (email, push alerts)
 * - Order systems (order placed, shipped, delivered)
 * - Logging systems
 * - Real-time apps (chat apps, live updates)
 */

const EventEmitter = require('events')

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter()

/* =========================================================
   🔹 BASIC EVENTS
   ========================================================= */

/**
 * Example Use Case:
 * When a user logs in → greet them
 */
eventEmitter.on('greet', () => {
    console.log('Hello and welcome to events in Node.js')
})

/**
 * Example Use Case:
 * E-commerce system → when an order is delivered
 */
eventEmitter.on('delivered', (product) => {
    console.log(`📦 Your ${product} has been delivered successfully`)
})

/**
 * Runs ONLY ONCE
 * Example Use Case:
 * - Send welcome notification
 * - Trigger one-time setup
 */
eventEmitter.once('pushNotify', () => {
    console.log('🔔 This notification runs only once')
})

/* 🔸 Emit Events */
eventEmitter.emit('greet')

eventEmitter.emit('delivered', 'perfume')
eventEmitter.emit('delivered', 't-shirt')

eventEmitter.emit('pushNotify')
eventEmitter.emit('pushNotify') // ignored
eventEmitter.emit('pushNotify') // ignored

console.log("\n==============================\n")


/* =========================================================
   🔹 MULTIPLE LISTENERS ON SAME EVENT
   ========================================================= */

/**
 * Example Use Case:
 * When user performs an action:
 * - Log activity
 * - Trigger analytics
 * - Send notification
 */

const talkToGod = () => console.log('🙏 Namaskar God, how are you?')
const prayToGod = () => console.log('🙏 Please help me today')
const sayMyName = (name) => console.log(`👋 Hey ${name}, how are you?\n`)

// Attach multiple listeners to same event
eventEmitter.on('sayName', talkToGod)
eventEmitter.on('sayName', prayToGod)
eventEmitter.on('sayName', () => sayMyName('Ranjit'))

// Emit event (all listeners execute)
eventEmitter.emit('sayName')
eventEmitter.emit('sayName')

/* 🔍 Debugging: List all listeners */
console.log('Listeners:', eventEmitter.listeners('sayName'))
console.log('Listener count:', eventEmitter.listenerCount('sayName'))

console.log("\n==============================\n")


/* =========================================================
   🔹 REMOVING LISTENERS
   ========================================================= */

/**
 * Example Use Case:
 * - Stop sending notifications
 * - Disable a feature dynamically
 */

// Remove specific listener
eventEmitter.removeListener('sayName', talkToGod)
// OR modern way:
// eventEmitter.off('sayName', talkToGod)

eventEmitter.emit('sayName') // now only 2 listeners run

console.log('After removal:', eventEmitter.listeners('sayName'))

console.log("\n==============================\n")


/* =========================================================
   🔹 REMOVE ALL LISTENERS
   ========================================================= */

/**
 * Example Use Case:
 * - Reset system
 * - Cleanup before shutdown
 */

eventEmitter.removeAllListeners('sayName')

eventEmitter.emit('sayName') // nothing happens

console.log('After removing all:', eventEmitter.listeners('sayName'))

console.log("\n==============================\n")


/* =========================================================
   🔹 ERROR HANDLING (IMPORTANT)
   ========================================================= */

/**
 * If an 'error' event is emitted and no listener exists,
 * Node.js will crash.
 */

eventEmitter.on('error', (err) => {
    console.error('❌ Error occurred:', err.message)
})

// Emit error safely
eventEmitter.emit('error', new Error('Something went wrong'))


/* =========================================================
   🔹 BONUS: REAL-WORLD SIMULATION
   ========================================================= */

/**
 * Simulating order lifecycle
 */

eventEmitter.on('orderPlaced', (orderId) => {
    console.log(`🛒 Order ${orderId} placed`)
})

eventEmitter.on('orderShipped', (orderId) => {
    console.log(`🚚 Order ${orderId} shipped`)
})

eventEmitter.on('orderDelivered', (orderId) => {
    console.log(`✅ Order ${orderId} delivered`)
})

// Flow
eventEmitter.emit('orderPlaced', 101)
eventEmitter.emit('orderShipped', 101)
eventEmitter.emit('orderDelivered', 101)
