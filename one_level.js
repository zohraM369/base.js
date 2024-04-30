var peoples = [
  {
    _id: 1001,
    username: "jeandupont",
    firstName: "Jean",
    lastName: "Dupont",
  },
  {
    _id: 1002,
    username: "louisbrocante",
    firstName: "Louis",
    lastName: "Brocante",
    parent: 1001,
  },
  {
    _id: 1003,
    username: "julienrouget",
    firstName: "Julien",
    lastName: "Rouget",
    parent: 1002,
  },
];

// var people_transformer = [
//   {
//     _id: 1003,
//     username: "julienrouget",
//     firstName: "Julien",
//     lastName: "Rouget",
//     parent: {
//       _id: 1002,
//       username: "louisbrocante",
//       firstName: "Louis",
//       lastName: "Brocante",
//       parent: {
//         _id: 1001,
//         username: "jeandupont",
//         firstName: "Jean",
//         lastName: "Dupont",
//       },
//     },
//   },
// ];
function transformPeople(peoples) {
  // Créer une fonction pour trouver une personne par son _id
  function findPersonById(id) {
    return peoples.find((person) => person._id === id);
  }

  // Mapper chaque personne à un nouvel objet qui inclut le parent complet
  return peoples.map((person) => {
    if (person.parent) {
      // Récursivement ajouter les détails complets du parent
      return {
        ...person,
        parent: findPersonById(person.parent),
      };
    } else {
      // Si aucun parent, retourner la personne telle quelle
      return { ...person };
    }
  });
}

var people_transformer = transformPeople(peoples);
console.log(people_transformer);
