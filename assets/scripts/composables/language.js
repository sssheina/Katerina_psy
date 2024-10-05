export const dropdown = document.querySelector(".language");
let selectedLanguage;

const setLanguage = (language) => {
  localStorage.setItem("selectedLanguage", language);
  updateLanguageAttribute(language);
};

const updateLanguageAttribute = (language) => {
  document.documentElement.lang = language.toLowerCase();
};

export const changeLanguage = (generateContent) => {
  return (event) => {
    selectedLanguage = event.target.value;

    setLanguage(selectedLanguage);
    generateContent(selectedLanguage);
  };
};

export const loadLanguage = (generateContent) => {
  document.addEventListener("DOMContentLoaded", () => {
    selectedLanguage = localStorage.getItem("selectedLanguage") || "EN";
    dropdown.value = selectedLanguage;

    updateLanguageAttribute(selectedLanguage);
    generateContent(selectedLanguage);
  });
};
