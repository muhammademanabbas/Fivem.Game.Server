const vehicle__tab = document.querySelector(".vehicle-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let vehicle__cards__array = [
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "#8E428E",
    card__img__url: "https://assets-prd.ignimgs.com/2023/10/13/gta-car-1697200040693.jpg",
    card__title: "Medreces G65 AMG",
    stock: "14", //optional property
    card__price: "2500"
  },
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "#E5A200",
    card__img__url: "https://img.gta5-mods.com/q95/images/wb-ford-mustang/b2123f-gg1.jpg",
    card__title: "Yamaha TMAX",
    stock: "19",
    card__price: "1500"
},
{
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "gray",
    card__img__url: "https://wallpapercave.com/wp/wp3610663.jpg",
    card__title: "Ford F-150 Raptor",
    // stock: "10", 
    card__price: "2000"
  },
];

let vehicle__CARDS = vehicle__cards__array.map((obj, index) => `
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
          <p class="">1</p>
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
  vehicle__tab.innerHTML = vehicle__CARDS.join('');  // More efficient way to add all card HTML
}

addCards();