const peoples = [
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
  {
    _id: 1004,
    username: "loic",
    firstName: "loic",
    lastName: "lala",
  },
  {
    _id: 1005,
    username: "loic Junio",
    firstName: "loic Junior",
    lastName: "Junio",
    parent: 1004,
  },
];

function buildHierarchy(peoples) {
  // Créer un objet pour maintenir les références aux objets par leur ID
  const idToNodeMap = {};

  // Initialiser la structure de données pour chaque personne
  peoples.forEach((person) => {
    idToNodeMap[person._id] = { ...person, children: [] };
  });

  // Construire la hiérarchie en associant les enfants à leurs parents
  const rootNodes = [];
  peoples.forEach((person) => {
    const node = idToNodeMap[person._id];
    if (person.parent) {
      // Trouver le parent dans la map et ajouter le node actuel à ses enfants
      idToNodeMap[person.parent].children.push(node);
    } else {
      // S'il n'y a pas de parent, c'est un noeud racine
      rootNodes.push(node);
    }
  });

  return rootNodes;
}

// Générer la hiérarchie
const hierarchy = buildHierarchy(peoples);

// Afficher la hiérarchie dans la console avec indentation pour la clarté
console.log(JSON.stringify(hierarchy, null, 2));
