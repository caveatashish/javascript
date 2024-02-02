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


