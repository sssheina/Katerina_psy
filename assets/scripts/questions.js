import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const questionsDataMap = {
  RU: {
    title: "Анонимные вопросы",
    text: [
      "У вас возник вопрос, но вы стесняетесь его задать?",
      "Спросите анонимно.<br> Я&nbsp;буду выборочно отвечать на&nbsp;вопросы в&nbsp;<a class='link' target='_blank' href='https://www.instagram.com/inspired.intimacy/'>instagram-блоге</a>.",
      "Другим людям тоже важно услышать ответ на ваш вопрос. ",
      "Давайте будем бережны друг к другу!",
    ],
    placeholder:
      "Задавайте здесь анонимные вопросы о сексуальности и отношениях, даже те, которые кажутся вам неуместными, глупыми или стыдными...",
    consent: "Cогласие с",
    consentLink: "Политикой конфиденциальности",
    buttonText: "Отправить",
  },
  EN: {
    title: "Anonymous questions",
    text: [
      "Do you have a question but are shy to ask? Send it anonymously. I will selectively answer questions in my <a class='link' target='_blank' href='https://www.instagram.com/inspired.intimacy/'>Instagram blog</a>.",
      "Finding the answer to your question may be also important for others.",
      "Let's be kind and caring with each other!",
    ],
    placeholder:
      "Ask anonymous questions about sexuality and relationships here, even if they seem inappropriate, stupid or embarrassing...",
    consent: "agreement",
    consentLink: "Privacy policy",
    buttonText: "Send",
  },
  FR: {
    title: "Questions anonymes",
    text: [
      "Vous avez une question mais vous êtes gêné de la poser ? Demander anonymement. Je répondrai de manière sélective aux questions sur mon <a class='link' target='_blank' href='https://www.instagram.com/inspired.intimacy/'>blog Instagram</a>.",
      "Il y a une forte chance qu’il y a d’autres personnes pour lesquelles il sera important d’avoir la réponse à votre question.",
      "Soyons bienveillant.e les un.es envers les autres!",
    ],
    placeholder:
      "Posez ici des questions anonymes sur la sexualité et les relations, même celles qui semblent inappropriées, stupides ou embarrassantes...",
    consent: "Consentement à",
    consentLink: "la politique de confidentialité",
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
  const content = questionsDataMap[language] || questionsDataMap.EN;

  const questionsContent = document.querySelector(".questions__text");
  const sectionTitle = document.querySelector(".questions__title");
  const sectionText = content.text;
  const textArea = document.querySelector(".questions__comment");
  const button = document.querySelector(".questions__button");
  const consent = document.querySelector(".questions__consent-text");
  const consentLink = document.querySelector(".questions__link");

  questionsContent.innerHTML = "";
  sectionTitle.textContent = content.title;
  textArea.placeholder = content.placeholder;
  consent.textContent = content.consent;
  consentLink.textContent = content.consentLink;

  button.textContent = content.buttonText;
  questionsContent.innerHTML = generateContent(sectionText);
};

loadLanguage(updateQuestionsContent);
dropdown.addEventListener("change", changeLanguage(updateQuestionsContent));
