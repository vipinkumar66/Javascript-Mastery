// The way to import the os module
const os = require('node:os');

// Info about current user
console.log(os.userInfo())

// How long the computer is running (system uptime in seconds)
console.log(`The system is running from ${os.uptime()} seconds`)

const currentOs = {
    name : os.type(),
    relaease : os.release(),
    memory : os.totalmem(),
    freememory: os.freemem()
}

console.log(currentOs);