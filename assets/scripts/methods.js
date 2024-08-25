const methodsData = [
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
    alt: "абстрактные линии",
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

const handleGenerateMethodCard = ({ title, text, image, alt }) => {
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

const methodsContainer = document.getElementById("methodsCards");
methodsContainer.innerHTML = methodsData.map(handleGenerateMethodCard).join("");
