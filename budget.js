


var data=[
    {
        type: "sante",
        descriptions: ["probleme avc", "rdv scanner",],
        price_max: 1000,
        price_min:300
    },
    {
        type: "loisir",
        descriptions: ["sortie cinema", "sortie bowling",],
        price_max: 10,
        price_min:100
    },
    {
        type: "Frais",
        descriptions: ["loyer", "facture ",],
        price_max:500,
        price_min:100  
    },
    {
        type: "voiture",
        descriptions: ["entretient annuel", "acaht nouveau pneu",],
        price_max: 600,
        price_min:100
    },
]

var wallet ={
    depenses:[]
}
var max= 1713251378
var min = 71325378
for(var i=0; i<1000; i++){
    var object_type= data[Math.round(Math.random()*((data.length-1)-0) +0)]
    var object_description= object_type.descriptions[Math.round(Math.random()*((object_type.descriptions.length-1)-0) +0)]
    wallet.depenses.push({
        date:Math.round(Math.random()*(max-min) +min),
        type:object_type.type,
        price: Math.round(Math.random()*((object_type.price_max-object_type.price_min) +object_type.price_max)),
        description: object_description,

    } )

}

console.log(wallet.depenses)
console.log("taille tableau ", wallet.depenses.length)
