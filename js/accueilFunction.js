
const accueil__tabs = document.querySelector(".accueil-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let accueil__cards__array = [
    
    {
        card__left__side__text: "NOUVELLESORTIE",
        // card__left__bg__color: "salmon",  // optional
        card__img__url: "https://assets-prd.ignimgs.com/2023/10/13/gta-car-1697200040693.jpg",
        card__title: "Radon",
        card__description: "Cet objet n'a pas encore de description,elle sera disponible plus tard.",
    },
    
];

let acueil___CARDS = accueil__cards__array.map((obj, index) => `
  <div class="accueil-card-container">
                                <div class="left-accueil" style="background-color:${obj.card__left__bg__color}">
                                    <h1 class="rotate-heading">${obj.card__left__side__text}</h1>
                                </div>
                                <div class="img-content">
                                    <div class="center-accueil">
                                        <img src="${obj.card__img__url}">
                                    </div>
                                    <div class="right-accueil">
                                        <div class="right-card-top">
                                            <h2>${obj.card__title}</h2>
                                            <p>${obj.card__description}</p>
                                        </div>
                                        <button class="right-accueil-button">PREVISUALISER</button>
                                    </div>m
                                </div>
                            </div>
`);

function addCards() {
    accueil__tabs.innerHTML = acueil___CARDS.join('');  
}

addCards();    
