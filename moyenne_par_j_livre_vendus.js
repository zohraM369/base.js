let livreVendusDansSemaine = 600                                 // donner variable pour nombre de livre vendu par semaine 
let MoyenneParSemaine = livreVendusDansSemaine + 50             // la somme de livre vendu par semaine avec 50
let LivreVenduParJour = Math.round(MoyenneParSemaine / 7)        // calcule livre vendu par jou 
console.log(LivreVenduParJour  + " vente par jour")                      // affichiage livre vendu par jour