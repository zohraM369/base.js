var age = 15;
              //  Boolean"" pour convertir resuktat vrai ou fau  console.log(age>=18) 

var authorized= false
if(age>= 18)
{
    console.log("tu es majeur")
    authorized = true
}
 else{
        console.log("tu es mineur")
 }
// console.log("salut comment ca va")
// console.log(`autorise : ${authorized}`)
var authorized2=  age >= 18 ? true : false     // condition ternaire
console.log(`autorise : ${authorized2}`)