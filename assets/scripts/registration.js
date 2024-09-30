import {
    dropdown,
    changeLanguage,
    loadLanguage,
  } from "./composables/language.js";

   const registrationContent = {
    RU: {
        title: "Запись на первую сессию",
    },
    EN: {
        title: "Book your session",
    },
    FR: {
        title: "Prendre votre rdv",
    },    
   }

   const updateRegistrationSection = (language) => {
    const content = registrationContent[language] || registrationContent.EN;
  
    // Update title
    const titleElement = document.querySelector(".registration__title");
    if (titleElement) {
      titleElement.textContent = content.title;
    } else {
      console.error("Title element not found");
    }
}

  
  loadLanguage(updateRegistrationSection);
  dropdown.addEventListener("change", changeLanguage(updateRegistrationSection));