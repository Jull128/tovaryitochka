const CATALOG = [
  {
    id: "el1",
    name: "Футболка UZcotton мужская",
    img: "img/catalog/UZcotton.png",
    oldPrice: 1051,
    newPrice: 522,
    cart: 1,
    availability: 2,
    color: "белый",
    size: 56,
    sortingCenter: "OOO Вайлдберриз",
    OGRN: "ОГРН: 1067746062449",
    adress:
      "	142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    checked: false,
    favor: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 2,
      },
      {
        data: "7-8",
        count: 1,
      },
    ],
  },
  {
    id: "el2",
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    img: "img/catalog/case.png",
    oldPrice: 11500.23,
    newPrice: 10000.23,
    cart: 200,
    availability: 250,
    color: "прозрачный",
    size: "",
    sortingCenter: "OOO Мегапрофстиль",
    OGRN: "ОГРН: 5167746237148",
    adress:
      "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    checked: false,
    favor: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 184,
      },
      {
        data: "7-8",
        count: 70,
      },
    ],
  },
  {
    id: "el3",
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
    img: "img/catalog/pencil.png",
    oldPrice: 950,
    newPrice: 494,
    cart: 1,
    availability: 2,
    color: "",
    size: "",
    sortingCenter: "OOO Вайлдберриз",
    OGRN: "ОГРН: 1067746062449",
    adress:
      "	142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    checked: false,
    favor: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 2,
      },
      {
        data: "7-8",
        count: 0,
      },
    ],
  },
];

const INACTIVE = [
  {
    id: "el4",
    name: "Футболка UZcotton мужская",
    img: "img/catalog/UZcotton.png",
    oldPrice: 1051,
    newPrice: 522,
    cart: 1,
    availability: 2,
    color: "белый",
    size: 56,
    sortingCenter: "OOO Вайлдберриз",
    OGRN: "ОГРН: 1067746062449",
    adress:
      "	142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    checked: false,
    favor: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 2,
      },
      {
        data: "7-8",
        count: 1,
      },
    ],
  },
  {
    id: "el5",
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    img: "img/catalog/case.png",
    oldPrice: 11500.23,
    newPrice: 10000.23,
    cart: 200,
    availability: 250,
    color: "прозрачный",
    size: "",
    sortingCenter: "OOO Мегапрофстиль",
    OGRN: "ОГРН: 5167746237148",
    adress:
      "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    checked: false,
    favor: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 184,
      },
      {
        data: "7-8",
        count: 16,
      },
    ],
  },
  {
    id: "el6",
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
    img: "img/catalog/pencil.png",
    oldPrice: 950,
    newPrice: 494,
    cart: 1,
    availability: 2,
    color: "",
    size: "",
    sortingCenter: "OOO Вайлдберриз",
    OGRN: "ОГРН: 1067746062449",
    adress:
      "	142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    checked: false,
    favor: false,
    dataDelivery: [
      {
        data: "5-6",
        count: 2,
      },
      {
        data: "7-8",
        count: 0,
      },
    ],
  },
];

const ADRESS = [
  {
    id: "adr1",
    name: "Бишкек, улица Табышалиева, 57",
    rate: 4.99,
    checked: true,
  },
  {
    id: "adr2",
    name: "Бишкек, улица Жукеева-Пудовкина, 77/1",
    rate: 4.99,
    checked: false,
  },
  {
    id: "adr3",
    name: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
    rate: 4.99,
    checked: false,
  },
];

const DELIVERY = [
  {
    id: "del1",
    name: "В пункт выдачи",
    checked: true,
  },
  {
    id: "del2",
    name: "Курьером",
    checked: false,
  },
];

const CARD = [
  {
    id: "card1",
    name: "1234 56•• •••• 1234",
    img: "img/icons/mir.svg",
    checked: true,
    data: "01/30",
  },
  {
    id: "card2",
    name: "1234 56•• •••• 1234",
    img: "img/icons/visa.svg",
    checked: false,
    data: "01/30",
  },
  {
    id: "card3",
    name: "1234 56•• •••• 1234",
    img: "img/icons/mastercard.svg",
    checked: false,
    data: "01/30",
  },
  {
    id: "card4",
    name: "1234 56•• •••• 1234",
    img: "img/icons/maestro.svg",
    checked: false,
    data: "01/30",
  },
];
