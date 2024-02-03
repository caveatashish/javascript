// break can't be use in foreach 
/*
If you want to break out of the loop on some condition, then you will have to use any of the following methods:

for loop
for…of or for…in loop
Array.some()
Array.every()
Array.find()
*/
let numbers = [2, 4, 5, 8, 12]
let odd = 5;

numbers.forEach(function(number) {
    if (number === odd) {
       // break; // oops, this isn't gonna work!
    }
})


/*
No, you cannot return from a forEach in JavaScript. 
The forEach() method is designed to iterate over an array and execute a callback function for each element. 
It does not return a value, so it is not possible to return from the forEach() method itself.
*/
const ratings = [1,2,3,4,5,6,7,8,9,10];
console.log("Adding condition to foreach loop")
const newNum=[]

ratings.forEach((num)=>{
    if(num > 4) {
        newNum.push(num)
    }
})
console.log(newNum)