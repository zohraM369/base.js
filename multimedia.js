

// function CreateSong(i){
//     const langage= i%2===0? "francais": "englais";
//     langage: langage
//     }

//   var music_data=[i]
//     for (i=0; i<500; i++){
//         music_data.push({
//             titre: "Titre"+i,
//             artiste: "artiste"+i,
//             studio: " studio"+i,
//             Time: 1540+i ,
//             dateRealis: "10-01-199",
//             langage:langage, 
//             album: "album"+i,
        
//          }
//         )
//     }

var data =
{
    music: [],
    video: [],
    podcast: []
}


for (var i = 0; i < 500; i++) {
    var min = 1450
    var max = 54596
    var langage = "fr"
    if (i % 2 !== 0)
        langage = "en"
    data.music.push(
        {
            titre: "helo" + i,
            artiste: "heloMusic" + i,
            langage: langage,
            time: (Math.random() * (max - min) + min),
            date: 1980 + i,
            album: "helloalbum" + i
        }
    )
}


for (var i=0; i < data.music.length; i++) {
    console.log(`Titre: ${data.music[i].titre}`,`Artiste : ${data.music[i].artiste}`, `Langue : ${data.music[i].langage}`, `Durée : ${data.music[i].date}`,`time : ${data.music[i].time}`,`album : ${data.music[i].album}`)
}

// for (var i = 0; i < data.music.length; i++){
//     console.log(`titre: ${data.music.titre}`);
// }


let indexAleatoire = Math.floor(Math.random() * data.music.length);

// Générer un nombre aléatoire
let nombreAleatoire = Math.random() * 100
console.log(nombreAleatoire);

// Générer un index aléatoire dans le tableau


// Accéder au titre aléatoire dans le tableau
let titreAleatoire = data.music[indexAleatoire];

// Afficher le titre aléatoire
console.log(titreAleatoire);