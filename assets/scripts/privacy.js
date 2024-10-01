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
            title: "Электронная почта",
            text: "Используется для отправки новостных и рекламных рассылок. Мы запрашиваем вашу электронную почту только с вашего согласия",
          },
          {
            title: "Анонимные вопросы",
            text: "Мы принимаем анонимные вопросы, которые не содержат имени или иной идентифицирующей информации. Эти вопросы могут быть использованы для публичного ответа в блоге или на других платформах, доступных широкой аудитории. Публикуемые ответы не содержат данных, позволяющих идентифицировать личность автора вопроса.",
          },
          {
            title: "Данные аналитики",
            text: "С помощью сервисов Google Analytics и Яндекс Метрики мы собираем анонимную обезличенную информацию о посещении сайта, такую как:",
            items: [
              "IP-адрес",
              "Тип устройства",
              "Геолокация (обезличенная)",
              "Поведение на сайте (просмотры страниц, клики и т.д.)",
            ],
          },
        ],
        additionalText:
          "Вся собранная информация является анонимной и не позволяет идентифицировать личность пользователя.",
      },
      {
        title: "Как мы используем ваши данные",
        text: "Мы используем собранные данные для следующих целей:",
        items: [
          {
            title: "Отправка информационных рассылок",
            text: "С вашего согласия, мы используем ваш email для отправки новостей, акций и другой информации, связанной с нашими услугами",
          },
          {
            title: "Ответы на анонимные вопросы",
            text: "Мы анализируем анонимные вопросы, чтобы улучшить наши услуги и отвечать на запросы пользователей.",
          },
          {
            title: "Анализ и улучшение работы сайта",
            text: "Сервисы аналитики (Google Analytics и Яндекс Метрика) позволяют нам собирать статистику о посещениях сайта, чтобы оптимизировать наш контент и улучшить пользовательский опыт.",
          },
        ],
      },
      {
        title: "Передача данных третьим лицам",
        text: "Мы не передаём ваши персональные данные третьим лицам за исключением случаев, когда это необходимо для использования сторонних сервисов:",
        items: [
          {
            title: "Google Analytics и Яндекс Метрика",
            text: "Эти сервисы могут получать обезличенные данные для анализа трафика на нашем сайте. Ваши данные передаются только таким сервисам, которые соответствуют требованиям GDPR.",
          },
          {
            title: "Formspree.io",
            text: "Мы используем сервис Formspree.io для обработки и отправки данных из форм на наш email. Formspree.io может получать данные, которые вы вводите в наши формы, чтобы передать их на указанный адрес электронной почты. Формы и данные, отправленные через Formspree.io, обрабатываются в соответствии с их Политикой конфиденциальности.",
          },
        ],
      },
      {
        title: "Файлы cookie",
        text: "Мы используем файлы cookie для улучшения работы сайта и предоставления вам персонализированного контента. Файлы cookie позволяют нам:",
        items: [
          {
            text: "Анализировать поведение пользователей на сайте",
          },
          {
            text: "Улучшать структуру и содержание сайта",
          },
          {
            text: "Соблюдать законные требования (например, показывать уведомления о файлах cookie)",
          },
        ],
      },
      {
        title: "Правовые основания для обработки данных",
        text: "Мы обрабатываем ваши персональные данные на следующих законных основаниях:",
        items: [
          {
            title: "Ваше согласие",
            text: "Для рассылки новостей и обработки данных аналитики",
          },
          {
            title: "Законный интерес",
            text: "Для анализа трафика и улучшения работы сайта",
          },
        ],
      },
      {
        title: "Как долго мы храним ваши данные",
        text: "Мы храним ваши данные до тех пор, пока это необходимо для целей, указанных в данной Политике конфиденциальности, или до тех пор, пока вы не отзовёте своё согласие на обработку.",
      },
      {
        title: "Защита ваших данных",
        text: "Мы принимаем все разумные меры для защиты ваших данных от несанкционированного доступа, изменения, разглашения или уничтожения. Мы используем безопасные серверы и протоколы для передачи данных.",
      },
      {
        title: "Ваши права в соответствии с GDPR",
        text: "В соответствии с GDPR у вас есть следующие права:",
        items: [
          {
            title: "Право на доступ к вашим данным",
            text: "Вы можете запросить информацию о том, какие данные мы собираем и как они обрабатываются.",
          },
          {
            title: "Право на исправление данных",
            text: "Вы можете потребовать исправления ваших данных, если они неточные или неполные.",
          },
          {
            title: 'Право на удаление данных ("право быть забытым»)',
            text: "Вы можете потребовать удаления ваших персональных данных. Обратите внимание, что обезличенные данные, собранные через Google Analytics и Яндекс Метрику, не могут быть удалены, так как они не могут быть связаны с вашей личностью.",
          },
          {
            title: "Право на ограничение обработки",
            text: "Вы можете потребовать ограничить обработку ваших персональных данных в определённых ситуациях.",
          },
          {
            title: "Право на перенос данных",
            text: "Вы можете запросить передачу ваших данных в машиночитаемом формате.",
          },
          {
            title: "Право на возражение против обработки",
            text: "Вы можете возразить против обработки ваших данных.",
          },
          {
            title: "Право отозвать согласие на обработку данных",
            text: "Вы можете отозвать своё согласие на обработку данных в любое время. Для обезличенных данных, которые собираются через Google Analytics и Яндекс Метрику, реализация некоторых прав невозможна, так как эти данные не идентифицируют вас как пользователя.",
          },
        ],
        additionalText:
          "Чтобы воспользоваться этими правами, обратитесь к контактным данным, указанным ниже.",
      },
      {
        title: "Контактная информация",
        text: "Если у вас есть вопросы относительно данной Политики конфиденциальности или вы хотите воспользоваться своими правами, свяжитесь с нами по еmail: <a href='mailto:kat.tartary@gmail.com' target='_blank' class='link'>kat.tartary@gmail.com</a>.",
      },
      {
        title: "Изменения в Политике конфиденциальности",
        text: "Мы можем обновлять данную Политику конфиденциальности в любое время. Обновления будут опубликованы на этой странице. Мы рекомендуем регулярно проверять Политику конфиденциальности для получения актуальной информации о том, как мы защищаем ваши данные.",
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
            title: "Email",
            text: "We use your email for sending newsletters and promotional emails. We request your email only with your consent.",
          },
          {
            title: "Anonymous Questions",
            text: "These are data that do not contain a name or other identifying information but may be used to analyze and improve our services.",
          },
          {
            title: "Analytics Data",
            text: "Using Google Analytics and Yandex Metrica services, we collect anonymous, de-identified information about site visits, such as:",
            items: [
              "IP address",
              "Device type",
              "Geolocation (anonymized)",
              "On-site behavior (page views, clicks, etc.)",
            ],
          },
        ],
        additionalText:
          "All collected information is anonymous and does not allow for the identification of the user's identity.",
      },
      {
        title: "How We Use Your Data",
        text: "We use the collected data for the following purposes:",
        items: [
          {
            title: "Sending newsletters",
            text: "With your consent, we use your email to send news, promotions, and other information related to our services.",
          },
          {
            title: "Responding to anonymous questions",
            text: "We analyze anonymous questions to improve our services and respond to user requests.",
          },
          {
            title: "Analyzing and improving website performance",
            text: "Analytics services (Google Analytics and Yandex Metrica) allow us to gather website visit statistics to optimize our content and improve user experience.",
          },
        ],
      },
      {
        title: "Data Sharing with Third Parties",
        text: "We do not share your personal data with third parties, except when necessary for the use of third-party services:",
        items: [
          {
            title: "Google Analytics and Yandex Metrica",
            text: "These services may receive anonymized data to analyze traffic on our website. Your data is only shared with services that comply with GDPR requirements.",
          },
          {
            title: "Formspree.io",
            text: "We use Formspree.io to process and send form data to our email. Formspree.io may receive the data you enter in our forms to forward it to the specified email address. Forms and data sent via Formspree.io are processed according to their Privacy Policy.",
          },
        ],
      },
      {
        title: "Cookies",
        text: "We use cookies to improve the website’s performance and provide you with personalized content. Cookies allow us to:",
        items: [
          {
            text: "Analyze user behavior on the website",
          },
          {
            text: "Improve the structure and content of the website",
          },
          {
            text: "Comply with legal requirements (e.g., display cookie notifications). You can manage cookie settings in your browser and opt out of their use.",
          },
        ],
      },
      {
        title: "Legal Basis for Data Processing",
        text: "We process your personal data based on the following legal grounds:",
        items: [
          {
            title: "Your consent",
            text: "For sending newsletters and processing analytics data",
          },
          {
            title: "Legitimate interest",
            text: "For traffic analysis and improving website performance",
          },
        ],
      },
      {
        title: "How Long We Retain Your Data",
        text: "We take all reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. We use secure servers and protocols for data transmission.",
      },
      {
        title: "How We Protect Your Data",
        text: "We take all reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. We use secure servers and protocols for data transmission.",
      },
      {
        title: "Your Rights Under GDPR",
        text: "Under GDPR, you have the following rights:",
        items: [
          {
            title: "Right of access",
            text: "You can request information about what data we collect and how it is processed.",
          },
          {
            title: "Right to rectification",
            text: "You can request the correction of your data if it is inaccurate or incomplete.",
          },
          {
            title: 'Right to erasure ("right to be forgotten")',
            text: "You can request the deletion of your personal data. Please note that anonymized data collected through Google Analytics and Yandex Metrica cannot be deleted as it cannot be linked to your identity.",
          },
          {
            title: "Right to restrict processing",
            text: "You can request to restrict the processing of your personal data in certain situations.",
          },
          {
            title: "Right to data portability",
            text: "You can request the transfer of your data in a machine-readable format.",
          },
          {
            title: "Right to object to processing",
            text: "You can object to the processing of your data.",
          },
          {
            title: "Right to withdraw consent to data processing",
            text: "You can withdraw your consent to data processing at any time. For anonymized data collected through Google Analytics and Yandex Metrica, the implementation of some rights is not possible, as this data does not identify you as a user.",
          },
        ],
        additionalText:
          "To exercise these rights, please refer to the contact details provided below.",
      },
      {
        title: "Contact Information",
        text: "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at email: <a href='mailto:kat.tartary@gmail.com' target='_blank' class='link'>kat.tartary@gmail.com</a>.",
      },
      {
        title: "Changes to the Privacy Policy",
        text: "We may update this Privacy Policy at any time. Updates will be posted on this page. We recommend regularly reviewing the Privacy Policy for the latest information on how we protect your data.",
      },
    ],
    buttonText: "Close",
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
            title: "Email",
            text: "Pour l'envoi de newsletters et d'emails promotionnels. Nous demandons votre email uniquement avec votre consentement.",
          },
          {
            title: "Questions Anonymes",
            text: "Données ne contenant pas de nom ou d'autres informations identifiantes, mais pouvant être utilisées pour analyser et améliorer nos services.",
          },
          {
            title: "Données d'Analyse",
            text: "Grâce aux services de Google Analytics et de Yandex Metrica, nous collectons des informations anonymes et anonymisées sur les visites du site, telles que:",
            items: [
              "Adresse IP",
              "Type d'appareil",
              "Géolocalisation (anonymisée)",
              "Comportement sur le site (vues de pages, clics, etc.).",
            ],
          },
        ],
        additionalText:
          "Toutes les informations collectées sont anonymes et ne permettent pas d'identifier l'identité de l'utilisateur.",
      },
      {
        title: "Comment Nous Utilisons Vos Données",
        text: "Nous utilisons les données collectées aux fins suivantes:",
        items: [
          {
            title: "Envoi de newsletters",
            text: "Avec votre consentement, nous utilisons votre email pour envoyer des nouvelles, des promotions et d'autres informations liées à nos services.",
          },
          {
            title: "Répondre aux questions anonymes",
            text: "Nous analysons les questions anonymes pour améliorer nos services et répondre aux demandes des utilisateurs.",
          },
          {
            title: "Analyser et améliorer la performance du site Web",
            text: "Les services d'analyse (Google Analytics et Yandex Metrica) nous permettent de rassembler des statistiques de visites du site pour optimiser notre contenu et améliorer l'expérience utilisateur.",
          },
        ],
      },
      {
        title: "Partage des Données avec des Tiers",
        text: "Nous ne partageons pas vos données personnelles avec des tiers, sauf lorsque cela est nécessaire pour l'utilisation de services tiers:",
        items: [
          {
            title: "Google Analytics et Yandex Metrica",
            text: "Ces services peuvent recevoir des données anonymisées pour analyser le trafic sur notre site. Vos données ne sont partagées qu'avec des services conformes aux exigences du RGPD.",
          },
          {
            title: "Formspree.io",
            text: "Nous utilisons Formspree.io pour traiter et envoyer les données des formulaires à notre email. Formspree.io peut recevoir les données que vous saisissez dans nos formulaires pour les transmettre à l'adresse email spécifiée. Les formulaires et les données envoyées via Formspree.io sont traités conformément à leur Politique de Confidentialité.",
          },
        ],
      },
      {
        title: "Cookies",
        text: "Nous utilisons des cookies pour améliorer les performances du site et vous fournir un contenu personnalisé. Les cookies nous permettent de:",
        items: [
          {
            text: "Analyser le comportement des utilisateurs sur le site",
          },
          {
            text: "Améliorer la structure et le contenu du site",
          },
          {
            text: "Respecter les exigences légales (par exemple, afficher des notifications de cookies). Vous pouvez gérer les paramètres des cookies dans votre navigateur et vous opposer à leur utilisation.",
          },
        ],
      },
      {
        title: "Base Légale du Traitement des Données",
        text: "Nous traitons vos données personnelles sur la base des fondements légaux suivants:",
        items: [
          {
            title: "Votre consentement",
            text: "Pour l'envoi de newsletters et le traitement des données d'analyse",
          },
          {
            title: "Intérêt légitime",
            text: "Pour l'analyse du trafic et l'amélioration des performances du site",
          },
        ],
      },
      {
        title: "Durée de Conservation de Vos Données",
        text: "Nous prenons toutes les mesures raisonnables pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Nous utilisons des serveurs et des protocoles sécurisés pour la transmission des données.",
      },
      {
        title: "Comment Nous Protégeons Vos Données",
        text: "Nous prenons toutes les mesures raisonnables pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Nous utilisons des serveurs et des protocoles sécurisés pour la transmission des données.",
      },
      {
        title: "Vos Droits en Vertu du RGPD",
        text: "En vertu du RGPD, vous avez les droits suivants:",
        items: [
          {
            title: "Droit d'accès",
            text: "Vous pouvez demander des informations sur les données que nous collectons et comment elles sont traitées.",
          },
          {
            title: "Droit de rectification",
            text: "Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes.",
          },
          {
            title: `Droit à l'effacement ("droit d'être oublié")`,
            text: "Vous pouvez demander la suppression de vos données personnelles. Veuillez noter que les données anonymisées collectées par Google Analytics et Yandex Metrica ne peuvent pas être supprimées, car elles ne peuvent pas être liées à votre identité.",
          },
          {
            title: "Droit de restreindre le traitement",
            text: "Vous pouvez demander à restreindre le traitement de vos données personnelles dans certaines situations.",
          },
          {
            title: "Droit à la portabilité des données",
            text: "Vous pouvez demander le transfert de vos données dans un format lisible par machine.",
          },
          {
            title: "Droit de s'opposer au traitement",
            text: "Vous pouvez vous opposer au traitement de vos données.",
          },
          {
            title: "Droit de retirer le consentement au traitement des données",
            text: "Vous pouvez retirer votre consentement au traitement des données à tout moment. Pour les données anonymisées collectées par Google Analytics et Yandex Metrica, la mise en œuvre de certains droits n'est pas possible, car ces données ne vous identifient pas en tant qu'utilisateur.",
          },
        ],
        additionalText:
          "Pour exercer ces droits, veuillez vous référer aux coordonnées fournies ci-dessous.",
      },
      {
        title: "Informations de Contact",
        text: "Si vous avez des questions concernant cette Politique de Confidentialité ou si vous souhaitez exercer vos droits, veuillez nous contacter à l'email: <a href='mailto:kat.tartary@gmail.com' target='_blank' class='link'>kat.tartary@gmail.com</a>.",
      },
      {
        title: "Modifications de la Politique de Confidentialité",
        text: "Nous pouvons mettre à jour cette Politique de Confidentialité à tout moment. Les mises à jour seront publiées sur cette page. Nous recommandons de consulter régulièrement la Politique de Confidentialité pour obtenir les dernières informations sur la manière dont nous protégeons vos données.",
      },
    ],
    buttonText: "Fermer",
  },
};

const generatePrivacyPolicyContent = (content) => {
  const { title, text, list } = content;

  const items = list
    .map(
      (item) => `
    <li class="modal__item-ordered">
      <h4 class="h4-title">${item.title}</h4>
      <p class="modal__text paragraph-small">${item.text}</p>
      ${
        item.items
          ? `<ul class="modal__list-unordered">
            ${item.items
              .map(
                (el) => `
              <li class="modal__item-unordered">
              ${el.title ? `<h5 class='h5-title'>${el.title}</h5>` : ""}  
                <p class='modal__text paragraph-small'>${el.text}</p>
                ${
                  el.items
                    ? `<ul>
                ${el.items
                  .map(
                    (itm) =>
                      `<li class='modal__item-unordered modal__text paragraph-small'>${itm}</li>`
                  )
                  .join("")}
                </ul>`
                    : ""
                }
                
              </li>
            `
              )
              .join("")}
          </ul>`
          : ""
      }${
        item.additionalText
          ? `<p class='modal__text paragraph-small'>${item.additionalText}</p>`
          : ""
      }
    </li>
  `
    )
    .join("");

  return `
    <h2 class="modal__title h2-title">${title}</h2>
    <p class="modal__text paragraph-small">${text}</p>
    <ol class="modal__list-ordered">
      ${items}
    </ol>
  `;
};

const updatePrivacyPolicyContent = (language) => {
  const content = privacyPolicyData[language] || privacyPolicyData.EN;

  const privacyContent = document.querySelector(".questions__modal-content");

  const button = document.querySelector(".button-close");

  button.title = content.buttonText;
  privacyContent.innerHTML = generatePrivacyPolicyContent(content);
};

loadLanguage(updatePrivacyPolicyContent);
dropdown.addEventListener("change", changeLanguage(updatePrivacyPolicyContent));
