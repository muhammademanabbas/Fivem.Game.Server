
const consommables__tabs = document.querySelector(".consommables-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let consommables__cards__array = [
  {
    card__Banner__text: "BEST SELLER",
    card__Banner__color: "#7499C4",
    card__img__url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/GTA-Online-Baseball-Bat.jpg",
    card__title: "Parsonnage additionnel",
    // stock: "14", you can give stock if you want
    card__price: "3000"
  },
];

let consommables___CARDS = consommables__cards__array.map((obj, index) => `
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
    consommables__tabs.innerHTML = consommables___CARDS.join('');  // More efficient way to add all card HTML
}

addCards();