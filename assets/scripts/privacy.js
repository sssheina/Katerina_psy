import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const privacyPolicyData = {
  RU: {
    title: "Политика конфиденциальности",
    text: [
      "1 пар Содержание политики конфиденциальности на русском языке здесь.",
      "2 пар Содержание политики конфиденциальности на русском языке здесь.",
    ],
    buttonText: "Закрыть",
  },
  EN: {
    title: "Privacy policy",
    text: [
      "1 par Your privacy policy content in English goes here.",
      "2 par Your privacy policy content in English goes here.",
    ],
    buttonText: "Close",
  },

  FR: {
    title: "FRENCH Privacy policy",
    text: ["Your privacy policy content in FRENCH goes here."],
    buttonText: "Fermer",
  },
};

const generatePrivacyPolicyContent = (title, text) => {
  const paragraph = text.map((par) => par).join("");

  return `<h3 class="modal__title h3-title">${title}</h3>
          <p class="modal__text paragraph-small">${paragraph}</p>`;
};

const updatePrivacyPolicyContent = (language) => {
  const content = privacyPolicyData[language] || privacyPolicyData.EN;

  const privacyContent = document.querySelector(".modal__content");
  console.log(privacyContent);

  const button = document.querySelector(".button-close");

  button.title = content.buttonText;
  privacyContent.innerHTML = generatePrivacyPolicyContent(
    content.title,
    content.text
  );
};

loadLanguage(updatePrivacyPolicyContent);
dropdown.addEventListener("change", changeLanguage(updatePrivacyPolicyContent));
