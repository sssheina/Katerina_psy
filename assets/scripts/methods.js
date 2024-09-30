import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const methodsDataRu = [
  {
    title: "Секс-терапия",
    text: `Терапия эмоциональных и психологических аспектов сексуальных проблем. <br> Помогает решить проблемы, связанные с интимностью`,
  },
  {
    title: "АСТ",
    text: `Метод помогает оставаться в контакте с неудобными чувствами и мыслями, принимать осознанные решения, основанные на ваших ценностях`,
  },
  {
    title: "ЭФТ",
    text: `Метод работает с эмоциональными реакциями и поведением, помогает наладить коммуникацию в союзе, раскрыть истинные потребности`,
  },
  {
    image: "/assets/images/method_pic-card_1.png",
    alt: "Абстрактные линии",
  },
  {
    title: "IFS при травме насилия",
    text: `Модель внутренних семейных систем, чтобы восстановиться после опыта насилия, абъюзивных отношений. <br> Работа с авторами абьюза`,
  },
  {
    title: "Арт-терапия",
    text: `Метод использует творчество для работы с бессознательным, помогает выразить и осознать свои чувства через искусство`,
  },
];

const methodsDataEn = [
  {
    title: "Sex-therapy",
    text: `Therapy for emotional and psychological aspects of sexual problems. Helps to solve issues related to intimacy and sexual relationships`,
  },
  {
    title: "АСТ",
    text: `The method helps you to stay in touch with uncomfortable feelings and thoughts, make informed decisions based on your values`,
  },
  {
    title: "EFT",
    text: `The method works with emotions and behaviour, helps to establish communication between partners, reveal true needs`,
  },
  {
    image: "/assets/images/method_pic-card_1.png",
    alt: "Abstract lines",
  },
  {
    title: "IFS for trauma violence",
    text: `The Internal Family Systems model is used for recovery from experiences of violence and abusive relationships. Works with abusers as well`,
  },
  {
    title: "Art therapy",
    text: `The method uses creativity to reveal processes in the unconscious, helps to identify and express your feelings through art`,
  },
];

const methodsDataFr = [
  {
    title: "Sexothérapie",
    text: `Cette thérapie est dédiée aux aspects émotionnels et psychologiques des problèmes sexuels. Elle aide à résoudre les difficultés liés à l’intimité`,
  },
  {
    title: "ACT",
    text: `La méthode vous aide à rester en contact avec des sentiments et des pensées inconfortables, prendre des décisions éclairées basées sur vos valeurs`,
  },
  {
    title: "EFT",
    text: `La méthode adresse des réactions émotionnelles et le comportement, aide à établir la communication en union en révélant de vrais besoins`,
  },
  {
    image: "/assets/images/method_pic-card_1.png",
    alt: "Lignes abstraites",
  },
  {
    title: "IFS pour traumatismes",
    text: `Le modèle de systèmes familiaux internes (IFS) traite les conséquences de violence et de relations abusives. Inclu le travail avec des acteur.ices de violance`,
  },
  {
    title: "Art-thérapie",
    text: `La méthode utilise la créativité pour travailler avec l'inconscient, aide à exprimer et réalisez vos sentiments à travers des techniques artistiques`,
  },
];

const methodsDataMap = {
  RU: {
    title: "Я применяю эти методы",
    data: methodsDataRu,
    buttonText: "Запись",
  },
  EN: {
    title: "I use these\u00A0methods",
    data: methodsDataEn,
    buttonText: "Start First session",
  },
  FR: {
    title: "J’utilise ces\u00A0méthodes",
    data: methodsDataFr,
    buttonText: "Prendre RDV",
  },
};

const generateCard = ({ title, text, image, alt }) => {
  if (image) {
    return `
        <div class="methods-card methods__card">
          <img class="methods-card__img" src="${image}" alt="${alt}">
        </div>
      `;
  }
  return `
      <div class="methods-card methods__card">
        <h3 class="methods-card__title h3-title">${title}</h3>
        <p class="methods__text paragraph-standard">${text}</p>
      </div>
    `;
};

const updateMethodsSection = (language) => {
  const methodsContainer = document.querySelector(".methods__cards");
  const sectionTitle = document.querySelector(".methods__title");
  const button = document.querySelector(".methods__button");

  methodsContainer.innerHTML = "";
  sectionTitle.textContent = methodsDataMap[language].title;
  button.textContent = methodsDataMap[language].buttonText;

  methodsDataMap[language].data.map((card) => {
    const { title, text, image, alt } = card;
    methodsContainer.innerHTML += generateCard({ title, text, image, alt });
  });
};

loadLanguage(updateMethodsSection);
dropdown.addEventListener("change", changeLanguage(updateMethodsSection));
