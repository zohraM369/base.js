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
var tab_2 = [];
var findRecursivityPeople = function (firstName, lastName, tab, path) {
  for (var i = 0; i < tab.length; i++) {
    var element = tab[i];
    if (element.firstName == firstName) {
      tab_2.push({...element, parent:path+element.firstName+" " + element.lastName});
    }
    if(element.children){
        var value= findRecursivityPeople (firstName,lastName, element.children)

    }
  }
  return tab_2[];
};

var findPeople = function (firstName, lastName) {
  return new Promise((resolve, reject) => {
    var result = findRecursivityPeople(firstName, lastName, people, "");
    if (result) {
      resolve(result);
    } else reject("not found");
  });
};

prompt.get(["firstName"], function (err, result) {
  findPeople("result.firstname")
    .then((value) => {
      console.log("personne trouvé :", value);
    })
    .catch((err) => {
      console.log("aucun personne trouvé:", err);
    });
});

// var sameName = [];
// for (var i = 0; i < people.length; i++) var item = people[i];
// if (item.firstName == findRecursivityPeople(firstName)) {
//   sameName.push();
//   item.firstName;
// }

// console.log(sameName);
