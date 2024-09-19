import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const priceDataRu = [
  {
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    title: "Первая сессия",
    list: [
      "вы поймете, комфортно ли вам со мной",
      "вы зададите вопросы",
      "мы выясним ваши потребности и ожидания",
      "мы выберем направление терапии",
    ],
    duration: "Длительность 30 минут",
    price: "Бесплатно",
  },
  {
    svg: ["/assets/images/figures/sprite.svg#cross"],
    title: "Индивидуальные сессии",
    list: [
      "мы затронем темы, которые важны для вас",
      "мы определим результаты, которые вы хотите получить",
      "мы будем идти в вашем темпе",
      "вы получите новые навыки",
      "поделаете упражнения",
    ],
    duration: "Длительность 50 минут",
    price: "100 €",
  },
  {
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    title: "Парные или групповые сессии",
    list: [
      "мы исследуем ситуацию в ваших отношениях",
      "определим, чего вы хотите достичь",
      "согласуем общие ценности",
      "поработаем над навыками общения и сочувствия",
    ],
    duration: "Длительность 70 минут",
    price: "ОТ 180 €",
  },
];

const priceDataEn = [
  {
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    title: "First session",
    list: [
      "you will check if you are comfortable with me",
      "ask your questions",
      "we will explore your needs and expectations",
      "choose the direction of therapy",
    ],
    duration: "Duration 30 minutes",
    price: "Free",
  },
  {
    svg: ["/assets/images/figures/sprite.svg#cross"],
    title: "Individual sessions",
    list: [
      "we’ll cover topics that are important to you",
      "determine the results you want",
      "go at your pace",
      "you will gain new skills and do some exercises",
    ],
    duration: "Duration 50 minutes",
    price: "100 €",
  },
  {
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    title: "Couple or group sessions",
    list: [
      "we’ll assess the situation in your relationship",
      "prioritise the therapy steps",
      "you’ll agree on common values",
      "and work on communication and empathy skills",
    ],
    duration: "Duration 70 minutes",
    price: "From 180 €",
  },
];

const priceDataFr = [
  {
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    title: "La première session",
    list: [
      "vous comprendrez si vous êtes à l'aise avec moi",
      "et poserez vos question",
      "on étudiera vos besoins et vos attentes",
      "et choisira la direction de la thérapie",
    ],
    duration: "Durée 30 minutes",
    price: "Gratuit",
  },
  {
    svg: ["/assets/images/figures/sprite.svg#cross"],
    title: "La session en individuel",
    list: [
      "on abordera des sujets qui sont importants pour vous",
      "déterminera les résultats qui vous conviendront",
      "tout sera à votre rythme",
      "vous acquerrez de nouvelles compétences",
      "ferez des exercices",
    ],
    duration: "Durée 50 minutes",
    price: "100 €",
  },
  {
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    title: "La session en couple ou en groupe",
    list: [
      "on analysera la situation dans votre relation",
      "priorisera les étapes de notre travail",
      "vous vous entendrez sur des valeurs communes",
      "travaillerez les compétences de communication et d'empathie",
    ],
    duration: "Durée 70 minutes",
    price: "180 €+",
  },
];

const priceDataMap = {
  RU: {
    title: "Стоимость",
    data: priceDataRu,
    buttonText: "Запись",
  },
  EN: {
    title: "Fees",
    data: priceDataEn,
    buttonText: "Let’s Talk!",
  },
  FR: {
    title: "Prix",
    data: priceDataFr,
    buttonText: "Inscription",
  },
};

const generateCard = (svg, title, list, duration, price) => {
  const svgString = svg
    .map(
      (icon) => `<svg class="price-card__cross icon-cross">
    <use xlink:href="${icon}"></use>
  </svg>`
    )
    .join("");

  const listItem = list
    .map(
      (item) =>
        `<li class="price-card__list-item paragraph-standard">${item}</li>`
    )
    .join("");

  return `<div class="price-card price__card hover-transform hover-orange">
            <div class="price-card__cross-container">${svgString}</div>
            <h3 class="price-card__title h3-title">${title}</h3>
            <ul class="price-card__list">${listItem}</ul>
            <h5 class="price-card__duration h5-title">${duration}</h5>
            <p class="price-card__price paragraph-large">${price}</p>
          </div>`;
};

const updatePriceContent = (language) => {
  const priceContainer = document.querySelector(".price__cards");
  const sectionTitle = document.querySelector(".price__title");
  const button = document.querySelector(".price__button");

  priceContainer.innerHTML = "";
  sectionTitle.textContent = priceDataMap[language].title;
  button.textContent = priceDataMap[language].buttonText;

  priceDataMap[language].data.map((card) => {
    const { svg, title, list, duration, price } = card;

    const priceCard = generateCard(svg, title, list, duration, price);
    priceContainer.innerHTML += priceCard;
  });
};

loadLanguage(updatePriceContent);
dropdown.addEventListener("change", changeLanguage(updatePriceContent));
