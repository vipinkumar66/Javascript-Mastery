//array

const ArrayData = [1,2,3,4,5,6,7]

// console.log(ArrayData.findIndex("41"));
// console.log(ArrayData.slice(1,3));
// console.log(ArrayData.splice(1,3)); //=> This also affects the original array
console.log(ArrayData.shift());
console.log(ArrayData)

ArrayData.unshift(4); //-> This affects the original array
console.log(ArrayData)
console.log(ArrayData.join("-"));
console.log(ArrayData.includes(11));

// Let's go through some more detail related to the array

const array1 = [1,2,3,4,5];
const array2 = ["vipin", "Lamba", "Mahesh"];

// This is how we can use it (it is similar to the extends method in the python list)
const concatArray = array1.concat(array2);
console.log(concatArray);

// But there is one more way to achieve this and that we call as Spread Operator
console.log([...array1, ...array2]);

// But what we if we have layers of array
const array3 = [1,23, 4,[1,3,4], "vipin", [13,4,6, ["mahesh", "wow"]]]
// Now to handle this we have two options: Method used will be ()
const flatArray = array3.flat(Infinity); //For this we don't need to metion the level
const flatArrayReplica = array3.flat(4); //Here we have mentioned the level

console.log(flatArray);
console.log(flatArrayReplica);

// Some other methods of the array

const number1 = 10;
const number2 = 20;
const number3 = 30;

console.log(Array.isArray("Vipin")); //This is going to check whether this is an array or not
console.log(Array.from("Vipin")); //This will convert it to array
console.log(Array.of(number1, number2, number3)); //We pass set of elemets to it and it converts those into the array