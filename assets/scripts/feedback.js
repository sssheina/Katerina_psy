import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const feedbackDataRu = [
  {
    text: `Мне было комфортно с Катериной, я могла быть открытой. Здорово, что была обратная связь по дополнительным заданиям, которые она мне давала, и это было использовано в дальнейшей работе`,
    client: "Мария",
    clientInfo: "23 года, Франция",
  },
  {
    text: `Екатерина, я хочу поблагодарить тебя за такую бережную и глубокую работу со мной. Ты не только помогла разобраться в проблеме, но и показала, какие инструменты можно использовать для ее решения. Я ухожу от тебя реальным планом действий. Спасибо тебе большое!`,
    client: "Анастасия",
    clientInfo: "36 лет, Россия",
  },
  {
    text: `Катерина была внимательна, заботлива и я сразу почувствовал себя в безопасности. Она помогла мне развернуть нить моих мыслей и посмотреть со стороны на мои действия. Спустя несколько месяцев я до сих пор использую этот анализ.`,
    client: "А.",
    clientInfo: "31 год, Франция",
  },
  {
    text: `Обратились к тебе, уже буквально находясь на грани разрыва наших отношений. И тебе удалось с первой сессии понизить градус наших дискуссий, а некоторые вопросы вообще убрать из обсуждения как решённые. Мы начали друг друга слушать и понимать, а с пониманием пришло сочувствие друг к другу.`,
    client: "Е. Б.",
    clientInfo: "60 и 30 лет, Грузия",
  },
  {
    text: `Я с трудом справлялась в тяжёлый период моей жизни. Мне не хватало поддержки из-за того, что близких людей уже нет на свете. Я скептически отнеслась к упражнениям и очень удивилась, когда прямо на сессии получила облегчение. Феноменально! Катя, спасибо за мою команду поддержки!`,
    client: "Светлана",
    clientInfo: "46 лет, Беларусь",
  },
];

const feedbackDataEn = [
  {
    text: `I felt comfortable with Katerina, I was able to open up. It’s great that there was feedback on the additional exercises she gave me, and it was used in further work.`,
    client: "Maria",
    clientInfo: "23 years old, France",
  },
  {
    text: `Katerina, I want to thank you for being so caring with me and doing such a deep work. You not only helped to understand the problem, but also showed what tools can be used to solve it. I'm leaving you with a real plan of action. Thank you so much!`,
    client: "Anastasiya",
    clientInfo: "36 years old, Russia",
  },
  {
    text: `Katerina was attentive, caring and I immediately felt safe. She helped me unravel the thread of my thoughts and look at my actions from the outside. Months later, I am still using this analysis.`,
    client: "А.",
    clientInfo: "31 years old, France",
  },
  {
    text: `We started therapy when we were literally on the verge of breaking our relationship. And you managed to lower the intensity from the first session, and resolve some issues altogether. We began to listen and understand each other, and with understanding came compassion.`,
    client: "E. & B.",
    clientInfo: "60 and 30 years old, Georgia",
  },
  {
    text: `I had a hard time coping during a difficult period in my life. I lacked support and encouragement due to the fact that my loved ones were no longer in the world. I was sceptical about the exercises and was very surprised when I received relief right during the session.`,
    client: "Svetlana",
    clientInfo: "46 years old, Belarus",
  },
];

const feedbackDataFr = [
  {
    text: `Je me sentais à l'aise avec Katerina, je pouvais être ouverte. C'est formidable qu'il y ait eu des retours sur les exercices supplémentaires qu'elle m'a données, et ces acquis ont été utilisés par la suite dans la thérapie.`,
    client: "Maria",
    clientInfo: "23 ans, France",
  },
  {
    text: `Katerina, je tiens à te remercier d'être si bienveillante et avoir accompli un travail en profondeur avec moi. Tu as non seulement aidé à comprendre le problème, mais également montré quels outils peuvent être utilisés pour le résoudre. Je te laisse avec un vrai plan d'action. Merci beaucoup!`,
    client: "Anastasia",
    clientInfo: "36 ans, Russie",
  },
  {
    text: `Katerina était attentive, bienveillante et je me suis immédiatement sentie en sécurité. Elle m'a aidée à démêler le fil de mes pensées et à regarder mes actions de l'extérieur. Des mois plus tard, j'utilise toujours cette analyse.`,
    client: "А.",
    clientInfo: "31 an, France",
  },
  {
    text: `Nous nous sommes tournés vers toi alors que nous étions littéralement sur le point de rompre notre relation. Et tu as réussi à abaisser l’intensité de nos débats dès la première séance et à resoudre complètement certains points. Nous avons commencé à nous écouter et à nous comprendre.`,
    client: "E. & B.",
    clientInfo: "60 et 30 ans, Georgie",
  },
  {
    text: `J'ai eu du mal à faire face à une période difficile de ma vie. Je manquais de soutien et d’autonomie du fait que mes proches n’étaient plus avec moi. J'étais sceptique quant aux exercices et j'ai été très surprise lorsque j'ai reçu un soulagement pendant nos séances. Merci d’avoir créer mon équipe de soutien!`,
    client: "Svetlana",
    clientInfo: "46 ans, Biélorussie",
  },
];

const feedbackDataMap = {
  RU: {
    title: "Отзывы клиентов",
    data: feedbackDataRu,
    buttonText: "Запись",
  },
  EN: {
    title: "Feedback",
    data: feedbackDataEn,
    buttonText: "Schedule now!",
  },
  FR: {
    title: "Témoignages",
    data: feedbackDataFr,
    buttonText: "Inscription",
  },
};

const updateFeedbackContent = (language) => {
  const swiperWrapper = document.querySelector(".feedback__swiper-wrapper");
  const sectionTitle = document.querySelector(".feedback__title");
  const button = document.querySelector(".feedback__button");

  swiperWrapper.innerHTML = "";
  sectionTitle.textContent = feedbackDataMap[language].title;
  button.textContent = feedbackDataMap[language].buttonText;

  feedbackDataMap[language].data.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("feedback__slide", "swiper-slide");

    slide.innerHTML = `
        <svg class="feedback__quote icon-quote">
          <use xlink:href="/assets/images/figures/sprite.svg#quote"></use>
        </svg>
        <p class="feedback__text paragraph-standard">${item.text}</p>
        <hr class="feedback__line">
        <p class="feedback__client h5-title">${item.client}</p>
        <p class="feedback__client-info paragraph-standard">${item.clientInfo}</p>
      `;

    swiperWrapper.appendChild(slide);
  });
};

loadLanguage(updateFeedbackContent);
dropdown.addEventListener("change", changeLanguage(updateFeedbackContent));
