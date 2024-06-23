
const armes__tabs = document.querySelector(".armes-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let armes__cards__array = [
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "#8E428E",
    card__img__url: "https://files.libertycity.net/download/gta5_weapons/fulls/2022-12/rpk-16-light-machine-replace-fivem-beta_1671457003_674826.jpg",
    card__title: "Medreces G65 AMG",
    stock: "14",
    card__price: "2500"
  },
];

let armes___CARDS = armes__cards__array.map((obj, index) => `
  <div class="card-container">
    <div class="card">
      <div class="card-header img-side">
        <p class="card-banner" style="background-color: ${obj.card__Banner__color}">${obj.card__Banner__text}</p>
        <img src="${obj.card__img__url}" alt="car-img">
      </div>
      <div class="card-footer card-content">
        <div class="card-title">
          <h6>${obj.card__title}</h6>
          ${obj.stock ? `<p>Stock restant : ${obj.stock}</p>` : ''}
        </div>
        <div class="card-price">
          <i class="ri-arrow-left-s-line decrease-amount"></i>
          <p>1</p>
          <i class="ri-arrow-right-s-line increase-amount"></i>
          <button class="diamond-button">
            <i class="ri-vip-diamond-fill"></i>
            <p>${obj.card__price}</p>
          </button>
          <button class="previsualiser"><p>previsualiser</p></button>
        </div>
      </div>
    </div>
  </div>
`);

function addCards() {
    armes__tabs.innerHTML = armes___CARDS.join('');  // More efficient way to add all card HTML
}

addCards();