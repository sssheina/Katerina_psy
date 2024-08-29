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

const updateCoverSection = (language) => {
  const content = coverContent[language] || coverContent.EN;

  // Update titles
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
    console.log("Titles and subtitles updated.");
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
    console.log("Therapy types updated.");
  } else {
    console.error("One or more therapy elements not found");
  }

  // Update button text
  const button = document.querySelector(".cover__button");
  if (button) {
    button.textContent = content.buttonText;
    console.log("Button text updated.");
  } else {
    console.error("Button element not found");
  }

  // Update video source
  const videoElement = document.querySelector(".cover__video source");
  if (videoElement) {
    videoElement.src = content.videoSrc;
    console.log("Video source updated.");
  } else {
    console.error("Video element not found");
  }
};

// Function to handle language change
const handleLanguageChange = () => {
  const dropdown = document.getElementById("language-dropdown");
  const selectedLanguage = dropdown.value;
  localStorage.setItem("selectedLanguage", selectedLanguage);

  // Update sections content
  updateCoverSection(selectedLanguage);
};

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "EN"; // Default to 'EN'
  document.getElementById("language-dropdown").value = savedLanguage;

  // Update sections content
  updateCoverSection(savedLanguage);
});

// Add event listener to dropdown
const dropdown = document.getElementById("language-dropdown");
if (dropdown) {
  dropdown.addEventListener("change", handleLanguageChange);
} else {
  console.error("Dropdown element not found");
}
