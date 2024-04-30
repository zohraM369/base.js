const { faker } = require("@faker-js/faker/locale/fr");
var prompt = require("prompt");

var people = [
  {
    // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [
      {
        firstName: "Jean",
        lastName: "Bernier",
        children: [
          {
            firstName: "Junior",
            lastName: "Bernier",
            children: [
              {
                firstName: "Jordan",
                lastName: "Bernier",
              },
              {
                firstName: "Luc",
                lastName: "Bernier",
              },
            ],
          },
        ],
      },
      {
        firstName: "Sacha",
        lastName: "Bernier",
      },
      {
        firstName: "Laurent",
        lastName: "Bernier",
      },
      {
        firstName: "Raphael",
        lastName: "Bernier",
      },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Luc",
    children: [
      {
        firstName: "Richard",
        lastName: "Luc",
        children: [
          {
            firstName: "Roméo",
            lastName: "Luc",
          },
        ],
      },
    ],
  },
];

var findRecursivityPeople = function (firstName, lastName, tab, path) {
  for (var i = 0; i < tab.length; i++) {
    var element = tab[i];
    if (element.firstName == firstName && element.lastName == lastName) {
      return {
        ...element,
        parent: path + element.firstName + " " + element.lastName,
      };
    }
    if (element.children) {
      var value = findRecursivityPeople(
        firstName,
        lastName,
        element.children,
        path + element.firstName + " " + element.lastName + "/"
      );
      if (value) return value;
    }
  }
  return null;
};
var findPeople = function (firstName, lastName) {
  return new Promise((resolve, reject) => {
    var result = findRecursivityPeople(firstName, lastName, people, "");
    if (result) {
      resolve(result);
    } else reject("not found");
  });
};

prompt.get(["firstName", "lastName"], function (err, result) {
  findPeople("firstname", "lastname")
    .then((value) => {
      console.log("personne trouvé :", value);
    })
    .catch((err) => {
      console.log("aucun personne trouvé:", err);
    });
});
