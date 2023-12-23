function logInChecker(username="User"){
    if(!username){
        console.log("Enter username please!!")
        return
    }
    return `Hey ${username} Welcome back!!`
}

console.log(logInChecker());
console.log(logInChecker("Vipin"));

// This is how we write the same function in python
//def loginchecker(username="User"):
// if not username:
// print("Please enter yout username")
// else: return (f"Hey {username} welcome back")


// When we are not aware of ki kya aaega or kitna aaega

function restoperator(...data){
    console.log(data) // Here we will get the data in the array format
}

restoperator(1,2,4,5,6,7)

// And if we see with respect to python than
// def argsuseage(*data):
// print(data)
// argsusage(1,2,3,4,5,6,7)

