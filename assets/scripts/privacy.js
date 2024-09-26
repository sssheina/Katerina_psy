import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const privacyPolicyData = {
  RU: {
    title: "Политика конфиденциальности",
    text: "Мы уважаем конфиденциальность ваших данных и стремимся обеспечить их защиту в соответствии с Общим регламентом по защите данных (GDPR) и другими применимыми законами. Данная Политика конфиденциальности объясняет, какие данные мы собираем, как мы их используем и как мы защищаем вашу информацию.",
    list: [
      {
        title: "Оператор данных",
        text: "Оператором данных является: Therapeutic Journeys, 983 204 199 RCS Paris",
      },
      {
        title: "Какие данные мы собираем",
        text: "Мы собираем следующие данные:",
        items: [
          {
            subtitle: "Электронная почта",
            subtext:
              "Используется для отправки новостных и рекламных рассылок. Мы запрашиваем вашу электронную почту только с вашего согласия",
          },
          {
            subtitle: "Анонимные вопросы",
            subtext:
              "Мы принимаем анонимные вопросы, которые не содержат имени или иной идентифицирующей информации. Эти вопросы могут быть использованы для публичного ответа в блоге или на других платформах, доступных широкой аудитории. Публикуемые ответы не содержат данных, позволяющих идентифицировать личность автора вопроса.",
          },
          {
            subtitle: "Данные аналитики",
            subtext:
              "С помощью сервисов Google Analytics и Яндекс Метрики мы собираем анонимную обезличенную информацию о посещении сайта, такую как:",
          },
        ],
      },
    ],
    buttonText: "Закрыть",
  },
  EN: {
    title: "Privacy Policy",
    text: "We respect the privacy of your data and are committed to ensuring its protection in accordance with the General Data Protection Regulation (GDPR) and other applicable laws. This Privacy Policy explains what data we collect, how we use it, and how we protect your information.",
    list: [
      {
        title: "Data Controller",
        text: "The data controller is: Therapeutic Journeys, 983 204 199 RCS Paris Contact information: Kat.tartary@gmail.com",
      },
      {
        title: "What Data We Collect",
        text: "We collect the following data:",
        items: [
          {
            subtitle: "Email",
            subtext:
              "We use your email for sending newsletters and promotional emails. We request your email only with your consent.",
          },
          {
            subtitle: "Anonymous Questions",
            subtext:
              "These are data that do not contain a name or other identifying information but may be used to analyze and improve our services.",
          },
          {
            subtitle: "Analytics Data",
            subtext:
              "Using Google Analytics and Yandex Metrica services, we collect anonymous, de-identified information about site visits, such as:",
          },
        ],
      },
    ],
    buttonText: "Закрыть",
  },

  FR: {
    title: "Politique de Confidentialité",
    text: "Nous respectons la vie privée de vos données et nous engageons à garantir leur protection conformément au Règlement Général sur la Protection des Données (RGPD) et à d'autres lois applicables. Cette Politique de Confidentialité explique quelles données nous collectons, comment nous les utilisons et comment nous protégeons vos informations.",
    list: [
      {
        title: "Responsable du Traitement des Données",
        text: "Le responsable du traitement est: Therapeutic Journeys, 983 204 199 RCS Paris Informations de contact: kat.tartary@gmail.com",
      },
      {
        title: "Quelles Données Nous Collectons",
        text: "Nous collectons les données suivantes:",
        items: [
          {
            subtitle: "Email",
            subtext:
              "Pour l'envoi de newsletters et d'emails promotionnels. Nous demandons votre email uniquement avec votre consentement.",
          },
          {
            subtitle: "Questions Anonymes",
            subtext:
              "Données ne contenant pas de nom ou d'autres informations identifiantes, mais pouvant être utilisées pour analyser et améliorer nos services.",
          },
          {
            subtitle: "Données d'Analyse",
            subtext:
              "Grâce aux services de Google Analytics et de Yandex Metrica, nous collectons des informations anonymes et anonymisées sur les visites du site, telles que:",
          },
        ],
      },
    ],
    buttonText: "Закрыть",
  },
};

const generatePrivacyPolicyContent = (content) => {
  const { title, text, list } = content;
  let listItem = "";
  let listItemItems = "";

  list.forEach((item) => {
    listItem += `<li>
      <h4 class='h4-title'>${item.title}</h4>
      <p class='paragraph-small'>${item.text}</p>
    </li>`;

    item.items?.forEach((el) => {
      listItemItems += `<li>
      <h5 class='h5-title'>${el.subtitle}</h5>
      <p class='paragraph-small'>${el.subtext}</p>
    </li>`;
    });
  });

  return `
    <h3 class="modal__title h3-title">${title}</h3>
    <p class="modal__text paragraph-small">${text}</p>
    <ol class="modal__list-ordered">
      ${listItem}
      <ul class="modal__list-unordered">${listItemItems}</ul>
    </ol>
  `;
};

const updatePrivacyPolicyContent = (language) => {
  const content = privacyPolicyData[language] || privacyPolicyData.EN;

  const privacyContent = document.querySelector(".questions__modal-content");
  console.log(privacyContent);

  const button = document.querySelector(".button-close");

  button.title = content.buttonText;
  privacyContent.innerHTML = generatePrivacyPolicyContent(content);
};

loadLanguage(updatePrivacyPolicyContent);
dropdown.addEventListener("change", changeLanguage(updatePrivacyPolicyContent));
