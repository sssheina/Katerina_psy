import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const menuItemsRu = [
  { href: "#main", text: "Главная" },
  { href: "#about", text: "Обо мне" },
  { href: "#expertise", text: "С чем я работаю" },
  { href: "#clients", text: "Кто может обратиться" },
  { href: "#methods", text: "Методы работы" },
  { href: "#benefits", text: "Почему выбирают меня" },
  { href: "#feedback", text: "Отзывы" },
  { href: "#steps", text: "Этапы работы" },
  { href: "#price", text: "Стоимость" },
  { href: "#registration", text: "Запись на сессию" },
  { href: "#faq", text: "FAQ" },
  { href: "#questions", text: "Анонимные вопросы" },
];

const menuItemsEn = [
  { href: "#main", text: "Home" },
  { href: "#about", text: "About Me" },
  { href: "#expertise", text: "What I work with" },
  { href: "#clients", text: "Who can schedule therapy" },
  { href: "#methods", text: "I use these methods" },
  { href: "#benefits", text: "Why clients choose me" },
  { href: "#feedback", text: "Feedback" },
  { href: "#steps", text: "Process steps" },
  { href: "#price", text: "Fees" },
  { href: "#registration", text: "Book your session" },
  { href: "#faq", text: "FAQ" },
  { href: "#questions", text: "Anonymous questions" },
];

const menuItemsFr = [
  { href: "#main", text: "Principale" },
  { href: "#about", text: "Qui je suis" },
  { href: "#expertise", text: "Quels sujets je traite" },
  { href: "#clients", text: "Qui peut me consulter" },
  { href: "#methods", text: "J’utilise ces méthodes" },
  { href: "#benefits", text: "Pourquoi me consulter" },
  { href: "#feedback", text: "Témoignages" },
  { href: "#steps", text: "Les étapes de thérapie" },
  { href: "#price", text: "Prix" },
  { href: "#registration", text: "Prendre votre rdv" },
  { href: "#faq", text: "FAQ" },
  { href: "#questions", text: "Questions anonymes" },
];

const menuDataMap = {
  RU: menuItemsRu,
  EN: menuItemsEn,
  FR: menuItemsFr,
};

const updateContent = (language) => {
  const menuContainer = document.querySelector(".header__menu");

  menuContainer.innerHTML = "";

  menuDataMap[language].forEach((item) => {
    const listElement = document.createElement("li");
    listElement.className = "header__menu-item";

    const link = document.createElement("a");
    link.href = item.href;
    link.className = "header__menu-link h5-title";
    link.textContent = item.text;

    listElement.appendChild(link);
    menuContainer.appendChild(listElement);
  });
};

loadLanguage(updateContent);
dropdown.addEventListener("change", changeLanguage(updateContent));
