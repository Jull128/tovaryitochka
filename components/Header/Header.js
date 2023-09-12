class Header {
  render() {
    let html = "";

    {
      mediaQuery.matches
        ? (html += `<div class="header__container">
        <button class="nav-element__burger">
          <img src="img/icons/burgerMob.svg" alt="" />
        </button>
        <span class="nav-element__title">ТОВАРЫ И ТОЧКА</span>
        <button class="search__btn">
        <img src="img/icons/searchMob.svg" alt="" />
      </button>
    </div>`)
        : (html += `<div class="header__container">
                      <div class="nav-element">
                        <button class="nav-element__burger">
                          <img src="img/icons/burger.svg" alt="" />
                        </button>
                        <span class="nav-element__title">ТОВАРЫ &#10; И ТОЧКА</span>
                      </div>
                      <div class="search__container">
                        <input class="search" placeholder="Я ищу..." type="text" />
                        <button class="search__btn"></button>
                      </div>
                      <div class="navbar">
                        <div class="navbar__item">
                          <img src="img/icons/profile.svg" alt="" />
                          <p>Профиль</p>
                        </div>
                        <div class="navbar__item">
                          <img src="img/icons/basket.svg" alt="" />
                          <div id="cartAmount" class="cartAmount"></div>
                          <p>Корзина</p>
                        </div>
                      </div>
                  </div>`);
    }

    ROOT_HEADER.innerHTML = html;
  }
}

const header = new Header();
header.render();

// калькуляция количества позиций товаров в корзине (шапка). подсчет количества позиций, без учета счетчика
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  console.log(cartIcon);
  let cartLength = Object.keys(basket?.map((x) => x.cart)).length;
  cartIcon.innerHTML = cartLength;
};
if (!mediaQuery.matches) {
  calculation();
}
