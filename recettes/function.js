obj = {
  firstName: "Edouard",
  lastName: "BERNIER",
  yearBorn: 1998,
};

console.log(Object.keys(obj));

function getPropretyObject(object) {
  var objectKey = Object.keys(object);
  return objectKey.join(", ");
}

function printProprety(keys) {
  console.log("Propriétés sont :", keys);
}

var key = getPropretyObject(obj);
printProprety(key);

obj.age = 2024 - obj.yearBorn;
obj.job = "Dev";

printProprety(getPropretyObject(obj));

var keys_existant = Object.keys(obj);
for (let i = 0; i < keys_existant.length; i++) {
  console.log(
    "Propriété :",
    keys_existant[i],
    "/ Valeur :",
    obj[keys_existant[i]]
  );
}

// //console.log( obj['lastName'] ) // === obj.lastName
