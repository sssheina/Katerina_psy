import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const wordsDataMap = {
  RU: {
    text: "Я искренне верю, что&nbsp;отношения могут быть для&nbsp;вас источником удовольствия и&nbsp;наполнять вашу жизнь смыслом",
  },
  EN: {
    text: "I truly believe that relationships can be a source&nbsp;of pleasure for you and your beloved and fill your&nbsp;life with meaning",
  },
  FR: {
    text: "Je crois sincèrement que les relations&nbsp;peuvent être une source de plaisir pour&nbsp;vous et donner du sens à votre vie.",
  },
};

const updateWordsContent = (language) => {
  const wordsContainer = document.querySelector(".words__content");
  wordsContainer.innerHTML = wordsDataMap[language].text;
};

loadLanguage(updateWordsContent);
dropdown.addEventListener("change", changeLanguage(updateWordsContent));
