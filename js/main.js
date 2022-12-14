// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia indietro, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia avanti.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// const images = [
//     "img/01.webp",
//     "img/02.webp",
//     "img/03.webp",
//     "img/04.webp",
//     "img/05.webp"
// ];

// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// console.log(images);

// let currentImgIndex = 0;

// const slideImgEl = document.querySelector(".slide-img");
// const slideContainerEl = document.querySelector(".slide-img-container");
// const btnNext = document.getElementById("btnNext");
// const btnPrev = document.getElementById("btnPrev");

// slideImgEl.src = images[ currentImgIndex ].image;

// for (let i = 0; i < images.length; i++){
//     //stringa contenente l'url di una singola immagine
//     const nowImg = images[ i ];

//     const imgEl = document.createElement("img");

//     imgEl.src = nowImg.image;
//     imgEl.classList.add("img-fluid", "da-js");

//     slideContainerEl.append( imgEl );

//     const textContainer = document.getElementById("text-container");

//     const titlEl = document.createElement("h5");
//     titlEl.classList.add("title");
//     titlEl.innerHTML = `${nowImg.title}`;
//     textContainer.append(titlEl);

//     const text = document.createElement("p");
//     text.classList.add("text");
//     text.innerHTML = `${nowImg.text}`; 
//     textContainer.append(text);
// }

// btnNext.addEventListener("click", function () {
//     console.log("next btn click");

//     // const oldImg = document.querySelector(`.slide-img-container :nth-child(${currentImgIndex + 1 })`);
//     // oldImg.classList.remove( "active" );
//     currentImgIndex++;

//     if( currentImgIndex > images.length - 1) {
//         currentImgIndex = 0;
//     }

    
//     slideImgEl.src = images[currentImgIndex].image;
    
//     //riattivo le immagini 
//     // const newImg = document.querySelector(`.slide-img-container :nth-child(${ currentImgIndex + 1})`);
//     // newImg.classList.add("active");

// });

// btnPrev.addEventListener("click", function () {
//     console.log("Prev btn click");

//     // const oldImg = document.querySelector(`.slide-img-container :nth-child(${currentImgIndex + 1 })`);
//     // oldImg.classList.remove( "active" );

//     currentImgIndex--;

//     if( currentImgIndex < 0 ){
//         currentImgIndex = images.length - 1;
//     }
//     slideImgEl.src = images[ currentImgIndex ].image;

//     // const img = document.querySelector(`.slide-img-container :nth-child(${ currentImgIndex + 1})`);
//     // img.classList.add("active");
// });

//////









// ----------------------------------------------------------------------------
/*

array di stirnge. ogni stringa è un'url di un'immagine.
voglio un'immagine al centro e un bottone per andare avanti alla prossima immagine

*/


const immagini = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// const immagini = ['img/01.webp', 'img/02.webp', 'img/03.webp'];

const immagine = document.getElementById("immagine-principale");
const titlEl = document.getElementById("title");
const text = document.getElementById("text");


let immagineIndex = 0;

console.log(immagini[0]);
immagine.src = immagini[immagineIndex].image;

titlEl.innerHTML = immagini[immagineIndex].title;
text.innerHTML = immagini[immagineIndex].text;


btnPrev.addEventListener("click", function(){

    console.log('prima', immagineIndex);

    immagineIndex = immagineIndex - 1;

    if (immagineIndex == -1) {

        immagineIndex = immagini.length - 1;
    }

    titlEl.innerHTML = immagini[immagineIndex].title;
    text.innerHTML = immagini[immagineIndex].text;

    console.log('dopo', immagineIndex);

    immagine.src = immagini[immagineIndex].image;

});

btnNext.addEventListener("click", function(){

    console.log('prima', immagineIndex);

    immagineIndex = immagineIndex + 1;

    if (immagineIndex == immagini.length) {

        immagineIndex = 0;
    }

    titlEl.innerHTML = immagini[immagineIndex].title;
    text.innerHTML = immagini[immagineIndex].text;
    console.log('dopo', immagineIndex);

    immagine.src = immagini[immagineIndex].image;

});