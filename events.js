const { reject } = require("lodash");

// console.log("bienvenue");
// var calcul = (12 / 2) * 4;

// console.log(calcul);
// setTimeout(function () {
//   try {
//     calcul = 4;
//     console.log(calcul);
//     ds;
//   } catch (err) {
//     console.log(err.name);
//   } finally {
//     console.warn("la fin ");
//   }
// }, 1000);

function waiting(time) {
  return new Promise((resolve, reject) => {
    if (time > 100)
      setTimeout(() => {
        console.log("ok");
        resolve({ succes: true });
      }, time);
    else reject({ succes: false });
  });
}
waiting(101)
  .then((value) => {
    console.log("promise reussi :", value);
  })
  .catch((err) => {
    console.log("promise echoué:", err);
  });
