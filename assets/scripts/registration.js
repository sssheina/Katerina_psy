import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const registrationContent = {
  RU: {
    title: "Запись на первую\u00A0сессию",
  },
  EN: {
    title: "Book your\u00A0session",
  },
  FR: {
    title: "Prendre votre\u00A0rdv",
  },
};

const updateRegistrationSection = (language) => {
  const content = registrationContent[language] || registrationContent.EN;

  // Update title
  const titleElement = document.querySelector(".registration__title");
  if (titleElement) {
    titleElement.textContent = content.title;
  } else {
    console.error("Title element not found");
  }
};

loadLanguage(updateRegistrationSection);
dropdown.addEventListener("change", changeLanguage(updateRegistrationSection));
