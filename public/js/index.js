const mediaQuery = window.matchMedia("(max-width: 320px)");
// отображение корзины
const getCatalogData = () => {
  if (localStorage.getItem("data")) {
    return JSON.parse(localStorage.getItem("data"));
  } else return CATALOG;
};

// отображение недоступных товаров
const getInactiveCatalogdata = () => {
  if (localStorage.getItem("dataInactive")) {
    return JSON.parse(localStorage.getItem("dataInactive"));
  } else return INACTIVE;
};

// отображение доставки
const getDeliveryData = () => {
  if (localStorage.getItem("dataDelivery")) {
    return JSON.parse(localStorage.getItem("dataDelivery"));
  } else return DELIVERY;
};

// отображение адреса
const getAdressData = () => {
  if (localStorage.getItem("dataAdress")) {
    return JSON.parse(localStorage.getItem("dataAdress"));
  } else return ADRESS;
};

// отображение карт оплаты
const getCardData = () => {
  if (localStorage.getItem("dataCard")) {
    return JSON.parse(localStorage.getItem("dataCard"));
  } else return CARD;
};

let basket = getCatalogData();
let basketInactive = getInactiveCatalogdata();
let delivery = getDeliveryData();
let adress = getAdressData();
let card = getCardData();

// ПРОДУКТЫ
function removeFromCart(id) {
  // Находим индекс элемента, который нужно удалить
  const itemIndex = basket.findIndex((item) => item.id === id);
  // Если элемент найден, удаляем его из массива
  if (itemIndex !== -1) {
    basket.splice(itemIndex, 1);
    localStorage.setItem("data", JSON.stringify(basket));
    calculation();
    productsPage.render();
    header.render();
  } else {
    console.error("Элемент для удаления не найден");
  }
}

function removeFromCartIn(id) {
  // Находим индекс элемента, который нужно удалить
  const itemIndex = basketInactive.findIndex((item) => item.id === id);
  // Если элемент найден, удаляем его из массива
  if (itemIndex !== -1) {
    basketInactive.splice(itemIndex, 1);
    localStorage.setItem("dataInactive", JSON.stringify(basketInactive));
    productsInactivePage.render();
  } else {
    console.error("Элемент для удаления не найден");
  }
}

// счетчик на увеличение позиции товара
const increment = (id) => {
  let selected = id;
  let search = basket.find((x) => x.id === selected.id);
  if (search.cart < search.availability) {
    search.cart += 1;
  } else return "";

  update(selected.id);
  productsPage.render();
  isChecked();
  deliveryPage.render();
  localStorage.setItem("data", JSON.stringify(basket));
};

// счетчик на уменьшение позиции товара
const decrement = (id) => {
  let selected = id;
  let search = basket.find((x) => x.id === selected.id);
  if (search.cart === 1) {
    return;
  } else {
    search.cart -= 1;
  }

  update(selected.id);
  productsPage.render();
  isChecked();
  deliveryPage.render();
  localStorage.setItem("data", JSON.stringify(basket));
};

// обновление корзины
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.cart;
  isChecked();
  totalPrice();
  totalProducts();
  totalOldPrice();
  totalDiscount();
};

// расчет новой цены
let countPrice = (price, cart) => {
  let length = String(price).length;
  price = Math.round(price * cart).toLocaleString("ru");
  if (mediaQuery.matches) {
    return `<h4 id='newPrice' class="item__newPrice">${price} сом</h4>`;
  } else {
    if (length < 4) {
      return `<h3 id='newPrice' class="item__newPrice">${price}</h3>`;
    } else {
      return `<h4 id='newPrice' class="item__newPrice">${price}</h4>`;
    }
  }
};

// выбор всех чекбоксов
function toggle(source) {
  let checkAll = document.getElementById("checkAll").checked;

  let checkboxes = document.getElementsByName("check");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
    let selected = checkboxes[i].id.substr(5);
    let search = basket.find((x) => x.id === selected);
    search.checked = checkAll;
    localStorage.setItem("data", JSON.stringify(basket));
    update(selected);
  }
  deliveryPage.render();
}

// отображение статусов чекбоксов
function isChecked() {
  let checkAll = document.getElementById("checkAll");
  let checkboxes = document.getElementsByName("check");
  let amount = 0;
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id.substr(5);
    let search = basket.find((x) => x.id === selected);
    if (search.checked) {
      amount += 1;
      checkboxes[i].checked = true;
    }
  }
  if (amount === 3) {
    checkAll.checked = true;
  } else checkAll.checked = false;
}

// смена статуса чекбокса товара в ЛС по клику
function isCheck(id) {
  let checkbox = document.getElementById(`check${id.id}`).checked;
  let selected = id;
  let search = basket.find((x) => x.id === selected.id);
  search.checked = checkbox;
  localStorage.setItem("data", JSON.stringify(basket));
  deliveryPage.render();
}

// КОРЗИНА
// общая стоимость корзины
let totalPrice = () => {
  const check = document.getElementById("checkcard");
  const order = document.getElementById("order_button");
  let label = document.getElementById("order__price");
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id } = x;
        let search = basket.find((y) => y.id === id) || [];
        if (search.checked) {
          return search.cart * search.newPrice;
        } else {
          return 0;
        }
      })
      .reduce((x, y) => x + y, 0);
    amount = Math.round(amount).toLocaleString("ru");
    label.innerHTML = `${amount} сом`;
    if (check.checked) {
      order.innerHTML = `Оплатить ${amount} сом`;
    } else order.innerHTML = `Заказать`;
  }
};

// общее количество товаров
let totalProducts = () => {
  let label = document.getElementById("order__products");
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id } = x;
        let search = basket.find((y) => y.id === id) || [];
        if (search.checked) {
          return search.cart;
        } else {
          return 0;
        }
      })
      .reduce((x, y) => x + y, 0)
      .toLocaleString("ru");
    // склонение окончаний
    let declOfNum = (n) => {
      n = Math.abs(amount) % 100;
      let n1 = n % 10;
      if (n > 10 && n < 20) {
        return "товаров";
      }
      if (n1 > 1 && n1 < 5) {
        return "товара";
      }
      if (n1 == 1) {
        return "товар";
      }
      return "товаров";
    };

    label.innerHTML = `${amount} ${declOfNum(amount)}`;
  }
};

// общая стоимость корзины (цена без скидки)
let totalOldPrice = () => {
  let label = document.getElementById("order__oldPrice");
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id } = x;
        let search = basket.find((y) => y.id === id) || [];
        if (search.checked) {
          return search.cart * search.oldPrice;
        } else {
          return 0;
        }
      })
      .reduce((x, y) => x + y, 0);

    amount = Math.round(amount).toLocaleString("ru");

    label.innerHTML = `${amount} сом`;
  }
};

//общая стоимость корзины (скидка)
let totalDiscount = () => {
  let label = document.getElementById("order__discount");
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id } = x;
        let search = basket.find((y) => y.id === id) || [];
        if (search.checked) {
          return search.cart * search.oldPrice - search.cart * search.newPrice;
        } else {
          return 0;
        }
      })
      .reduce((x, y) => x + y, 0)
      .toLocaleString("ru");
    label.innerHTML = `−${amount} сом`;
  }
};

//ДОСТАВКА
// отображение статусов чекбоксов при открытии модалки
function isCheckedDel() {
  let checkboxes = document.getElementsByName("checkDel");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;

    let search = delivery.find((x) => x.id === selected);

    if (search.checked) {
      checkboxes[i].checked = true;
    } else {
      checkboxes[i].checked = false;
    }
  }
}

// отображение статусов чекбоксов при смене чекбокса
function isCheckedDelEdit() {
  let checkboxes = document.getElementsByName("checkDel");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;

    let search = delivery.find((x) => x.id === selected);

    if (checkboxes[i].checked) {
      search.checked = true;
    } else {
      search.checked = false;
    }
  }
}

let isDeliveryChoose = () => {
  let label = document.getElementById("deliverychoose");
  if (delivery.length !== 0) {
    let amount = delivery
      .map((x) => {
        let { id } = x;
        let search = delivery.find((y) => y.id === id) || [];
        if (search.checked) {
          return search.name;
        }
      })
      .join("");
    label.innerHTML = `${amount.toLowerCase()}`;
  }
};

//АДРЕС
// отображение статусов чекбоксов
function isCheckedAdr() {
  let checkboxes = document.getElementsByName("checkAdr");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;

    let search = adress.find((x) => x.id === selected);

    if (search.checked) {
      checkboxes[i].checked = true;
    } else {
      checkboxes[i].checked = false;
    }
  }
}

// отображение статусов чекбоксов при смене чекбокса
function isCheckedAdrEdit() {
  let checkboxes = document.getElementsByName("checkAdr");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;

    let search = adress.find((x) => x.id === selected);

    if (checkboxes[i].checked) {
      search.checked = true;
    } else {
      search.checked = false;
    }
  }
}

let isAdressChoose = () => {
  let label = document.getElementsByName("adresschoose");

  if (adress.length !== 0) {
    let amount = adress
      .map((x) => {
        let { id } = x;
        let search = adress.find((y) => y.id === id) || [];
        if (search.checked) {
          return search.name;
        }
      })
      .join("");
    label.forEach((x) => {
      x.innerHTML = `${amount}`;
    });
  }
};

function removeAdress(id) {
  // Находим индекс элемента, который нужно удалить
  const itemIndex = adress.findIndex((item) => item.id === id.id);
  console.log(itemIndex);
  console.log(id.parentNode.parentNode);

  // Если элемент найден, удаляем его из массива
  if (itemIndex !== -1) {
    adress.splice(itemIndex, 1);
    id.parentNode.parentNode.parentNode.removeChild(id.parentNode.parentNode);
    localStorage.setItem("dataAdress", JSON.stringify(adress));
  } else {
    console.error("Элемент для удаления не найден");
  }
}

//КАРТЫ
// отображение статусов чекбоксов
function isCheckedCard() {
  let checkboxes = document.getElementsByName("checkAdr");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;

    let search = card.find((x) => x.id === selected);

    if (search.checked) {
      checkboxes[i].checked = true;
    } else {
      checkboxes[i].checked = false;
    }
  }
}

// отображение статусов чекбоксов при смене чекбокса
function isCheckedCardEdit() {
  let checkboxes = document.getElementsByName("checkAdr");

  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;

    let search = card.find((x) => x.id === selected);

    if (checkboxes[i].checked) {
      search.checked = true;
    } else {
      search.checked = false;
    }
  }
}

let isCardChoose = () => {
  let label = document.getElementById("cardchoose");
  if (card.length !== 0) {
    let amount = card
      .map((x) => {
        let { id } = x;
        let search = card.find((y) => y.id === id) || [];
        if (search.checked) {
          return `<img src='${search.img}' class='order_cardImg'/>${search.name}`;
        }
      })
      .join("");
    if (!mediaQuery.matches) {
      label.innerHTML = `${amount}`;
    }
  }
};

let isCardChooseDel = () => {
  let label2 = document.getElementById("cardchooseDel");
  if (card.length !== 0) {
    let amount2 = card
      .map((x) => {
        let { id } = x;
        let search = card.find((y) => y.id === id) || [];
        if (search.checked) {
          return `<img src='${search.img}' class='order_cardImg'/>${search.name} &nbsp; ${search.data}`;
        }
      })
      .join("");
    label2.innerHTML = `${amount2}`;
  }
};

function closeModal() {
  modalEl.classList.remove("modal--show");
  //   document.body.classList.remove("stop-scrolling");
}

window.addEventListener("click", (e) => {
  if (e.target === modalEl) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// сохранение способа доставки
function save() {
  isCheckedDelEdit();
  isCheckedAdrEdit();
  localStorage.setItem("dataDelivery", JSON.stringify(delivery));
  localStorage.setItem("dataAdress", JSON.stringify(adress));
  closeModal();
  isDeliveryChoose();
  isAdressChoose();
  orderBasket.render();
}

// сохранение выбранной карты
function saveCard() {
  isCheckedCardEdit();
  localStorage.setItem("dataCard", JSON.stringify(card));
  closeModal();
  isCardChoose();
  orderBasket.render();
}

function htmlDeliverytest() {
  //получем два элемента с датами в html
  let label1 = document.getElementById("5-6");
  let label2 = document.getElementById("7-8");
  let p1 = document.getElementById("p_5-6");
  let p2 = document.getElementById("p_7-8");
  let del1 = false;
  let del2 = false;
  basket.map((el) => {
    let cart = el.cart;
    let search = el.dataDelivery.find((y) => y.data === label1.id) || [];
    let search2 = el.dataDelivery.find((y) => y.data === label2.id) || [];

    let amount = 0;
    if (cart <= search.count) {
      amount = cart;
      cart = cart - amount;
    } else {
      amount = search.count;
      cart = cart - amount;
    }

    if (amount > 0 && el.checked) {
      del1 = true;
      label1.innerHTML += `
              <div class="delivery_imgWidth" style='
              height: 56px;
              border-radius: 8px;
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url(${
                el.img
              }) 100% / cover no-repeat, lightgray 50% / cover no-repeat;
              '/>${
                amount > 1 ? `<div class="deliveryAmount">${amount}</div>` : ""
              }</div>`;
    }

    if (cart <= search2.count) {
      amount = cart;
      cart = cart - amount;
    } else {
      amount = search2.count;
      cart = cart - amount;
    }

    if (amount > 0 && el.checked) {
      del2 = true;
      label2.innerHTML += `
              <div style='width: 40px;
              height: 56px;
              border-radius: 8px;
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url(${
                el.img
              }) 100% / cover no-repeat, lightgray 50% / cover no-repeat;
              '/>${
                amount > 1
                  ? `<div class="deliveryAmount"><p>${amount}</p></div>`
                  : ""
              }</div>`;
    }
  });
  if (del1) {
    p1.className = "delivery__info_label caption-600 height";
    p1.innerHTML += `
  5—6 февраля`;
  }
  if (del2) {
    p2.className = "delivery__info_label  caption-600 height";
    p2.innerHTML += `
  7—8 февраля`;
  }
}

// ИЗБРАННОЕ
// добавление/удаление изранного
function addToFavorite(id) {
  let favorite = document.getElementById(`favor${id.id}`);
  let search = basket.find((x) => x.id === id.id);
  console.log(search);
  console.log(favorite);
  if (search.favor) {
    search.favor = false;
    favorite.className = "heart";
  } else {
    search.favor = true;
    favorite.className = "heartActive";
  }

  localStorage.setItem("data", JSON.stringify(basket));
  // productsPage.render();
}

function isFavorite() {
  let favorAll = document.getElementsByName("heart");

  console.log(favorAll);
  for (var i = 0, n = favorAll.length; i < n; i++) {
    let favorite = favorAll[i].id.substr(5);
    console.log(favorAll[i]);
    console.log(favorite);
    let search = basket.find((x) => x.id === favorite);
    console.log(search);
    if (search.favor) {
      favorAll[i].className = "heartActive";
    }
  }
}
