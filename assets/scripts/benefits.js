const benefitsData = [
  {
    title: "Научный подход",
    text: `Я использую научно доказанные методы. Сочетаю инструменты из ACT, EFT, IFS, биопсихосоциальной модели в секс-терапии и других подходов`,
  },
  {
    title: "Феминистская оптика",
    text: `Я учитываю в работе социо-культурный контекст вашей жизни, предрассудки и дискриминацию, которые вызывают стресс и давят на вас`,
  },
  {
    title: "",
    text: "",
  },
  {
    title: "Поддержка ЛГБТК+",
    text: `Поддержка ЛГБТК+ сообщества отражает мои глубинные ценности. Я помогу вам почувствовать себя принятым и услышанным, выстроить личные отношения`,
  },
  {
    // SVG card
    svg: "/assets/images/figures/sprite.svg#cross",
  },
  {
    title: "Немоногамные отношения",
    text: `Я знаю, как работать с особенностями создания эмоциональной близости и сложностями в немоногамных отношениях`,
  },
  {
    image: "/assets/images/benefits.png",
    alt: "Женщина нежно обнимает партнёршу",
  },
  {
    title: "Работа с травмой насилия",
    text: `Я помогаю в ситуациях психического и физического насилия. Я работаю как с теми, кто пережил насилие, так и с его авторами`,
  },
  {
    title: "Информированность о нейроотличиях",
    text: `У меня есть навыки работы с СДВГ, РАС, БАР и другими нейроотличиями. Я создаю безопасную обстановку, учитывающую ваши особенности`,
  },
  {
    title: "",
    text: "",
  },
  {
    title: "Повышение квалификации",
    text: `Я постоянно развиваю и совершенствую свои навыки благодаря личной терапии, регулярной супервизии, обучению и общению с коллегами`,
  },
  {
    title: "Мультикультурный опыт",
    text: `Личная история эмиграции помогает мне понимать и учитывать культурные особенности клиентов из разных стран`,
  },
];

const handleGenerateBenefitCard = ({ title, text, image, alt, svg }) => {
  if (svg) {
    return `
        <div class="benefits-card benefits__card">
          <svg class="benefits__cross icon-cross">
            <use xlink:href="${svg}"></use>
          </svg>
        </div>
      `;
  }

  if (image) {
    return `
        <div class="benefits-card benefits__card">
          <img class="benefits-card__img hover-filter" src="${image}" alt="${alt}">
        </div>
      `;
  }

  return `
      <div class="benefits-card benefits__card">
        <h3 class="benefits-card__title h3-title">${title}</h3>
        <p class="benefits-card__text paragraph-standard">${text}</p>
      </div>
    `;
};

const benefitsContainer = document.getElementById("benefitsContent");
benefitsContainer.innerHTML = benefitsData
  .map(handleGenerateBenefitCard)
  .join("");
