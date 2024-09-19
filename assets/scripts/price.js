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

const priceDataEn = [];

const priceDataFr = [];

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

const stepTemplate = document.querySelector(".step-template").content;
const stepsContainer = document.querySelector(".steps__content");

const generateCard = (language) => {
  //   while (stepsContainer.firstChild) {
  //     stepsContainer.removeChild(stepsContainer.firstChild);
  //   }
  const card = document.querySelector(".price-card");
  const svg = document.querySelector(".price-card__cross");
  const title = document.querySelector(".price-card__title");
  const list = document.querySelector(".price-card__list");
  const duration = document.querySelector(".price-card__duration");
  const price = document.querySelector(".price-card");

  priceDataMap[language].data.forEach((step) => {
    const stepClone = document.importNode(stepTemplate, true);

    stepClone.querySelector(".steps__number").textContent = step.number;
    stepClone.querySelector(".steps__subtitle").textContent = step.subtitle;
    stepClone.querySelector(".steps__text").textContent = step.text;

    stepsContainer.appendChild(stepClone);
  });
};

const updatePriceContent = (language) => {
  const sectionTitle = document.querySelector(".price__title");
  const button = document.querySelector(".price__button");

  sectionTitle.textContent = priceDataMap[language].title;
  button.textContent = priceDataMap[language].buttonText;

  generateCard(language);
};

loadLanguage(updatePriceContent);
dropdown.addEventListener("change", changeLanguage(updatePriceContent));
