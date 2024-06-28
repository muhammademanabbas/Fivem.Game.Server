const caisses__tab = document.querySelector(".caisses-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let caisses__cards__array = [
  {
    card__Banner__text: "NOUVEAU*",
    card__Banner__color: "#8E428E",
    card__img__url: "https://atlas-content-cdn.pixelsquid.com/stock-images/ammo-box-weapon-case-18VPzYA-600.jpg",
    card__title: "RADON",
    stock: "95", //optional property
    card__price: "1500",
    Preview__Detail:{
      preview__img__url:"https://atlas-content-cdn.pixelsquid.com/stock-images/ammo-box-weapon-case-18VPzYA-600.jpg",
      preview__title:"NOUVEAU*",
      preview__description:"This is the description",
      preview__btn__price: "1 500",
    }
  },
];

let caisses__CARDS = caisses__cards__array.map(
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
  caisses__tab.innerHTML = caisses__CARDS.join("");
}

addCards();
