const menuItems = [
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

const menuContainer = document.getElementById("headerMenu");

menuItems.forEach((item) => {
  const listElement = document.createElement("li");
  listElement.className = "header__menu-item";

  const link = document.createElement("a");
  link.href = item.href;
  link.className = "header__menu-link h5-title";
  link.textContent = item.text;

  listElement.appendChild(link);
  menuContainer.appendChild(listElement);
});
