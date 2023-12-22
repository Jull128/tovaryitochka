const modalElCard = document.querySelector(".modal");

function openModalCard() {
  modalElCard.classList.add("modal--show");
  document.body.classList.add("stop-scrolling");

  let htmlCatalogCard = "";

  card.forEach(({ id, name, img, checked }) => {
    htmlCatalogCard += `
    <div class="modal__adress_line">
    <label class="modal__card_label">
       <input class='input__adress' name='checkAdr'  type='radio' id='${id}' />
       <span></span>
    </label>
    
    <div  style='height: 24px; 
    display: flex;
    align-items: center;
    '>
    <img src='${img}' class='order_cardImg'/>
    </div>

       <p class='modal__card_p caption-400' >${name}</p>
       </div>
  `;
  });

  const html = `
  <div class="modal__card">
    <div class="modal__card_checkbox_container">
        <div style="display: flex; justify-content: space-between">
          <h3>Способ оплаты</h3> 
          <button class="close_button" onclick='closeModal()'></button>
        </div>
        ${htmlCatalogCard}
        </div>
        <div class='modal__button_container'> 
        <button class='modal_button' onclick='saveCard()'>Выбрать</button>
        </div>
    </div>
    </div>

`;

  modalElCard.innerHTML = html;
  isCheckedCard();
  // const btnClose = document.querySelector(".modal__button-close");
  // btnClose.addEventListener("click", () => closeModal());
}
