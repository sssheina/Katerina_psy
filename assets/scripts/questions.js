import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const questionsDataMap = {
  RU: {
    title: "Анонимные вопросы",
    text: [
      "У вас возник вопрос, но вы стесняетесь его задать? Спросите анонимно. Я буду выборочно отвечать на вопросы в instagram-блоге.",
      "Другим людям тоже важно услышать ответ на ваш вопрос. ",
      "Давайте будем бережны друг к другу!",
    ],
    placeholder:
      "Задавайте здесь анонимные вопросы о сексуальности и отношениях, даже те, которые кажутся вам неуместными, глупыми или стыдными...",
    consent: "Cогласие с",
    buttonText: "Отправить",
  },
  EN: {
    title: "Anonymous questions",
    text: [
      "Do you have a question but are shy to ask? Send it anonymously. I will selectively answer questions in my Instagram blog.",
      "Finding the answer to your question may be also important for others.",
      "Let's be kind and caring with each other!",
    ],
    placeholder:
      "Ask anonymous questions about sexuality and relationships here, even if they seem inappropriate, stupid or embarrassing...",
    consent: "Privacy policy agreement",
    buttonText: "Send",
  },
  FR: {
    title: "Questions anonymes",
    text: [
      "Vous avez une question mais vous êtes gêné de la poser ? Demander anonymement. Je répondrai de manière sélective aux questions sur mon blog Instagram.",
      "Il y a une forte chance qu’il y a d’autres personnes pour lesquelles il sera important d’avoir la réponse à votre question.",
      "Soyons bienveillant.e les un.es envers les autres!",
    ],
    placeholder:
      "Posez ici des questions anonymes sur la sexualité et les relations, même celles qui semblent inappropriées, stupides ou embarrassantes...",
    consent: "Consentement à la politique de confidentialité",
    buttonText: "Envoyer",
  },
};

const generateContent = (text) => {
  const textContent = text
    .map((txt) => `<p class="paragraph-standard">${txt}</p>`)
    .join("");

  return textContent;
};

const updateQuestionsContent = (language) => {
  const questionsContent = document.querySelector(".questions__text");
  const sectionTitle = document.querySelector(".questions__title");
  const sectionText = questionsDataMap[language].text;
  const textArea = document.querySelector(".questions__comment");
  const button = document.querySelector(".questions__button");
  const consent = document.querySelector(".questions__consent-text");

  questionsContent.innerHTML = "";
  sectionTitle.textContent = questionsDataMap[language].title;
  textArea.placeholder = questionsDataMap[language].placeholder;
  consent.textContent = questionsDataMap[language].consent;
  button.textContent = questionsDataMap[language].buttonText;
  questionsContent.innerHTML = generateContent(sectionText);
};

loadLanguage(updateQuestionsContent);
dropdown.addEventListener("change", changeLanguage(updateQuestionsContent));
