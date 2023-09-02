// отображение корзины
const catalog = () => {
  if (localStorage.getItem("data")) {
    return JSON.parse(localStorage.getItem("data"));
  } else return CATALOG;
};

let basket = catalog();

// счетчик на увеличение позиции товара
const increment = (id) => {
  let selected = id;
  let search = basket.find((x) => x.id === selected.id);
  if (search.cart < search.availability) {
    search.cart += 1;
  } else return "";

  update(selected.id);
  productsPage.render();
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
  localStorage.setItem("data", JSON.stringify(basket));
};

// обновление корзины
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.cart;
};

// калькуляция количества позиций товаров в корзине (шапка)
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  let cartLength = Object.keys(basket.map((x) => x.cart)).length;
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
  checkboxes = document.getElementsByName("check");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
    let selected = checkboxes[i].id.substr(5);
    let search = basket.find((x) => x.id === selected);
    search.check = !search.check;
    localStorage.setItem("data", JSON.stringify(basket));
    update(selected);
  }
}

// смена статуса чекбокса в ЛС по клику
function isCheck(id) {
  let selected = id;
  let search = basket.find((x) => x.id === selected.id);
  search.check = !search.check;
  localStorage.setItem("data", JSON.stringify(basket));
  update(selected.id);
}

// общая стоимость корзины
let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        console.log(x);
        let search = basket.find((y) => y.id === id) || [];
        if (search.check) {
          return search.cart * search.newPrice;
        } else {
          return 0;
        }
      })
      .reduce((x, y) => x + y, 0);

    console.log(amount);
  }
};

TotalAmount();
