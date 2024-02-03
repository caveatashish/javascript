/*
The map() function in JavaScript is a higher-order function that takes an array and a callback function as arguments. 
The callback function is applied to each element of the array, and the results are returned in a new array.

The map() function is commonly used to transform the elements of an array. 
For example, you could use the map() function to double the values of all the elements in an array, or to convert all the elements in an array to strings.
*/

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNumbers.map((num)=>num + num)
console.log(newNum);

const newNum2 = myNumbers
                        .map((num)=> num * 10)
                        .map((nu)=> nu + 1)
                        .filter((n)=> n>40)
console.log(newNum2);
