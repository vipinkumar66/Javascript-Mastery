// This is also a module but here we are seeing how we can use that module with the help of the require function
require('./add') // => For this one we have not done any module.export

const sayHi = require('./utils')
sayHi("vipin")