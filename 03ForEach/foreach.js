const coding = ['java', 'c++','javascript']

coding.forEach((cod)=>{
    console.log(cod)
})

console.log("------Second Way------")
coding.forEach(function (cod){
    console.log(cod)
})

console.log("------Third Way------")
function printMe(item)
{
    console.log(item)
}
coding.forEach( printMe);  // need to give the reference of function i.e withou paranthesis ()

console.log("------Fourth Way------")
// foreach function haave access to many parameter. it has access to index, whole array
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})

const ratings = [1,2,3,4,5,6,7,8,9];

const myRating = ratings.filter((num)=> num > 4)
console.log(myRating);

const newRating = ratings.filter((num)=>{
    return num>4   // we have to explict use return if we are not using  return in one line or if we are using scope
})
console.log(newRating);

const addTwo = (num1, num2)=> num1+ num2
console.log(addTwo);


console.log("Adding condition to foreach loop")
const newNum=[]

ratings.forEach((num)=>{
    if(num > 4) {
        newNum.push(num)
    }
})
console.log(newNum)

