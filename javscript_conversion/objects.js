const mykey = Symbol("key1");

const personDetail = {
    name:"Vipin",
    "full name": "Vipin kumar",
    [mykey]: "mykey1", //remember this is the way to include a symbol inside the object
    email: "Vipin@gmail.com",
    loggedIn: false,
    lastloggedin: ["Monday"],

}

// Mostly we use the dot notation only
console.log(personDetail.name);
// But in such cases where we have a gap in the keys there we use this
console.log(personDetail["full name"]);
// Here in case of symbol we have to take this approach
console.log(personDetail[mykey])

// We can modify the object also like this:
console.log(personDetail.email = "vipin@yahho.com");
// But if you want to freeze this than we can do this
// Object.freeze(personDetail);

personDetail.email = "vipin@gpt.com";
console.log(personDetail.email);

// We can also assign the function
personDetail.greeting  = function(){
    console.log(`Hey good morning ${this["full name"]}`)
}
console.log(personDetail.greeting());
