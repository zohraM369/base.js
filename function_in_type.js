const _ = require("lodash");

var tab_element = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "V",
  "D",
  "R",
];

var type = ["CA", "C", "P", "T"];

var pile_card = [];

for (var i = 0; i < tab_element.length; i++) {
  for (var j = 0; j < type.length; j++) {
    pile_card.push(tab_element[i] + "-" + type[j]);
  }
  console.log(pile_card);
}

function shuffle(tab) {
  return tab.sort(function () {
    return Math.random() - 0.5;
  });
}
function shuffleOther(tab) {
  return tab.sort(() => {
    Math.random() - 0.5;
  });
}

function shuffleFisher(arr) {
  for (var i = arr.length - 1; 0 > i; i--) {
    var j = (Math.floor(Math.round() * i + 1)[(arr[i], arr[j])] = [
      arr[j],
      arr[i],
    ]);
  }
}

// console.log(pile_card);
// pile_card = shuffle(pile_card);
// shuffleFisher(pile_card);
// console.log(pile_card);

// Melanger les element du tableau pile_card

function numberRamdom(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}
pile_card = pile_card.map(function (cart) {
  console.log(cart);
  var value = cart.split("-")[0];
  var value_color = cart.split("-")[1];
  if (isNaN(value) && value != "A") {
    value = 10;
  } else if (isNaN(value) && value == "A") {
    value = 11;
  } else {
    value = Number(value);
  }
  if (value_color == "CA" || value_color == "c") {
    value_color = "red";
  } else {
    value_color = "black";
  }
  let obj = { name: cart, value: value, color: value_color };
  return obj;
});

console.log(pile_card);
pile_card = _.shuffle(pile_card);
console.log(pile_card);

console.log(_.indexOf(tab_element, "A")); // POUR CHERCHER LINDEX d'un element de tab avec lodash
console.log(_.findIndex(pile_card, pile_card[("name", "4-C")]));

// var turn1 = numberRamdom(pile_card.length - 1, 0);
// //console.log(turn1, pile_card[turn1])

// var value_card = pile_card[turn1].split("-")[0];

// if (isNaN(value_card)) value_card = 10;
// else value_card = Number(value_card);
// console.log(value_card);

// pile_card.splice(turn1, 1);
// //console.log(turn1, pile_card[turn1]
