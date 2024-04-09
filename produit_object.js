let produit = {        //declare objet
    nom: "ordinateur",   // affecte propriété  nom
    prix: 1000,           //affecte prix
    stock: 10,           // affecte stock
    nombreVendu: 5

}
//console.log(produit)
produit.gain=produit.prix*produit.nombreVendu
//console.log(produit)
produit.valeur_stock = produit.prix*produit.stock
console.log("\n nom" , produit.nom, "gain:", produit.gain, "valeur_stock:", produit.valeur_stock)
produit.cost = 300
produit.total_cost = produit.cost*(produit.nombreVendu + produit.stock)
console.log("somme d'achat des produits:" , produit.total_cost)
let benefice_par_produit= produit.prix - produit.cost
console.log("benefice par produit:" , benefice_par_produit)
let pourcentage_benifice = 100*(benefice_par_produit/produit.prix)
console.log("pourcentage benefice par produit:", pourcentage_benifice+"%", "~" , Math.round(pourcentage_benifice)+"%" ,"\n")