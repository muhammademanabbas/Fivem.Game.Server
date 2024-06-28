const vehicle__tab = document.querySelector(".vehicle-tab");

// You just have to add the object in this array, then the card will automatically be added onto the page. You don't have to worry about that.
let vehicle__cards__array = [
  {
    card__Banner__text: "DE RETOUR*",
    // card__Banner__color: "#8E428E", // optional
    card__img__url:"https://assets-prd.ignimgs.com/2023/10/13/gta-car-1697200040693.jpg",
    card__title: "Medreces G65 AMG",
    stock: "14", //optional property
    card__price: "2500",
    Preview__Detail:{
      preview__img__url:"https://assets-prd.ignimgs.com/2023/10/13/gta-car-1697200040693.jpg",
      preview__title:"DE RETOUR*",
      preview__description:"Discover our varied selection of vehicles for all needs, available for a limited time. Whether for the city, adventure or work, find the perfect vehicle at an exceptional price, but hurry, our offers are ephemeral !",
      preview__btn__price: "2 500",
    }
  },
 
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "#E5A200",
    card__img__url: "https://wallpapercave.com/wp/wp3610663.jpg",
    card__title: "Ford F-150 Raptor",
    // stock: "10", 
    card__price: "2000",
    Preview__Detail:{
      preview__img__url:"https://wallpapercave.com/wp/wp3610663.jpg",
      preview__title:"DE RETOUR*",
      preview__description:"Discover our varied selection of vehicles for all needs, available for a limited time. Whether for the city, adventure or work, find the perfect vehicle at an exceptional price, but hurry, our offers are ephemeral !",
      preview__btn__price: "2 000",
    }
  },
  
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "red",
    card__img__url: "https://img.gta5-mods.com/q95/images/wb-ford-mustang/b2123f-gg1.jpg",
    card__title: "Yamaha TMAX",
    stock: "19",
    card__price: "1500",
    Preview__Detail:{
      preview__img__url:"https://img.gta5-mods.com/q95/images/wb-ford-mustang/b2123f-gg1.jpg  ",
      preview__title:"DE RETOUR*",
      preview__description:"Discover our varied selection of vehicles for all needs, available for a limited time. Whether for the city, adventure or work, find the perfect vehicle at an exceptional price, but hurry, our offers are ephemeral !",
      preview__btn__price: "1 500",
    }
  },
  {
    card__Banner__text: "DE RETOUR*",
    card__Banner__color: "#E5A200",
    card__img__url: "https://wallpapercave.com/wp/wp3610663.jpg",
    card__title: "Ford F-150 Raptor",
    // stock: "10", 
    card__price: "2000",
    Preview__Detail:{
      preview__img__url:"https://wallpapercave.com/wp/wp3610663.jpg",
      preview__title:"DE RETOUR*",
      preview__description:"Discover our varied selection of vehicles for all needs, available for a limited time. Whether for the city, adventure or work, find the perfect vehicle at an exceptional price, but hurry, our offers are ephemeral !",
      preview__btn__price: "2 000", 
    }
  },
  
];

let vehicle__CARDS = vehicle__cards__array.map(
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
  vehicle__tab.innerHTML = vehicle__CARDS.join("");
}

addCards();
