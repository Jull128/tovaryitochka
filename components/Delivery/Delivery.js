class Delivery {
  render() {
    let htmlAdaptive = mediaQuery.matches
      ? `
      <div class='delivery__title'>
        <h3>Способ доставки </h3>
        <h4 onclick='openModal()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
      </div>
      <div class='delivery__info'>
          <div class='delivery__info_line'>
            <p class='delivery__info_label caption-600'>Пункт выдачи</p>
            <div>
              <p name='adresschoose'></p>
              <p class='caption' style='margin-top: 4px;'><img style='margin-right: 1px;' src="img/icons/star_fill.svg"/>&nbsp;4.99&nbsp; Ежедневно с 10 до 21 </p>
            </div>
          </div>
          <div class='delivery__info_line'>
              <p class='delivery__info_label caption-600'>Стоимость доставки</p>
              <p>Бесплатно</p>
          </div>
          <div class='delivery__info_line'>
            <p id='p_5-6' class='delivery__info_label caption-600'></p>
            <div id='5-6' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'>
            </div>
          </div>
          <div class='delivery__info_line'>
            <p id='p_7-8' class='delivery__info_label caption-600'></p>
            <div id='7-8' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'>
            </div>
          </div>
      </div>
    `
      : `
      <div class='delivery__title'>
      <h2>Способ доставки </h2>
      <h4 onclick='openModal()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
      </div>
    <div class='delivery__info'>
      <div class='delivery__info_line'>
          <p class='delivery__info_label caption-600' style='height: 44px'>Пункт выдачи</p>
          <p class='delivery__info_label caption-600'>Стоимость доставки</p>
          <p id='p_5-6' class='delivery__info_label caption-600'></p>
          <p id='p_7-8' class='delivery__info_label caption-600'></p>
      </div>
      <div class='delivery__info_line'>
      <div>
          <p name='adresschoose'></p>
          <p class='caption' style='margin-top: 4px;'><img style='margin-right: 1px;' src="img/icons/star_fill.svg"/>&nbsp;4.99&nbsp; Ежедневно с 10 до 21 </p>
          </div>
          <p>Бесплатно</p>
          <div id='5-6' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'></div>
          <div id='7-8' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'></div>
      </div>
      </div>
    </div>
    `;

    let formAdaptive = mediaQuery.matches
      ? `
      <form class='form'>

      <div class='form_input_container'>
          <div class="Input">
              <input type="text" id="name" value="" class="Input-text caption-400" placeholder="Имя">
              <label for="name" class="Input-label caption">Имя</label>
              <small>Error</small>
          </div>

      </div>
      <div class='form_input_container'>
          <div class="Input">
              <input type="text" id="sername" class="Input-text caption-400" placeholder="Фамилия">
              <label for="sername" class="Input-label caption">Фамилия</label>
              <small>Error</small>
          </div>
      </div>
    <div class='form_input_container'>
    <div class="Input">
        <input type="text" id="email" onchange="checkEmail()" class="Input-text caption-400" placeholder="Почта">
        <label for="email" class="Input-label caption">Почта</label>
        <small>Error</small>
    </div>
</div>
<div class='form_input_container'>
    <div class="Input">
        <input type="text" id="phone"  maxlength="30" onchange="checkPhone()" value='+7' class="Input-text caption-400 tel" placeholder="Телефон">
        <label for="phone"  class="Input-label caption">Телефон</label>
        <small>Error</small>
    </div>
</div>
<div class='form_input_container'>
<div class="Input success">
    <input type="text" id="tax" onchange="checkTax()" class="Input-text caption-400" placeholder="ИНН">
    <label for="tax" class="Input-label caption">ИНН</label>
    <small>Для таможенного оформления</small>
</div>
</div>
      </div>
  </form>
      `
      : `
      <form class='form'>
        <div class='form_line'>
        <div class='form_input_container'>
            <div class="Input">
                <input type="text" id="name" value="" class="Input-text caption-400" placeholder="Имя">
                <label for="name" class="Input-label caption">Имя</label>
                <small>Error</small>
            </div>

        </div>
        <div class='form_input_container'>
            <div class="Input">
                <input type="text" id="sername" class="Input-text caption-400" placeholder="Фамилия">
                <label for="sername" class="Input-label caption">Фамилия</label>
                <small>Error</small>
            </div>
        </div>
      </div>
      <div class='form_line'>
      <div class='form_input_container'>
      <div class="Input">
          <input type="text" id="email" onchange="checkEmail()" class="Input-text caption-400" placeholder="Почта">
          <label for="email" class="Input-label caption">Почта</label>
          <small>Error</small>
      </div>
  </div>
  <div class='form_input_container'>
      <div class="Input">
          <input type="text" id="phone"  maxlength="30" onchange="checkPhone()" value='+7' class="Input-text caption-400 tel" placeholder="Телефон">
          <label for="phone"  class="Input-label caption">Телефон</label>
          <small>Error</small>
      </div>
  </div>
  <div class='form_input_container'>
  <div class="Input success">
      <input type="text" id="tax" onchange="checkTax()" class="Input-text caption-400" placeholder="ИНН">
      <label for="tax" class="Input-label caption">ИНН</label>
      <small>Для таможенного оформления</small>
  </div>
</div>
        </div>
        </div>
    </form>
      `;

    let htmlCatalog = `
    <div class='delivery__container'>
      <div class='delivery__section'>
        <div class='delivery__block'>
          ${htmlAdaptive}
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <img src='img/icons/price_shipping.svg' alt='' />
          <div>
            <div style="display: flex; position: relative;">
              <div class='caption'>Обратная доставка товаров на склад при отказе — &nbsp;
                <span class="free-shipping-text-del caption">бесплатно
                  <div class="coupontooltidel caption">
                    Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно
                  </div>  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='delivery__section'>
        <div class='delivery__title'>
        ${
          mediaQuery.matches
            ? `<h3>Способ оплаты</h3>`
            : `<h2>Способ оплаты</h2>`
        }
          <h4 onclick='openModalCard()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
        </div>
        <div name='cardchoose'  id='cardchooseDel' class="cardchooseDel"> 01/30</div>
          <p class="caption" style='color: var(--system-gray, #A0A0A4);'>Спишем оплату с карты при получении</p>
        </div>

<div class='delivery__section'>
${mediaQuery.matches ? `<h3>Получатель</h3>` : `<h2>Получатель</h2>`}

    ${formAdaptive}
</div>
</div>
            `;

    ROOT_DELIVERY.innerHTML = htmlCatalog;
    isAdressChoose();
    isCardChooseDel();
    htmlDeliverytest();
  }
}

const deliveryPage = new Delivery();
deliveryPage.render();

const username = document.getElementById("name");
const usersername = document.getElementById("sername");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const tax = document.getElementById("tax");

function checkPhone() {
  // trim to remove the whitespaces
  const phoneValue = phone.value.trim();

  if (!isPhone(phoneValue)) {
    setErrorFor(phone, "Формат: +9 999 999 99 99");
  } else if (isPhone(phoneValue)) {
    phone.value = phoneValue.replace(
      /(\+7{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "$1 $2 $3-$4-$5"
    );
    setSuccessFor(phone);
  } else {
    setSuccessFor(phone);
  }
}

function checkEmail() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();

  if (!isEmail(emailValue)) {
    setErrorFor(email, "Проверьте адрес электронной почты");
  } else {
    setSuccessFor(email);
  }
}

function checkTax() {
  // trim to remove the whitespaces
  const taxValue = tax.value.trim();

  if (taxValue.length < 14) {
    setErrorFor(tax, "Проверьте ИНН");
  } else {
    const formControl = tax.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "Input success";
    tax.className = "Input-text caption-400";
    small.innerText = `Для таможенного оформления`;
  }
}

function emptyInput() {
  const usernameValue = username.value.trim();
  const usersernameValue = usersername.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const taxValue = tax.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Укажите имя");
  } else {
    setSuccessFor(username);
  }

  if (usersernameValue === "") {
    setErrorFor(usersername, "Укажите фамилию");
  } else {
    setSuccessFor(usersername);
  }

  if (phoneValue.length < 11) {
    setErrorFor(phone, "Укажите телефон");
  } else {
    setSuccessFor(phone);
  }

  if (emailValue === "") {
    setErrorFor(email, "Укажите Email");
  } else {
    setSuccessFor(email);
  }

  if (taxValue === "") {
    setErrorFor(tax, "Укажите ИНН");
  } else {
    setSuccessFor(tax);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "Input error";
  input.className = "Input-text caption-400 error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "Input";
  input.className = "Input-text caption-400";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(phone1) {
  return /^((\+7)+([0-9]){10})$/.test(phone1);
}
