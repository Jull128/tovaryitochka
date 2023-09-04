// отображение корзины
const dataCatalog = () => {
  if (localStorage.getItem("data")) {
    return JSON.parse(localStorage.getItem("data"));
  } else return CATALOG;
};

// отображение корзины
const dataDelivery = () => {
  if (localStorage.getItem("dataDelivery")) {
    return JSON.parse(localStorage.getItem("dataDelivery"));
  } else return DELIVERY;
};

// отображение корзины
const dataAdress = () => {
  if (localStorage.getItem("dataAdress")) {
    return JSON.parse(localStorage.getItem("dataAdress"));
  } else return ADRESS;
};

let basket = dataCatalog();
let delivery = dataDelivery();
let adress = dataAdress();

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
  localStorage.setItem("data", JSON.stringify(basket));
};

// обновление корзины
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.cart;
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
let countPrice = (prrice, cart) => {
  let length = String(prrice).length;

  if (length < 4) {
    return `<h3 id='newPrice' class="item__newPrice">${prrice * cart}</h3>`;
  } else {
    return `<h4 id='newPrice' class="item__newPrice">${prrice * cart}</h4>`;
  }
};

// выбор всех чекбоксов
function toggle(source) {
  checkAll = document.getElementById("checkAll").checked;

  checkboxes = document.getElementsByName("check");
  console.log(checkAll);
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
  let checkboxes = document.getElementsByName("check");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id.substr(5);
    let search = basket.find((x) => x.id === selected);
    if (search.checked) {
      checkboxes[i].checked = true;
    }
  }
}

// смена статуса чекбокса товара в ЛС по клику
function isCheck(id) {
  let checkbox = document.getElementById(`check${id.id}`).checked;
  console.log(checkbox);
  let selected = id;
  let search = basket.find((x) => x.id === selected.id);
  search.checked = checkbox;
  localStorage.setItem("data", JSON.stringify(basket));
  update(selected.id);
}

// КОРЗИНА
// общая стоимость корзины
let TotalPrice = () => {
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
    label.innerHTML = `${amount} сом`;
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
      .reduce((x, y) => x + y, 0);
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
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `${amount} сом`;
  }
};

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
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `- ${amount} сом`;
  }
};

//ДОСТАВКА
// обновление корзины
// let updateDelivery = (id) => {
//   let search = delivery.find((x) => x.id === id);
//   document.getElementById(id).innerHTML = search.cart;
// };

// смена статуса чекбокса товара в ЛС по клику
function isCheckDel(id) {
  let checkbox = document.getElementById(id.id).checked;
  console.log(checkbox);
  let selected = id;
  console.log(selected);
  let search = delivery.find((x) => x.id === selected.id);
  console.log(search.checked);
  search.checked = checkbox;
  localStorage.setItem("dataDelivery", JSON.stringify(delivery));
}

function isCheckedDel() {
  let checkboxes = document.getElementsByName("checkDel");
  console.log(checkboxes);
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    let selected = checkboxes[i].id;
    console.log(selected);
    let search = delivery.find((x) => x.id === selected);
    console.log(search.checked);
    console.log(checkboxes[i].checked);
    if (search.checked) {
      checkboxes[i].checked = true;
    } else {
      checkboxes[i].checked = false;
    }
  }
}
