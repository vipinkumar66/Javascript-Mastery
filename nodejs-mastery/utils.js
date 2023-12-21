// So this is an example of module
//Since I am not exporting this one in the module so this will be the secret for this module
const names = ["Vipin", "Mahesh"]

const sayHi = (names) =>{
    console.log(`These are the ${names}`);
}
// function(names) {
//     console.log(`These are the ${names}`);
// }

module.exports = sayHi