
const armes__tabs = document.querySelector(".armes-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let armes__cards__array = [
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "#8E428E",
    card__img__url: "https://files.libertycity.net/download/gta5_weapons/fulls/2022-12/rpk-16-light-machine-replace-fivem-beta_1671457003_674826.jpg",
    card__title: "Medreces G65 AMG",
    stock: "14",
    card__price: "2500",
  Preview__Detail:{
    preview__img__url:"https://files.libertycity.net/download/gta5_weapons/fulls/2022-12/rpk-16-light-machine-replace-fivem-beta_1671457003_674826.jpg",
    preview__title:"DE RETOUR*",
    preview__description:"Discover our varied selection of vehicles for all needs, available for a limited time. Whether for the city, adventure or work, find the perfect vehicle at an exceptional price, but hurry, our offers are ephemeral !",
    preview__btn__price: "2 500",
  }
},
];

let armes__CARDS = armes__cards__array.map(
  (obj, index) => `
                      <div class="preview-container">
                                <div class="preview-card">
                                    <div class="preview-img-side">
                                        <h2 class="close-preview-1">X</h2>
                                        <img src="${obj.Preview__Detail.preview__img__url}"
                                            alt="preview-img" />
                                    </div>
                                    <div class="preview-content-side">
                                        <div class="preview-content-top-side">
                                            <h2 class="close-preview-2">X</h2>
                                            <h2>${obj.Preview__Detail.preview__title}</h2>
                                            <p class="preview-description">
                                                ${obj.Preview__Detail.preview__description}
                                            </p>
                                        </div>
                                        <div class="preview-content-bottom-side">
                                            <i class="ri-arrow-left-s-line decrease-amount"></i>
                                            <p class="">1</p>
                                            <i class="ri-arrow-right-s-line increase-amount"></i>
                                            <button class="diamond-button preview-diamond">
                                                <i class="ri-vip-diamond-fill"></i>
                                                <p>${obj.Preview__Detail.preview__btn__price}</p>
                                            </button>
                                            <button class="preview-acheter-btn">ACHETER</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="card-header img-side">
                                            <p class="card-banner" style="background-color: ${obj.card__Banner__color ? obj.card__Banner__color : 'gray'}">${obj.card__Banner__text}</p>
                                                
                                            <img class="card-img"
                                                src="${obj.card__img__url}"
                                                alt="car-img" />
                                        </div>
                                        <div class="card-footer card-content">
                                            <div class="card-title">
                                                <h6>${obj.card__title}</h6>
                                                ${obj.stock ? `<p>Stock restant : ${obj.stock}</p>` : ''}
                                            </div>
                                            <div class="card-price">
                                                <i class="ri-arrow-left-s-line decrease-amount"></i>
                                                <p class="">1</p>
                                                <i class="ri-arrow-right-s-line increase-amount"></i>
                                                <button class="diamond-button">
                                                    <i class="ri-vip-diamond-fill"></i>
                                                     <p>${obj.card__price}</p>
                                                </button>
                                                <button class="previsualiser">
                                                    <p>previsualiser</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
`
);

function addCards() {
  armes__tabs.innerHTML = armes__CARDS.join("");
}

addCards();
