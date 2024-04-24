var data = [
  {
    type: "accompagnement",
    nom: "riz",
    ingredients: ["riz", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "puree",
    ingredients: ["pure", "lait", "eau"],
    duration: 10,
    ustensile: ["casserole"],
  },
  {
    type: "accompagnement",
    nom: "salade",
    ingredients: ["salade"],
    duration: 4,
    ustensile: ["saladier"],
  },
  {
    type: "accompagnement",
    nom: "frite",
    ingredients: ["patate", "huile"],
    duration: 13,
    ustensile: ["friteuse"],
  },
  {
    type: "assaisonnement",
    nom: "curry",
    ingredients: ["epice curry"],
    duration: 3,
    ustensile: [],
  },
  {
    type: "assaisonnement",
    nom: "tandoori",
    ingredients: ["epice tandoori"],
    duration: 3,
    ustensile: ["concaseur"],
  },
  {
    type: "assaisonnement",
    nom: "sauce forestier",
    ingredients: ["creme ", "champignon", "beurre", "eau"],
    duration: 3,
    ustensile: ["saladier", "mixeur"],
  },
  {
    type: "assaisonnement",
    nom: "paprika",
    ingredients: ["epice paprika"],
    duration: 3,
    ustensile: ["concaseur"],
  },
  {
    type: "plat",
    nom: "boeuf",
    ingredients: ["viande", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "poulet",
    ingredients: ["poulet", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "saumon",
    ingredients: ["saumon", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
  {
    type: "plat",
    nom: "steak hache",
    ingredients: ["steak hache", "huile"],
    duration: 7,
    ustensile: ["poele"],
  },
];

var type_element = {
  accompagnement: [],
  plat: [],
  assaisonnement: [],
};

/* Les recettes de cuisine :
Créer un tableau d’object de recette de 10 recette differente et aléatoire avec les propriétés « nom » « ingrédients[] » « duration » « ustensile »

Exemple : 
{
    nom: « Riz Boeuf Curry »
    ingredients: [viande, huile, riz, eau, curry ]
    duration: 20
    ustensile : [poele, carresole]
}

*/
var text = "";
for (var i = 0; i < data.length; i++) {
  if (data[i].type === "accompagnement")
    type_element.accompagnement.push(data[i]);
  else if (data[i].type === "plat") type_element.plat.push(data[i]);
  else type_element.assaisonnement.push(data[i]);
}

var recettes = [];
for (var i = 0; i < 10; i++) {
  var accompagnement =
    type_element.accompagnement[
      Math.round(
        Math.random() * (type_element.accompagnement.length - 1 - 0) + 0
      )
    ];
  var plat =
    type_element.plat[
      Math.round(Math.random() * (type_element.plat.length - 1 - 0) + 0)
    ];
  var assaisonnement =
    type_element.assaisonnement[
      Math.round(
        Math.random() * (type_element.assaisonnement.length - 1 - 0) + 0
      )
    ];
  var recette = `${accompagnement.nom} ${plat.nom} ${assaisonnement.nom}`;
  var object_recette = {
    nom: recette,
    ingredients: [
      ...accompagnement.ingredients,
      ...plat.ingredients,
      ...assaisonnement.ingredients,
    ],
    duration: accompagnement.duration + plat.duration + assaisonnement.duration,
    ustensile: [
      ...accompagnement.ustensile,
      ...plat.ustensile,
      ...assaisonnement.ustensile,
    ],
  };
  recettes.push(object_recette);

  //   console.log("\nNom : ", object_recette.nom);
  //   console.log("Durée : ", object_recette.duration);
  //   console.log("Ingredients : ", object_recette.ingredients.join(", "));
  //   console.log("Ustensiles : ", object_recette.ustensile.join(", "));
  text += `Nom: ${object_recette.nom}/ durée :${
    object_recette.duration
  } / Ingredients:${object_recette.ingredients.join(
    ","
  )} / ustensiles: ${object_recette.ustensile.join(",")}\n`;
}
const fs = require("fs");
var folder_exist = fs.existsSync("recettes");

if (!folder_exist) fs.mkdirSync("recettes");
fs.appendFileSync("recettes/recette-24042024.txt", text);
console.log(text);
