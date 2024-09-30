import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const coverContent = {
  RU: {
    titleTop: "Онлайн-консультации",
    titleBottom: "Катерины Тартари",
    subtitleTop: "Начните с бесплатной сессии",
    subtitleBottom: "Индивидуально, для пар, полиаморных союзов и семей",
    therapyPsychotherapy: "психотерапия",
    therapySextherapy: "секс-терапия",
    svg: [
      "/assets/images/figures/sprite.svg#cross",
      "/assets/images/figures/sprite.svg#cross",
    ],
    buttonText: "Записаться",
    videoSrc: "/assets/video/video_5.mp4",
  },
  EN: {
    titleTop: "Online Counseling",
    titleBottom: "Katerina Tartari",
    subtitleTop: "Get started <br> with a free session",
    subtitleBottom:
      "For Individual, couples, <br> polyamorous unions and families",
    therapyPsychotherapy: "psychotherapy",
    therapySextherapy: "sex therapy",
    svg: ["/assets/images/figures/sprite.svg#cross"],
    preposition: "with",
    buttonText: "Let’s talk!",
    videoSrc: "/assets/video/video_5.mp4",
  },
  FR: {
    titleTop: "Thérapie <br> en ligne",
    titleBottom: "Katerina Tartary",
    subtitleTop: "Commence avec <br> une consultation gratuite",
    subtitleBottom:
      "En individuel, pour couples, <br> unions polyamoureuses et familles",
    therapyPsychotherapy: "psychothérapie",
    therapySextherapy: "sexothérapie",
    svg: ["/assets/images/figures/sprite.svg#cross"],
    preposition: "par",
    buttonText: "Inscription",
    videoSrc: "/assets/video/video_5.mp4",
  },
};

const generateSvgs = (svg) => {
  const svgString = svg
    .map(
      (icon) => `<svg class="cover__cross icon-cross">
    <use xlink:href="${icon}"></use>
  </svg>`
    )
    .join("");

  return svgString;
};

const updateCoverSection = (language) => {
  const content = coverContent[language] || coverContent.EN;

  const titleTopElement = document.querySelector(".cover__title.top");
  const titleBottomElement = document.querySelector(".cover__title.bottom");
  const subtitleTopElement = document.querySelector(".cover__subtitle.top");
  const subtitleBottomElement = document.querySelector(
    ".cover__subtitle.bottom"
  );
  const prepositionElement = document.querySelector(".cover__preposition");
  const iconsContainer = document.querySelector(".cover__icons-container");
  const therapyPsychotherapyElement = document.querySelector(
    ".cover__therapy.psychotherapy"
  );
  const therapySextherapyElement = document.querySelector(
    ".cover__therapy.sextherapy"
  );

  const videoElement = document.querySelector(".cover__video source");
  const button = document.querySelector(".cover__button");

  titleTopElement.innerHTML = content.titleTop;
  titleBottomElement.textContent = content.titleBottom;
  subtitleTopElement.innerHTML = content.subtitleTop;
  subtitleBottomElement.innerHTML = content.subtitleBottom;
  therapyPsychotherapyElement.textContent = content.therapyPsychotherapy;
  therapySextherapyElement.textContent = content.therapySextherapy;
  button.textContent = content.buttonText;
  videoElement.src = content.videoSrc;
  prepositionElement.textContent = content.preposition;
  iconsContainer.innerHTML = generateSvgs(content.svg);
};

loadLanguage(updateCoverSection);
dropdown.addEventListener("change", changeLanguage(updateCoverSection));
