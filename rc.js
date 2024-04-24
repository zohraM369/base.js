// // les recettes de cusine:
// // crerr un tableau d-objet avec les propriets "nom", "ingredient[]", "duration ", "ustensile"
// // var data= [{
// //     type:"accompagnement"
// //     nom:"riz"},
// //     {
// //         type:"assaisonnement"
// //         nom:"curry"
// //         ingredient:"epice curry"
// //     },
// //     {
// //         type:"plat"
// //         nom:"viande",
// //         ingredient:[]
// //     }
// // }
// var data = [
//   {
//     type: "accompagnement",
//     nom: "riz",
//     ingredient: ["riz", "eau"],
//     duration: 10,
//     ustensile: ["casserole", "cuiellere"],
//   },
//   {
//     type: "accompagnement",
//     nom: "pure",
//     ingredient: ["pure", "eau"],
//     duration: 10,
//     ustensile: ["casserole"],
//   },
//   {
//     type: "accompagnement",
//     nom: "salade",
//     ingredient: ["salade"],
//     duration: 10,
//     ustensile: ["saladier"],
//   },
//   {
//     type: "assaisonnement",
//     nom: "curry",
//     ingredient: ["epice curry "],
//     duration: 3,
//     ustensile: ["cuiellere", "assiette"],
//   },
//   {
//     type: "assaisonnement",
//     nom: "papikat",
//     ingredient: ["epice papika "],
//     duration: 3,
//     ustensile: ["assiette"],
//   },
//   {
//     type: "assaisonnement",
//     nom: "viande",
//     ingredient: ["viande"],
//     duration: 3,
//     ustensile: ["cuiellere", "assiette"],
//   },
//   {
//     type: "plat",
//     nom: "boeuf",
//     ingredient: ["boeuf", "eau"],
//     duration: 7,
//     ustensile: ["poele", "assiette"],
//   },
//   {
//     type: "plat",
//     nom: "poulet",
//     ingredient: ["poulet", "eau"],
//     duration: 7,
//     ustensile: ["poele", "assiette"],
//   },
//   {
//     type: "plat",
//     nom: "saumon",
//     ingredient: ["saumon", "eau"],
//     duration: 7,
//     ustensile: ["cassarole", "assiette"],
//   },
// ];

// var recettes = [];

// for (var i = 0; i < data.length; i++) {
//   var data_type = data[Math.round(Math.random() * (data.length - 1 - 0) + 0)];
//   var data_nom =
//     data_type.nom[
//       Math.round(Math.random() * (data_type.nom.length - 1 - 0) + 0)
//     ];
//   recettes.push({
//     nom: data_nom,
//   });
// }
// console.log(recettes);

// // var objet_recette=[
// //     {
// //         menu:[]
// //     }
// //     ]

// //     objet_recette.menu.push(data[])
// //     console.log(objet_recette[0].menu)

// // for(var i=0; i<data.lenght; i++){
// //     var nom_recette=data[Math.round(Math.random()*((data.length-1)-0) +0)]
// //     var ingredient_recette=data[Math.round(Math.random()*((data.length-1)-0) +0)]
// //     objet_recette.menu.push( {

// //     duration:"somme+=data[i].duration"

// // })
// // }
// // console.log(objet_recette[0].menu)

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
var text = "";
function createCombinedRecipe() {
  const plats = data.filter((item) => item.type === "plat");
  const assaisonnements = data.filter((item) => item.type === "assaisonnement");
  const accompagnements = data.filter((item) => item.type === "accompagnement");

  // Utilisation de Math.round pour sélectionner un index aléatoire
  const plat = plats[Math.round(Math.random() * (plats.length - 1 - 0) + 0)];
  const assaisonnement =
    assaisonnements[
      Math.round(Math.random() * (assaisonnements.length - 1 - 0) + 0)
    ];
  const accompagnement =
    accompagnements[
      Math.round(Math.random() * (accompagnements.length - 1 - 0) + 0)
    ];

  const recipeName = `${accompagnement.nom} ${plat.nom} ${assaisonnement.nom}`;
  const ingredients = Array.from(
    new Set([
      ...plat.ingredients,
      ...assaisonnement.ingredients,
      ...accompagnement.ingredients,
    ])
  );
  const duration =
    plat.duration + assaisonnement.duration + accompagnement.duration;
  const ustensiles = Array.from(
    new Set([
      ...plat.ustensile,
      ...assaisonnement.ustensile,
      ...accompagnement.ustensile,
    ])
  );

  return {
    nom: recipeName,
    ingredients,
    duration,
    ustensile: ustensiles,
  };
}

// Génération et affichage de 10 recettes aléatoires
let recipes = [];
for (let i = 0; i < 10; i++) {
  recipes.push(createCombinedRecipe());
}

console.log(recipes);
