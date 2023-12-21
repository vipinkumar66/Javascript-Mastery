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

