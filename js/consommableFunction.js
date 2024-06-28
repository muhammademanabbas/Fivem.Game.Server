
const consommables__tabs = document.querySelector(".consommables-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let consommables__cards__array = [
  {
    card__Banner__text: "BEST SELLER*",
    card__Banner__color: "#7499C4",
    card__img__url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/GTA-Online-Baseball-Bat.jpg",
    card__title: "Parsonnage additionnel",
    // stock: "14", you can give stock if you want
    card__price: "3000",
    Preview__Detail:{
      preview__img__url:"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/GTA-Online-Baseball-Bat.jpg",
      preview__title:"BEST SELLER*",
      preview__description:"Discover our varied selection of vehicles for all needs, available for a limited time. Whether for the city, adventure or work, find the perfect vehicle at an exceptional price, but hurry, our offers are ephemeral !",
      preview__btn__price: "1 500",
    }
  },
];

let consommables__CARDS = consommables__cards__array.map(
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
  consommables__tabs.innerHTML = consommables__CARDS.join("");
}

addCards();
