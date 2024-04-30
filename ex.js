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

function findPerson(firstName, lastName, people) {
  return new Promise((resolve, reject) => {
    function search(people) {
      for (const person of people) {
        if (person.firstName === firstName && person.lastName === lastName) {
          return person;
        }
        if (person.children) {
          const found = search(person.children);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }

    const result = search(people);
    if (result) {
      resolve(result);
    } else {
      reject(new Error("Person not found"));
    }
  });
}

// Utiliser prompt() pour obtenir les inputs de l'utilisateur
var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");

findPerson(firstName, lastName, people)
  .then((person) => console.log("Person found:", person))
  .catch((error) => console.error(error.message));
