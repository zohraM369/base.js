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

var people_transformer = [];
function transformPeople(person, tab) {
  var transformedPerson = { ...person };
  //var childreb = tab.filter(p=>p.parent ===person._id)
  var children = [];
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].parent === person._id) {
      children.push(tab[i]);
    }
  }
  if (children.length > 0) {
    transformedPerson.children = [];
    for (var i = 0; i < children.length; i++) {
      transformedPerson.children.push(transformPeople(children[i], tab));
    }
  } // transformePerson.children= children.map(child =>{return transformPeople(child)})
  return transformedPerson;
}
for (var i = 0; i < peoples.length; i++) {
  var person = peoples[i];
  if (!person.parent) {
    var transformedPerson = transformPeople(person, peoples);
    people_transformer.push(transformedPerson);
  }
}
console.log(JSON.stringify(people_transformer, null, 4));
