const clientsData = [
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
];

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

const clientsContainer = document.getElementById("clientsCards");
clientsContainer.innerHTML = clientsData.map(generateClientCard).join("");
