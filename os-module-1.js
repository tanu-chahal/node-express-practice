const osModule = require('os')
const user = osModule.userInfo()
//info about the current user
//console.log(user);

//system uptime in seconds
console.log(`the system uptime is ${osModule.uptime()} seconds.`);

//system info
const currentSystem = {
    name: osModule.type(),
    release: osModule.release(),
    totalMem: osModule.totalmem(),
    freeMem: osModule.freemem()
}
console.log(currentSystem)
