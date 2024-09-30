import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const expertiseDataRu = [
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

const expertiseDataEn = [
  {
    heading: "sexuality",
    image: "/assets/images/expertise__sexuality.png",
    alt: "sexuality",
    items: [
      {
        title: "sexual dysfunctions",
        description: `My libido is too weak/strong or I have difficulty getting aroused 
or having an orgasm`,
      },
      {
        title: "no contact with my body",
        description: `I don’t feel good in my body or don’t feel sexy`,
      },
      {
        title: "sexual differences",
        description: `My desires and those of my partners do not coincide, it’s scary 
to talk about my fantasies or preferences`,
      },
      {
        title: "sexualised violence",
        description: `I'm trying to cope with the effects of sexualised violence that are preventing me from moving forward.`,
      },
      {
        title: "sexuality exploration",
        description: `I don’t understand what I like about sex, I’m ashamed of certain practices, or I doubt my sexual orientation`,
      },
    ],
  },
  {
    heading: "relationships",
    image: "/assets/images/expertise__relationship.png",
    alt: "relationships",
    layout: "image-right",
    items: [
      {
        title: "emotional intimacy difficulties",
        description: `I avoid deep emotional connection in relationships or feel constant anxiety`,
      },
      {
        title: "communication difficulties",
        description: `We have difficulty communicating or reaching agreements `,
      },
      {
        title: "relationship dissatisfaction",
        description: `I feel anxious because we do not have sex anymore, cheating has occurred, or there is simply no contact between us`,
      },
      {
        title: "toxic relationships",
        description: `There is abuse in our relationship, we want to live with each other differently`,
      },
      {
        title: "crises",
        description: `We have faced difficulties such as illness, loss of business, emigration or loss of loved ones, and are trying to overcome them`,
      },
    ],
  },
  {
    heading: "internal processes",
    image: "/assets/images/expertise__inner.png",
    alt: "internal processes",
    items: [
      {
        title: "low self-esteem",
        description: `I constantly criticize and blame myself, lack confidence in myself, or suffer from perfectionism `,
      },
      {
        title: "Apathy and stuckness",
        description: `There is no more incentive to move forward and do something, 
I don’t know what I want`,
      },
      {
        title: "uncontrollable emotions",
        description: `By times emotions like anxiety, fear or irritation control me so much that they disturb my everyday life and connection to others`,
      },
      {
        title: "trauma of violence",
        description: `I'm trying to cope with the consequences of psychologicaland physical violence that prevents me from moving on`,
      },
      {
        title: "interpersonal conflicts",
        description: `I find it difficult to communicate with other people, conflicts often arise, or it is hard for me to defend my boundaries `,
      },
    ],
  },
];

const expertiseDataFr = [
  {
    heading: "sexualité",
    image: "/assets/images/expertise__sexuality.png",
    alt: "sexuality",
    items: [
      {
        title: "les dysfonctions sexuelles",
        description: `Ma libido est trop faible/forte, j'ai du mal à m'exciter ou à avoir un orgasme`,
      },
      {
        title: "pas de connection avec le corps",
        description: `Je ne me sens pas bien dans mon corps ou je ne me sens pas sexy`,
      },
      {
        title: "les  différences dans la sexualité",
        description: `Mes envies et celles de mon.ma partenaire ne coïncident pas, ça fait peur de parler de mes fantasmes ou préférences`,
      },
      {
        title: "Les violences sexualisées",
        description: `J'essaie de faire face aux conséquences de la violence sexualisée qui m'empêchent d'avancer`,
      },
      {
        title: "L’exploration de la sexualité",
        description: `Je ne comprends pas ce que j'aime dans le sexe, j'ai honte de certaines pratiques ou je doute de mon orientation sexuelle`,
      },
    ],
  },
  {
    heading: "relations",
    image: "/assets/images/expertise__relationship.png",
    alt: "relationships",
    layout: "image-right",
    items: [
      {
        title: "les  dificultés dans l'intimité émotionnelle",
        description: `J'évite d’établir des liens émotionnels profonds dans les relations ou je ressens constamment une anxiété `,
      },
      {
        title: "les défis de communication",
        description: `Nous avons des difficultés à communiquer ou à nous mettre d’accord `,
      },
      {
        title: "Les relations insatisfaisantes ",
        description: `Je me sens anxieux.se parce que le sexe dans la relation a disparu, il y a eu une infidélité ou qu'il n'y a plus de contact entre nous`,
      },
      {
        title: "Les relations toxiques",
        description: `Il y a de la violence psychologique voir physique dans notre relation, on veut vivre différement `,
      },
      {
        title: "Les crises",
        description: `Nous avons été confrontés à des difficultés telles que la maladie,  l'émigration ou le décès, et nous essayons de les surmonter`,
      },
    ],
  },
  {
    heading: "univers intérieur",
    image: "/assets/images/expertise__inner.png",
    alt: "internal processes",
    items: [
      {
        title: "le manque d’estime de soi",
        description: `Je me critique et me blâme constamment, je manque de confiance en moi ou je souffre de perfectionnisme`,
      },
      {
        title: "L’apatie et confusion",
        description: `J’ai plus de motivation ni d’énergie à avancer et à faire quelque chose, je ne sais pas ce que je veux`,
      },
      {
        title: "Les émotions incontrôlables ",
        description: `Parfois, mes émotions - l’anxiété, la peur, l’irritation - me contrôlent tellement qu'elles interfèrent avec ma vie quotidienne et les relations avec les autres`,
      },
      {
        title: "les traumatismes des violences ",
        description: `J'essaie de faire face aux conséquences causées par les violences  physiques et psychologiques qui m'empêchent d'avancer`,
      },
      {
        title: "les Conflits interpersonnels",
        description: `J'ai du mal à communiquer avec d'autres personnes, des conflits surviennent souvent ou je n’arrive pas à défendre mes limites`,
      },
    ],
  },
];

const expertiseDataMap = {
  RU: {
    data: expertiseDataRu,
    title: "С чем я\u00A0работаю",
    buttonText: "Запись на сессию",
  },
  EN: {
    data: expertiseDataEn,
    title: "WHAT I\u00A0WORK\u00A0WITH",
    buttonText: "Let’s talk!",
  },
  FR: {
    data: expertiseDataFr,
    title: "QUELS sujets je\u00A0traite",
    buttonText: "Inscription",
  },
};

const updateExpertiseSection = (language) => {
  const expertiseContainer = document.querySelector(".expertise__content");
  const expertiseTitle = document.querySelector(".expertise__title");
  const expertiseButton = document.querySelector(".expertise__button");

  expertiseContainer.innerHTML = "";
  expertiseTitle.textContent = expertiseDataMap[language].title;
  expertiseButton.textContent = expertiseDataMap[language].buttonText;

  expertiseDataMap[language].data.forEach((category) => {
    const headingHTML = `
        <div class="expertise-heading expertise__heading">
            <h3 class="expertise-heading__title h3-title">${category.heading}</h3>
            <div class="expertise-heading__line"></div>
        </div>
    `;

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
};

loadLanguage(updateExpertiseSection);
dropdown.addEventListener("change", changeLanguage(updateExpertiseSection));
