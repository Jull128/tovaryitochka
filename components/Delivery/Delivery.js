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
                <p class='delivery__info_label' style="height: 56px">5—6 февраля</p>
                <p class='delivery__info_label' style="height: 56px">7—8 февраля</p>
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
    <p>Обратная доставка товаров на склад при отказе — бесплатно</p>
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
                <input type="text" id="input" class="Input-text" placeholder="Имя">
                <label for="input" class="Input-label">Имя</label>
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
          <input type="text" id="input" class="Input-text" placeholder="Почта">
          <label for="input" class="Input-label">Почта</label>
      </div>
  </div>
  <div class='form_input_container'>
      <div class="Input">
          <input type="text" id="tel" onkeydown='phoneNumberFormatter()' class="Input-text tel" placeholder="Телефон">
          <label for="input"  class="Input-label">Телефон</label>
      </div>
  </div>
  <div class='form_input_container'>
  <div class="Input">
      <input type="text" id="input" class="Input-text" placeholder="ИНН">
      <label for="input" class="Input-label">ИНН</label>
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

// const createPhone = (str) => str.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

const createPhone = (v) => {
  if (!v) return v;
  const phoneNumber = v.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 2) {
    return `${phoneNumber.slice(0, 1)}`;
  }
  if (phoneNumberLength < 4) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
  }
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)}`;
  }
  if (phoneNumberLength < 9) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}`;
  }

  return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
    1,
    4
  )} ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(
    9,
    11
  )}`;
};

const phoneNumberFormatter = () => {
  const inputField = document.getElementById("tel");
  const formattedInputValue = createPhone(inputField.value);
  inputField.value = formattedInputValue;
};
