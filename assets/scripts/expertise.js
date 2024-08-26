const expertiseData = [
  {
    heading: "Сексуальность",
    image: "/assets/images/expertise__sexuality.png",
    alt: "Нежное прикосновение рук партнёрш",
    items: [
      {
        title: "Сексуальные дисфункции",
        description: `У меня слишком слабое / сильное либидо, трудности с&nbsp;возбуждением или&nbsp;получением оргазма`,
      },
      {
        title: "Нет контакта с телом",
        description: `Я плохо чувствую свое тело или&nbsp;оно кажется мне несексуальным`,
      },
      {
        title: "Сексуальные различия",
        description: `Мои желания и партнёрша / партнёр не совпадают, страшно сказать о&nbsp;своих фантазиях или&nbsp;предпочтениях`,
      },
      {
        title: "Сексуализированное насилие",
        description: `Я пытаюсь справиться с последствиями сексуализированного
                          насилия, которое мешает мне двигаться дальше`,
      },
      {
        title: "Исследование сексуальности",
        description: `Я не понимаю, что мне нравится в&nbsp;сексе, стыжусь
                          некоторых практик или&nbsp;сомневаюсь в&nbsp;своей
                          сексуальной ориентации`,
      },
    ],
  },
  {
    heading: "Отношения",
    image: "/assets/images/expertise__relationship.png",
    layout: "image-right",
    alt: "Мужчина и женщина в ссоре",
    items: [
      {
        title: "Избегание эмоциональной близости",
        description: `Я избегаю глубинной эмоциональной связи в&nbsp;отношениях или&nbsp;испытываю постоянную тревогу`,
      },
      {
        title: "Трудности в общении",
        description: `Мы с трудом общаемся или договариваемся друг с&nbsp;другом`,
      },
      {
        title: "Неудовлетворенность отношениями",
        description: `Я чувствую тревогу, потому что секс в&nbsp;отношениях исчез,
                          произошла измена или&nbsp;просто нет контакта между нами`,
      },
      {
        title: "Токсичные отношения",
        description: `В наших отношениях происходит абьюз, мы&nbsp;хотим жить друг
                          с&nbsp;другом по-другому`,
      },
      {
        title: "Кризисы",
        description: `Мы столкнулись с такими трудностями, как болезнь, потеря
                          бизнеса, эмиграция или&nbsp;утрата близких, и&nbsp;пытаемся
                          преодолеть&nbsp;их`,
      },
    ],
  },
  {
    heading: "Внутренний мир",
    image: "/assets/images/expertise__inner.png",
    alt: "Женщина наслаждается моментом наедине с собой",
    items: [
      {
        title: "Низкая самооценка",
        description: `Я постоянно критикую и&nbsp;виню себя, не&nbsp;верю
                          в&nbsp;себя или&nbsp;страдаю от&nbsp;перфекционизма`,
      },
      {
        title: "Апатия и потерянность",
        description: `Нет больше стимула двигаться вперед и&nbsp;что-то делать,
                          я&nbsp;не&nbsp;знаю, чего хочу`,
      },
      {
        title: "Неуправляемые эмоции",
        description: `Иногда эмоции — тревога, страх, раздражение — управляют мной
                          настолько, что&nbsp;мешают повседневной жизни, общению`,
      },
      {
        title: "Последствия абьюза",
        description: `Я пытаюсь справиться с последствиями психологического
                          и&nbsp;физического насилия, что&nbsp;мешает мне двигаться
                          дальше`,
      },
      {
        title: "Межличностные конфликты",
        description: `Мне трудно общаться с другими людьми, часто возникают
                          конфликты или&nbsp;мне сложно отстаивать себя`,
      },
    ],
  },
];

const expertiseContainer = document.getElementById("expertiseContent");

expertiseData.forEach((category) => {
  // Category
  const headingHTML = `
      <div class="expertise-heading expertise__heading">
        <h3 class="expertise-heading__title h3-title">${category.heading}</h3>
        <div class="expertise-heading__line"></div>
      </div>
    `;

  // Expertise
  const itemsHTML = category.items
    .map(
      (item) => `
        <div class="expertise-block-item">
          <div class="expertise-block-item__heading">
            <h5 class="expertise-block-item__title h5-title">${item.title}</h5>
            <div class="expertise-block-item__line"></div>
          </div>
          <p class="expertise-block-item__text paragraph-standard">${item.description}</p>
        </div>
      `
    )
    .join("");

  const blockHTML =
    category.layout === "image-right"
      ? `
        <div class="expertise-block expertise__block expertise__block--image-right">
          <div class="expertise-block__text">${itemsHTML}</div>
          <div class="expertise-block__picture">
            <img class="hover-filter" src="${category.image}" alt="${category.alt}">
          </div>
        </div>
      `
      : `
        <div class="expertise-block expertise__block">
          <div class="expertise-block__picture">
            <img class="hover-filter" src="${category.image}" alt="${category.alt}">
          </div>
          <div class="expertise-block__text">${itemsHTML}</div>
        </div>
      `;

  expertiseContainer.innerHTML += headingHTML + blockHTML;
});
