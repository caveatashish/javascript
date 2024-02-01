//Singleton will be creted using   object.create

const JsUser={
    firstName : "Ashish",
    lastName : "Sharma",
    email: "ashish.kumar@gmail.com"
}

console.log(JsUser)
//console.log(JsUser.firstName)

JsUser.greeeting = function()
{
    console.log ("Hello Js User")
}
console.log(JsUser.greeeting) //[Function (anonymous)]
console.log(JsUser.greeeting())  //Hello Js User