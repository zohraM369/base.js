let produit = {        //declare objet
    nom: "ordinateur",   // affecte propriété  nom
    prix: 650,           //affecte prix
    stock: 10,           // affecte stock
    nombreVendu: 5

}
//console.log(produit)
produit.gain=produit.prix*produit.nombreVendu
//console.log(produit)
produit.valeur_stock = produit.prix*produit.stock
console.log("nom" , produit.nom, "gain:", produit.gain, "valeur_stock:", produit.valeur_stock)