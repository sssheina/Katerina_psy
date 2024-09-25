import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const aboutContent = {
  RU: {
    title: "Обо мне",
    textBlocks: [
      "Привет! Меня зовут Катерина Тартари.",
      "Я секс-терапевтка, ACT* и EFT** консультантка, обучалась психологической помощи при травме насилия. С 2022 года помогаю клиентам из 15 стран: провожу консультации, организую терапевтические ретриты и арт-терапию для групп.",
      "Как полиаморка, феминистка и квир-персона, я работаю с людьми различных гендерных идентичностей, находящихся в разных форматах отношений, включая полиаморные союзы.",
      "Помогаю людям осознавать свои ценности, искать себя и выстраивать близкие отношения.",
    ],
    footnotes: [
      "* Терапия принятия и ответственности (Acceptance & Commitment Therapy ACT)",
      "** Эмоционально фокусированная терапия для союзов (Emotionally Focused Therapy EFT)",
    ],
    videoSrc: "/assets/video/kate_ru_sub.mp4",
    buttonText: "Запись на сессию",
  },
  EN: {
    title: "About Me",
    textBlocks: [
      "Hello! My name is Katerina Tartary.",
      "I am a sex therapist, ACT* and EFT** counsellor trained in violence trauma counselling. Since 2022, I have been helping clients from 15 countries by providing consultations, organizing therapeutic retreats and art therapy for groups.",
      "As a polyamorous, feminist, and queer person, I work with people of different gender identities in different types of relationships, including polyamorous unions.",
      "I help people connect to their values, find their unique way of being and build close relationships.",
    ],
    footnotes: [
      "* Acceptance & Commitment Therapy",
      "**  Emotionally Focused Therapy for couples",
    ],
    videoSrc: "/assets/video/kate_en.mp4",
    buttonText: "Book free session",
  },
  FR: {
    title: "Qui je suis",
    textBlocks: [
      "Bonjour! Je m'appelle Katerina Tartari.",
      "Je suis sexothérapeute, consultante en ACT* et EFT**, et j'ai également une formation en thérapie des traumatismes liés à la violence. Depuis 2022, j'ai aidé des client.es de 15 pays en consultations privées, pendant des retraites thérapeutiques et lors des sessions d'art-thérapie en groupes.",
      "En tant que femme polyamoureuse, féministe et queer, je travaille avec des personnes de tous genres, orientations et dans toutes sortes de relations y compris non-monogames.",
      "J'accompagne mes client.es pour qu’iels puissent prendre conscience de leurs forces, se connecter à leurs valeurs et à nouer des relations épanouies avec soi et les autres.",
    ],
    footnotes: [
      "* Thérapie d’Acceptation et d’Engagement (Acceptance & Commitment Therapy ACT)",
      "**  Thérapie Centrée sur l’Emotion (Emotionally Focused Therapy EFT)",
    ],
    videoSrc: "/assets/video/kate_fr.mp4",
    buttonText: "Ton premier RDV! ",
  },
};

const updateAboutSection = (language) => {
  const content = aboutContent[language] || aboutContent.EN;

  // Update title
  const titleElement = document.querySelector(".about__title");
  if (titleElement) {
    titleElement.textContent = content.title;
  } else {
    console.error("Title element not found");
  }

  // Update text blocks
  const textBlockContainer = document.querySelector(".about__text-block");
  if (textBlockContainer) {
    textBlockContainer.innerHTML = content.textBlocks
      .map((block) => `<p class="paragraph-standard">${block}</p>`)
      .join("");

    // Append footnotes to the text block container
    const footnotesHTML = content.footnotes
      .map((note) => `<p class="footnote-standard">${note}</p>`)
      .join("");
    textBlockContainer.innerHTML += footnotesHTML;
  } else {
    console.error("Text block container not found");
  }

  // Update video source
  const videoElement = document.querySelector(".about__video");
  const videoSource = document.querySelector(".about__video source");
  if (videoElement && videoSource) {
    videoSource.src = content.videoSrc;
    videoElement.load(); // Reload video to apply new source
  } else {
    console.error("Video element or video source element not found");
  }

  // Update button text
  const button = document.querySelector(".about__button");
  if (button) {
    button.textContent = content.buttonText;
  } else {
    console.error("Button element not found");
  }
};

loadLanguage(updateAboutSection);
dropdown.addEventListener("change", changeLanguage(updateAboutSection));
