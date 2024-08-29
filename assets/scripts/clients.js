const coverContent = {
  RU: {
    titleTop: "Онлайн консультации",
    titleBottom: "Катерины Тартари",
    subtitleTop: "Начните с бесплатной сессии",
    subtitleBottom: "Индивидуально, для пар, полиаморных союзов и семей",
    therapyPsychotherapy: "психотерапия",
    therapySextherapy: "секс-терапия",
    buttonText: "Записаться",
    videoSrc: "/assets/video/video_5.mp4",
  },
  EN: {
    titleTop: "Online Counseling",
    titleBottom: "Katerina Tartari",
    subtitleTop: "Get started with a free session",
    subtitleBottom: "For Individual, couples, polyamorous unions and families",
    therapyPsychotherapy: "psychotherapy",
    therapySextherapy: "sex therapy",
    buttonText: "Let’s talk!",
    videoSrc: "/assets/video/video_5.mp4",
  },
  FR: {
    titleTop: "thérapie en ligne",
    titleBottom: "par Katerina Tartary",
    subtitleTop: "Commence avec une consultation gratuite",
    subtitleBottom:
      "En individuel, pour couples, unions polyamoureuses et familles",
    therapyPsychotherapy: "psychothérapie",
    therapySextherapy: "Sexothérapie",
    buttonText: "Inscription",
    videoSrc: "/assets/video/video_5.mp4",
  },
};

// Localization data for clients section
const clientsSectionContent = {
  RU: {
    title: "Кто может обратиться ко мне",
    buttonText: "Запись",
    clients: [
      {
        image: "/assets/images/clients-individual.png",
        alt: "Девушка с закрытыми глазами",
        title: "Индивидуально",
        info: "Любой взрослый человек",
      },
      {
        image: "/assets/images/clients-pair.png",
        alt: "Поцелуй",
        title: "Пары и союзы",
        info: "Моногамные и немоногамные",
      },
      {
        image: "/assets/images/clients-family.png",
        alt: "Мать с дочерью",
        title: "Семьи",
        info: "Взрослые родственники",
      },
      {
        image: "/assets/images/clients-group.png",
        alt: "Группа людей",
        title: "Группы",
        info: "Друзья, коллеги",
      },
    ],
  },
  EN: {
    title: "who can schedule therapy",
    buttonText: "Let’s talk!",
    clients: [
      {
        image: "/assets/images/clients-individual.png",
        alt: "Woman with closed eyes",
        title: "Individuals",
        info: "Any adult person",
      },
      {
        image: "/assets/images/clients-pair.png",
        alt: "Kiss",
        title: "Couples and Unions",
        info: "Monogamous and not only",
      },
      {
        image: "/assets/images/clients-family.png",
        alt: "Mother with daughter",
        title: "Families",
        info: "Adult relatives",
      },
      {
        image: "/assets/images/clients-group.png",
        alt: "Group of people",
        title: "Groups",
        info: "Friends, colleagues",
      },
    ],
  },
  FR: {
    title: "Qui peut me consulter ",
    buttonText: "Inscription  ",
    clients: [
      {
        image: "/assets/images/clients-individual.png",
        alt: "Femme aux yeux fermés",
        title: "les individus",
        info: "Tout adultes",
      },
      {
        image: "/assets/images/clients-pair.png",
        alt: "les Couples et unions",
        title: "Couples et unions",
        info: "Monogames ou non",
      },
      {
        image: "/assets/images/clients-family.png",
        alt: "Mère avec sa fille",
        title: "Les familles",
        info: "Les proches adultes ",
      },
      {
        image: "/assets/images/clients-group.png",
        alt: "Groupe de personnes",
        title: "Les Groupes",
        info: "Les amies, les collègues ",
      },
    ],
  },
};

// update the cover section
const updateCoverSection = (language) => {
  const content = coverContent[language] || coverContent.EN;

  // Update titles and subtitles
  const titleTopElement = document.querySelector(".cover__title.top");
  const titleBottomElement = document.querySelector(".cover__title.bottom");
  const subtitleTopElement = document.querySelector(".cover__subtitle.top");
  const subtitleBottomElement = document.querySelector(
    ".cover__subtitle.bottom"
  );
  if (
    titleTopElement &&
    titleBottomElement &&
    subtitleTopElement &&
    subtitleBottomElement
  ) {
    titleTopElement.textContent = content.titleTop;
    titleBottomElement.textContent = content.titleBottom;
    subtitleTopElement.textContent = content.subtitleTop;
    subtitleBottomElement.textContent = content.subtitleBottom;
  } else {
    console.error("One or more title/subtitle elements not found");
  }

  // Update therapy types
  const therapyPsychotherapyElement = document.querySelector(
    ".cover__therapy.psychotherapy"
  );
  const therapySextherapyElement = document.querySelector(
    ".cover__therapy.sextherapy"
  );
  if (therapyPsychotherapyElement && therapySextherapyElement) {
    therapyPsychotherapyElement.textContent = content.therapyPsychotherapy;
    therapySextherapyElement.textContent = content.therapySextherapy;
  } else {
    console.error("One or more therapy elements not found");
  }

  // Update button text
  const button = document.querySelector(".cover__button");
  if (button) {
    button.textContent = content.buttonText;
  } else {
    console.error("Button element not found");
  }
};

// generate a client card
const generateClientCard = ({ image, alt, title, info }) => {
  return `
      <div class="clients-card hover-filter hover-transform">
        <img class="clients-card__img" src="${image}" alt="${alt}">
        <div class="clients-card__text">
          <h4 class="clients-card__title h4-title">${title}</h4>
          <p class="clients-card__info paragraph-standard">${info}</p>
        </div>
      </div>
    `;
};

// update the clients section
const updateClientsSection = (language) => {
  const content = clientsSectionContent[language] || clientsSectionContent.EN;

  // Update section title
  const clientsTitleElement = document.querySelector(".clients__title");
  if (clientsTitleElement) {
    clientsTitleElement.textContent = content.title;
  } else {
    console.error("Clients section title element not found");
  }

  // Update button text
  const clientsButtonElement = document.querySelector(".clients__button");
  if (clientsButtonElement) {
    clientsButtonElement.textContent = content.buttonText;
  } else {
    console.error("Clients section button element not found");
  }

  // Update client cards
  const clientsContainer = document.getElementById("clientsCards");
  clientsContainer.innerHTML = content.clients.map(generateClientCard).join("");
};

// handle language change
const handleLanguageChange = () => {
  const dropdown = document.getElementById("language-dropdown");
  const selectedLanguage = dropdown.value;
  localStorage.setItem("selectedLanguage", selectedLanguage);

  // Update sections content
  updateClientsSection(selectedLanguage);
};

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "EN"; // Default to 'EN'
  document.getElementById("language-dropdown").value = savedLanguage;

  updateClientsSection(savedLanguage);
});

// Add event listener to dropdown
document
  .getElementById("language-dropdown")
  .addEventListener("change", handleLanguageChange);
