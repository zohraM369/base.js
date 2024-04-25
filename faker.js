const { faker } = require("@faker-js/faker/locale/fr");

var peoples = [
  {
    firstName: "Edouard",
    lastName: "Luc",
  },
];

for (var i = 0; i < 25; i++) {
  // var sex_people = faker.person.sex()
  var firstName = faker.person.firstName("Name");
  var lastName = faker.person.lastName("male");
  peoples.push({
    firstName,
    lastName,
    email: faker.internet.email({ firstName: firstName, lastName: lastName }),
  });
}

console.log(peoples);
// console.log(faker.person.lastName())
