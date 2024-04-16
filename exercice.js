// let tab=["m1", "m2","m3", "m4"]
// tab.pop();
// console.log(tab)
// tab.push("s1","s2")
// console.log(tab)
// for (var i=0; i<tab.length; i++){
//     console.log(tab[i]+`("${i}")`)
// // }
// let tab2=[];
// for(var i=0 ; i<100; i++){
// tab2.push(i);
// }
// console.log(tab2)

// function generateArrayWithNNumbers() {
//     const t = [];
//     for (let i = 0; i < 5; i++) {
//         t.push(i);
//     }
//     return t;
// }
// console.log(t);

let nombres = [5, 10, 2, 20, 1];
nombres.sort(function(a, b) {
    return a - b;
});
console.log(nombres);
function squareNumbers(nombre) {
    return nombre.map(x => x*x);
}
console.log(nombre)


