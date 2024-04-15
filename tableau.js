let personnage = {
    firstName: "zohra",
    lastName :"Benazzouz",
    userName: "zohraben",
    email:"chadly_zohra@hotmail.com"

}
let voisin = personnage
console.log(voisin)
console.log(personnage)
personnage.userName = "Benzohra"
console.log(voisin)
console.log(personnage)
voisin = {...personnage}
personnage.userName ="z"
console.log(voisin)
console.log(personnage)

