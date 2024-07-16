const images = [
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

 
const carousel = document.querySelector('.carosello');

// Funzione per creare un elemento del carosello
function carosello(img, attiva) {
    const item = document.createElement('div');
    item.className = `carosello-list${attiva ? ' active' : ''}`;
    item.innerHTML = `
        <img src="${img.image}" alt="${img.title}">
        <div class="descrizione">
            <h3>${img.title}</h3>
            <p>${img.text}</p>
        </div>
    `;
    return item;
}

// Aggiungo altri  elementi del carosello 
images.forEach((img, index) => {
    const attiva = index === 0;
    const caroselloelemento = carosello(img, attiva);
    carousel.appendChild(caroselloelemento);
});



// Utilizzo le frecce per spostarmi  nel carosello S
const prevbtn = document.querySelector('.btn.prev');
const nextbtn = document.querySelector('.btn.next');
let currentIndex = 0;

function altrielementi(index) {
    const items = document.querySelectorAll('.carosello-list');
    items.forEach((item, idx) => {
        item.classList.toggle('active', idx === index);
    });
}
//Aggiungo bottone eventlistener per scorrere le foto 
prevbtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    altrielementi(currentIndex);
});

nextbtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    altrielementi(currentIndex);
});