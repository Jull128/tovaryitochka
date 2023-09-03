const modalEl = document.querySelector(".modal");

function openModal() {
  modalEl.classList.add("modal--show");
  document.body.classList.add("stop-scrolling");

  let htmlCatalogAdress = "";
  let htmlCatalogDelivery = "";

  ADRESS.forEach(({ id, name, checked }) => {
    htmlCatalogAdress += `
    <div>
        <input type='radio' />
       <p>${name}</p>
       <img src='img/icons/trashcan.svg'/>
    </div>
  `;
  });

  DELIVERY.forEach(({ id, name, checked }) => {
    htmlCatalogDelivery += `
        <label class="checkbox-btn">
            <input type="checkbox" class='input__delivery'>
            <span>${name}</span>
        </label>
  `;
  });

  const html = `
    <div class="modal__card">
    <div>
    <h3>Способ доставки</h3>
<div class='modal__delivery_checkbox_container'>
    ${htmlCatalogDelivery}
    </div>
    </div>
        <p>Мои адреса</p>
        <div>
        ${htmlCatalogAdress}
        </div>
    </div>
`;
  modalEl.innerHTML = html;

  const btnClose = document.querySelector(".modal__button-close");
  btnClose.addEventListener("click", () => closeModal());
}

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
