import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const benefitsDataRu = [
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

const benefitsDataEn = [
  {
    title: "Scientific approach",
    text: `I use scientifically proven methods. I combine tools from ACT, EFT, IFS, the biopsychosocial model of sex therapy and other approaches`,
  },
  {
    title: "Feminist lens",
    text: `I take into account the socio-cultural context of your life, the prejudices and discrimination that cause stress and put pressure on you`,
  },
  {
    title: "",
    text: "",
  },
  {
    title: "Support of LGBTQIA+",
    text: `Supporting the LGBTQIA+ community reflects my deepest values. I will help you feel accepted and heard, and build thriving personal relationships`,
  },
  {
    // SVG card
    svg: "/assets/images/figures/sprite.svg#cross",
  },
  {
    title: "Nonmonogamous relationships",
    text: `I know how to work with particularities of creating emotional intimacy and challenges in non-monogamous relationships`,
  },
  {
    image: "/assets/images/benefits.png",
    alt: "A woman gently embraces her female partner",
  },
  {
    title: "Working with trauma of violence",
    text: `I help in situations of psychological and physical abuse in relationships. <br> I work with both survivors of violence and its actors`,
  },
  {
    title: "Neurodiversities awareness",
    text: `I am skilled in working with ADHD, ASD, bipolar disorder, and other neurodiversities. I create a safe environment that is tailored to you`,
  },
  {
    title: "",
    text: "",
  },
  {
    title: "Continuous improvement",
    text: `I constantly develop and improve my skills through personal therapy, regular supervision, training and communication with colleagues`,
  },
  {
    title: "Multicultural experience",
    text: `My personal history of emigration helps me understand and take into account the cultural background of clients from different countries`,
  },
];

const benefitsDataFr = [
  {
    title: "L’approche scientifique",
    text: `J'utilise des méthodes scientifiquement prouvées. Je combine les outils de l'ACT, l'EFT, l'IFS, du modèle biopsychosocial dans la sexothérapie et des autres approches`,
  },
  {
    title: "L’OPTIQUE FÉMINISTE",
    text: `Je prends en compte le contexte socioculturel de votre vie, les préjugés et discriminations qui vous stressent et vous mettent la pression`,
  },
  {
    title: "",
    text: "",
  },
  {
    title: "Le soutien aux LGBTQIA+",
    text: `Soutenir la communauté LGBTQ+ reflète mes valeurs les plus profondes. Je vous aiderai à vous sentir accepté.e et entendu.e, et à établir des relations personnelles épanouies`,
  },
  {
    // SVG card
    svg: "/assets/images/figures/sprite.svg#cross",
  },
  {
    title: "Les relations non-monogames",
    text: `Je sais comment vous accompagner pour maintenir l’intimité émotionnelle et surmonter les challenges particuliers dans vos relations non monogames`,
  },
  {
    image: "/assets/images/benefits.png",
    alt: "Une femme embrasse doucement son partenaire",
  },
  {
    title: "Le traitement de traumatismes",
    text: `J'aide dans les situations des violences psychologiques et physiques. Je travaille à la fois avec des survivant.es et des auteur.ices de violences`,
  },
  {
    title: "La Sensibilisation à la neurodiversité",
    text: `J'ai des compétences pour prendre en compte le TDAH, les TSA, le trouble bipolaire et d'autres neurodiversités. Je crée un environnement confortable et adapté à vous`,
  },
  {
    title: "",
    text: "",
  },
  {
    title: "La formation en continue",
    text: `Je développe et améliore constamment mes compétences grâce à une thérapie personnelle, une supervision régulière, des formations et des échanges avec mes collègues`,
  },
  {
    title: "L’expérience multiculturelle",
    text: `Mon histoire personnelle d'émigration m'aide à comprendre et à intégrer dans le travail thérapeutique les challenges culturelles des clients de différents pays`,
  },
];

const benefitsDataMap = {
  RU: {
    title: "Почему выбирают\u00A0меня",
    data: benefitsDataRu,
    buttonText: "Запись на сессию",
  },
  EN: {
    title: "Why clients choose me",
    data: benefitsDataEn,
    buttonText: "Book First Session",
  },
  FR: {
    title: "Pourquoi me\u00A0consulter",
    data: benefitsDataFr,
    buttonText: "Prendre RDV",
  },
};

const generateCard = ({ title, text, image, alt, svg }) => {
  if (svg) {
    return `
        <div class="benefits-card benefits__card">
          <svg class="benefits__cross icon-cross">
            <use xlink:href="${svg}"></use>
          </svg>
        </div>
      `;
  } else if (image) {
    return `
        <div class="benefits-card benefits__card">
          <img class="benefits-card__img hover-filter" src="${image}" alt="${alt}">
        </div>
      `;
  } else
    return `
      <div class="benefits-card benefits__card">
        <h3 class="benefits-card__title h3-title">${title}</h3>
        <p class="benefits-card__text paragraph-standard">${text}</p>
      </div>
    `;
};

const updateBenefitsSection = (language) => {
  const benefitsContainer = document.querySelector(".benefits__content");
  const sectionTitle = document.querySelector(".benefits__title");
  const button = document.querySelector(".benefits__button");

  benefitsContainer.innerHTML = "";
  sectionTitle.textContent = benefitsDataMap[language].title;
  button.textContent = benefitsDataMap[language].buttonText;

  benefitsDataMap[language].data.map((card) => {
    const { title, text, image, alt, svg } = card;

    benefitsContainer.innerHTML += generateCard({
      title,
      text,
      image,
      alt,
      svg,
    });
  });
};

loadLanguage(updateBenefitsSection);
dropdown.addEventListener("change", changeLanguage(updateBenefitsSection));
