// отображение корзины
const dataCatalog = () => {
  if (localStorage.getItem("data")) {
    return JSON.parse(localStorage.getItem("data"));
  } else return CATALOG;
};

// отображение доставки
const dataDelivery = () => {
  if (localStorage.getItem("dataDelivery")) {
    return JSON.parse(localStorage.getItem("dataDelivery"));
  } else return DELIVERY;
};

// отображение адреса
const dataAdress = () => {
  if (localStorage.getItem("dataAdress")) {
    return JSON.parse(localStorage.getItem("dataAdress"));
  } else return ADRESS;
};

// отображение карт оплаты
const dataCard = () => {
  if (localStorage.getItem("dataCard")) {
    return JSON.parse(localStorage.getItem("dataCard"));
  } else return CARD;
};

let basket = dataCatalog();
let delivery = dataDelivery();
let adress = dataAdress();
let card = dataCard();

// ПРОДУКТЫ
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
  if (search.cart === 0) return;
  else {
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
  TotalPrice();
  TotalProducts();
  TotalOldPrice();
  TotalDiscount();
};

// калькуляция количества позиций товаров в корзине (шапка). подсчет количества позиций, без учета счетчика
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  let cartLength = Object.keys(basket?.map((x) => x.cart)).length;
  cartIcon.innerHTML = cartLength;
};
calculation();

// расчет новой цены
let countPrice = (price, cart) => {
  let length = String(price).length;
  price = (price * cart).toLocaleString("ru");

  if (length < 4) {
    return `<h3 id='newPrice' class="item__newPrice">${price}</h3>`;
  } else {
    return `<h4 id='newPrice' class="item__newPrice">${price}</h4>`;
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
  update(selected.id);
}

// КОРЗИНА
// общая стоимость корзины
let TotalPrice = () => {
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
      .reduce((x, y) => x + y, 0)
      .toLocaleString("ru");
    label.innerHTML = `${amount} сом`;
    if (check.checked) {
      order.innerHTML = `Оплатить ${amount} сом`;
    } else order.innerHTML = `Заказать`;
  }
};

// общее количество товаров
let TotalProducts = () => {
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
let TotalOldPrice = () => {
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
      .reduce((x, y) => x + y, 0)
      .toLocaleString("ru");
    label.innerHTML = `${amount} сом`;
  }
};

//общая стоимость корзины (скидка)
let TotalDiscount = () => {
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
    label.innerHTML = `${amount}`;
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
    label.innerHTML = `${amount}`;
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

    if (amount > 0) {
      del1 = true;
      label1.innerHTML += `
              <div style='width: 40px;
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

    if (amount > 0) {
      del2 = true;
      label2.innerHTML += `
              <div style='width: 40px;
              height: 56px;
              border-radius: 8px;
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url(${
                el.img
              }) 100% / cover no-repeat, lightgray 50% / cover no-repeat;
              '/>${
                amount > 1 ? `<div class="deliveryAmount">${amount}</div>` : ""
              }</div>`;
    }
  });
  if (del1) {
    p1.className = "delivery__info_label height";
    p1.innerHTML += `
  5—6 февраля`;
  }
  if (del2) {
    p2.className = "delivery__info_label height";
    p2.innerHTML += `
  7—8 февраля`;
  }
}
