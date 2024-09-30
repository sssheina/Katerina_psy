import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const stepsDataRu = [
  {
    number: "01",
    subtitle: "Запись",
    text: `Выберите в календаре консультаций удобное время для первой бесплатной 30-минутной сессии`,
  },
  {
    number: "02",
    subtitle: "Подтверждение",
    text: `На вашу электронную почту придет письмо с датой консультации и ссылкой Google Meet — подтвердите участие и внесите в свой календарь. Второе письмо — с документом об информированном согласии на консультацию`,
  },
  {
    number: "03",
    subtitle: "Первая сессия",
    text: `Перейдите по ссылке Google Meet из письма с приглашением или из вашего календаря. Если вы потеряли ссылку, напишите мне в WhatsApp или Telegram`,
  },
  {
    number: "04",
    subtitle: "Последующие сессии",
    text: `Мы проведем столько сеансов, сколько вам потребуется. Информация о способах оплаты присылается в отдельном письме. Оплата сессии — не позднее 24 часов до начала. Полная сессия длится 50 - 70 минут`,
  },
];

const stepsDataEn = [
  {
    number: "01",
    subtitle: "Scheduling",
    text: `Select a convenient time in the consultation calendar for your first free 30-minute session`,
  },
  {
    number: "02",
    subtitle: "Confirmation",
    text: `You will receive an email with the consultation date and a Google Meet link - confirm your participation and add it to your calendar. The second letter contains a document of informed consent for therapy`,
  },
  {
    number: "03",
    subtitle: "First session",
    text: `Follow the Google Meet link in your invitation email or your calendar to connect. If you have lost the link, write to me on WhatsApp or Telegram`,
  },
  {
    number: "04",
    subtitle: "Following sessions",
    text: `We will have as many sessions as you need. Information about payment methods is sent in a separate email. Payment for the session must be made no later than 24 hours before the start. A full session lasts 50 - 70 minutes`,
  },
];

const stepsDataFr = [
  {
    number: "01",
    subtitle: "Inscription",
    text: `Sélectionnez un créneau qui vous convient dans le calendrier de consultations pour votre première session gratuite de 30 minutes`,
  },
  {
    number: "02",
    subtitle: "Confirmation",
    text: `Vous recevrez un email avec la date de la consultation et un lien Google Meet. Confirmez votre participation et ajoutez-le à votre calendrier. Un deuxième email contiendra le document de consentement pour la session.`,
  },
  {
    number: "03",
    subtitle: "Première session",
    text: `Connectez-vous grâe au lien Google Meet depuis votre e-mail d'invitation ou depuis votre calendrier. Si vous ne trouvez plus le lien, écrivez-moi sur WhatsApp ou Telegram`,
  },
  {
    number: "04",
    subtitle: "Sessions suivantes",
    text: `Il y aura autant de séances que vous le souhaitez. Les informations sur les modes de paiement seront envoyées par e-mail. Effectuez le payment au plus tard 24 heures avant le début. Une consultation complète dure 50 à 70 minutes`,
  },
];

const stepsDataMap = {
  RU: {
    title: "Этапы работы",
    image: "Абстрактные линии",
    data: stepsDataRu,
    buttonText: "Запись",
  },
  EN: {
    title: "Process steps",
    image: "Abstract lines",
    data: stepsDataEn,
    buttonText: "Book First Session",
  },
  FR: {
    title: "Les étapes de\u00A0thérapie",
    image: "Lignes abstraites",
    data: stepsDataFr,
    buttonText: "Prendre RDV",
  },
};

const stepTemplate = document.querySelector(".step-template").content;
const stepsContainer = document.querySelector(".steps__content");

const generateStep = (language) => {
  while (stepsContainer.firstChild) {
    stepsContainer.removeChild(stepsContainer.firstChild);
  }

  stepsDataMap[language].data.forEach((step) => {
    const stepClone = document.importNode(stepTemplate, true);

    stepClone.querySelector(".steps__number").textContent = step.number;
    stepClone.querySelector(".steps__subtitle").textContent = step.subtitle;
    stepClone.querySelector(".steps__text").textContent = step.text;

    stepsContainer.appendChild(stepClone);
  });
};

const updateStepsContent = (language) => {
  const sectionTitle = document.querySelector(".steps__title");
  const button = document.querySelector(".steps__button");

  sectionTitle.textContent = stepsDataMap[language].title;
  button.textContent = stepsDataMap[language].buttonText;

  generateStep(language);
};

loadLanguage(updateStepsContent);
dropdown.addEventListener("change", changeLanguage(updateStepsContent));
