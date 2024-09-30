import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const clientsSectionContent = {
  RU: {
    title: "Кто может обратиться ко\u00A0мне",
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
    title: "Qui peut me\u00A0consulter ",
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
  const clientsContainer = document.querySelector(".clients__cards");
  clientsContainer.innerHTML = content.clients.map(generateClientCard).join("");
};

loadLanguage(updateClientsSection);
dropdown.addEventListener("change", changeLanguage(updateClientsSection));
