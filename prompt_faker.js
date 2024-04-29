// // combien d'element a crér
// // male ou female
const { faker } = require("@faker-js/faker/locale/fr");
var prompt = require("prompt");
//start the prompt
prompt.start();
// get two propriete from the user: usename and email
var schema = {
  properties: {
    nb_element: {
      description: "combien d'element a crée",
      typr: "number",
    },

    type: {
      description: "doit-on génere des hommes",
      type: "boolean",
    },
  },
};
prompt.get(schema, function (err, result) {
  console.log(result["nb_element"]);
  console.log(result["type"]);
  var peoples = [];
  for (var i = 0; i < result["nb_element"]; i++) {
    var type = "female";
    if (result["type"]) type = "male";
    var firstName = faker.person.firstName(type);
    var lastName = faker.person.lastName(type);
    peoples.push({
      firstName,
      lastName,
      email: faker.internet.email({ firstName, lastName }),
    });
  }

  console.log(peoples);
});
