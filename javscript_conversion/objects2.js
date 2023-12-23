// singleton object
const singletonobject = new Object();
console.log(singletonobject);

const secondObject = {
    name:"vipin",
    fullname:{
        firstname:"vipin",
        lastname:"kumar"
    },
    isloggedIn: false
};
console.log(secondObject.fullname?.firstname);

// Merging many objects
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

console.log(Object.keys(secondObject));
console.log(Object.values(secondObject));
console.log(Object.entries(secondObject)); //This converts the key and value in the array format
console.log(secondObject.hasOwnProperty("secondObject"));

//**************************** */ Object Destructuring ***************************

const {fullname: name} = secondObject
console.log(name);




