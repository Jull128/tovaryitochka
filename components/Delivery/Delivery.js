class Delivery {
  render() {
    let htmlCatalog = `
    <div class='delivery__container'>
<div class='delivery__section'>
    <div class='delivery__block'>
        <div class='delivery__title'>
        <h2>Способ доставки </h2>
        <h4 onclick='openModal()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
        </div>
        <div class='delivery__info'>
            <div class='delivery__info_line'>
                <p class='delivery__info_label'>Пункт выдачи</p>
                <p class='delivery__info_label'>Стоимость доставки</p>
                <p id='p_5-6' class='delivery__info_label'></p>
                <p id='p_7-8' class='delivery__info_label'></p>
            </div>
            <div class='delivery__info_line'>
                <p name='adresschoose'></p>
                <p>Бесплатно</p>
                <div id='5-6' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'></div>
                <div id='7-8' name='htmlDelivery' style='display: flex; gap: 8px; position: relative;'></div>
            </div>
        </div>
    </div>
    <div>
    <img src='img/icons/price_shipping.svg' alt='' />
    <p>Обратная доставка товаров на склад при отказе — <span class="free-shipping-text ">бесплатно</span></p>
    </div>
</div>
<div class='delivery__section'>
    <div>
    <div class='delivery__title'>
    <h2>Способ оплаты</h2>
    <h4 onclick='openModalCard()' style='color: var(--system-magenta, #CB11AB); cursor: pointer;'>Изменить</h4>
    </div>
        <div name='cardchoose' style='height: 24px; 
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 16px 0 8px 0
        '></div>
        <p class="caption" style='color: var(--system-gray, #A0A0A4);'>Спишем оплату с карты при получении</p>
    </div>
</div>
<div class='delivery__section'>
    <h2>Получатель</h2>
    <form class='form'>
        <div class='form_line'>
        <div class='form_input_container'>
            <div class="Input">
                <input type="text" id="name" onChange="checkUser()" value="" class="Input-text" placeholder="Имя">
                <label for="input" class="Input-label">Имя</label>
                <small>Error</small>
            </div>

        </div>
        <div class='form_input_container'>
            <div class="Input">
                <input type="text" id="input" class="Input-text" placeholder="Фамилия">
                <label for="input" class="Input-label">Фамилия</label>

            </div>
        </div>
      </div>
      <div class='form_line'>
      <div class='form_input_container'>
      <div class="Input">
          <input type="text" id="email" onchange="checkEmail()" class="Input-text" placeholder="Почта">
          <label for="input" class="Input-label">Почта</label>
          <small>Error</small>
      </div>
  </div>
  <div class='form_input_container'>
      <div class="Input">
          <input type="text" id="phone"  maxlength="30" onchange="checkPhone()" value='+7' class="Input-text tel" placeholder="Телефон">
          <label for="input"  class="Input-label">Телефон</label>
          <small>Error</small>
      </div>
  </div>
  <div class='form_input_container'>
  <div class="Input success">
      <input type="text" id="tax" onchange="checkTax()" class="Input-text" placeholder="ИНН">
      <label for="input" class="Input-label">ИНН</label>
      <small>Для таможенного оформления</small>
  </div>
</div>
        </div>
        </div>
    </form>
</div>
</div>
            `;

    ROOT_DELIVERY.innerHTML = htmlCatalog;
    isAdressChoose();
    isCardChoose();
    htmlDeliverytest();
  }
}

const deliveryPage = new Delivery();
deliveryPage.render();

const username = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const tax = document.getElementById("tax");

function checkUser() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Укажите имя");
  } else {
    setSuccessFor(username);
  }
}

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
    small.innerText = `Для таможенного оформления`;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "Input error";
  input.className = "Input-text error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "Input";
  input.className = "Input-text";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(phone1) {
  return /^((\+7)+([0-9]){10})$/.test(phone1);
}
