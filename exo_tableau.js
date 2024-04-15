
var  tab_formation =
[
    {

    firstname: "zohra",
    lastname:"Ben",
    age: 30,
    dateStart: 2024,
    lieuDeNaissance: "tunisie"
    },
    {
    firstname: "Xavier",
    lastname:"colomb",
    age: 35,
    dateStart: 2024,
    lieuDeNaissance: "France"
    }
]
// console.log(tab_formation)
// tab_formation.pop()
// console.log(tab_formation)
tab_formation.push(
{
    firstname: "ff",
    lastname:"hh",
    age: 35,
    dateStart:2024,
    lieuDeNaissance: "France"
}

) 
// console.log(
//     "\nprenom:",tab_formation[0].firstname,
//      "\nNom:",tab_formation[0].lastname,
//      "\nAge:",tab_formation[0].age,
//      "\ndate de start:",tab_formation[0].dateStart,
//      "\nLieu de naissance:",tab_formation[0].lieuDeNaissance,
// )

// console.log(               // console.log("prenom:",tab_formation[1].firstname, "\n")
//     "\nprenom:",tab_formation[1].firstname,
//      "\nNom:",tab_formation[1].lastname,
//      "\nAge:",tab_formation[1].age,
//      "\ndate de start:",tab_formation[1].dateStart,
//      "\nLieu de naissance:",tab_formation[1].lieuDeNaissance,
// )

for (var i=0; i<100; i++)
{
    tab_formation.push(
    {
        firstname: "Louis"+i,
        lastname:"hh"+i,
        age: 20+i,
        dateStart:2024,
        lieuDeNaissance: "France"
    
    }

    )
}
for (var i=0; i<tab_formation.length; i++){
    if( tab_formation[i].firstname=="Louis55"){
    console.log("prenom:",tab_formation[i].firstname, "\n")
    console.log("Nom:",tab_formation[i].lastname, "\n")
    console.log("age:",tab_formation[i].age, "\n")
    console.log("date de naissance:",tab_formation[i].lieuDeNaissance, "\n")
    console.log(`il est a la ${i} position dans le tableau`)
}
}
var tabPlusDe50=[]
for(var i=0; i<tab_formation.length;i++){
    if(tab_formation[i].age>50){
        tabPlusDe50.push(tab_formation[i])
    }
}
console.log(`j'ai ${tabPlusDe50.length} personnes qui ont plus de 50 ans`)
// console.log("il y a " , tab_formation.length, "personne dans la formation")
// console.log(`il ya ${tab_formation.length} personne dans la formation.`)  // pour afficher le message sans ""
var obj_people= {}
for (var i=0; i<tab_formation.length; i++){
obj_people[tab_formation[i].firstname] = tab_formation[i]
}
console.log(obj_people["louis55"])