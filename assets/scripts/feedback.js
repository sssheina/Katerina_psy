document.addEventListener("DOMContentLoaded", () => {
  const feedbackData = [
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

  const swiperWrapper = document.querySelector(".feedback__swiper-wrapper");

  feedbackData.forEach((item) => {
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
});
