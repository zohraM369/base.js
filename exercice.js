// 
var data=[
    {
       type: "sante",
       description: ["rdv dentiste", "scanner"],
       prix_max: 500,
       prix_min: 100,
    },
    {
        type: "loyer",
        description: ["payement", "electricite"],
        prix_max: 200,
        prix_min: 100,
     },
     {
         type: "voiture",
         description: ["changer pneu", "gasoile"],
         prix_max: 600,
         prix_min: 100,
      }

]
var wallet ={
    depenses:[]
}
var max= 1713251378
var min = 71325378
for (var i=0; i<1000; i++){
    var object_type= data[Math.round(Math.random()*((data.length-1)-0) +0)]
    var object_description= object_type.description[Math.round(Math.random()*((object_type.description.length-1)-0) +0)]
    wallet.depenses.push({
        date: Math.round(Math.random()*(max-min)+min),
        type:object_type.type,
        price:Math.round(Math.random()*(object_type.prix_max-object_type.prix_min)+object_type.prix_min),
        description:object_description,


    } )
}
console.log(wallet.depenses)