let rectangle ={
    x:50,
    y:150,
    largeur:30,
    longeur:70,

}
rectangle.unite = "cm"
let perimetre= 2*(rectangle.largeur + rectangle.longeur)
let area = rectangle.largeur*rectangle.longeur

 let diagonale_rectangle=  Math.sqrt(Math.pow(rectangle.longeur, 2) + Math.pow(rectangle.largeur, 2))
 console.log("\nx :",rectangle.x,rectangle.unite)
 console.log("y :",rectangle.y, rectangle.unite)
 console.log("perimetre :" ,perimetre,rectangle.unite)
 console.log( "area:", area,rectangle.unite+"²")
console.log("diagonale:" ,( Math.round(diagonale_rectangle* 100) / 100 ) , rectangle.unite,"\n")

 
