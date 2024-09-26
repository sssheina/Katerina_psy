// Cookie consent text for different languages
const cookieText = {
  en: "We use cookies to enhance your experience. By using our website, you agree to our cookie policy.",
  fr: "Nous utilisons des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez notre politique de cookies.",
  ru: "Мы используем файлы cookie для улучшения вашего опыта. Используя наш сайт, вы соглашаетесь с нашей политикой использования файлов cookie.",
};

// Modal text for different languages
const modalText = {
  en: "We collect cookies to improve your experience. This includes tracking and analytics information.",
  fr: "Nous collectons des cookies pour améliorer votre expérience. Cela inclut des informations de suivi и анализа.",
  ru: "Мы собираем файлы cookie для улучшения вашего опыта. Это включает информацию о трекинге и аналитике.",
};

const buttonText = {
  en: {
    moreInfo: "Learn more",
    accept: "Accept",
    decline: "Decline",
  },
  fr: {
    moreInfo: "En savoir plus",
    accept: "Accepter",
    decline: "Décliner",
  },
  ru: {
    moreInfo: "Узнать больше",
    accept: "Принять",
    decline: "Отклонить",
  },
};

// Render cookie consent text based on selected language
const renderCookieText = () => {
  const selectedLanguage = (
    localStorage.getItem("selectedLanguage") || "en"
  ).toLowerCase();
  const cookieElement = document.getElementById("cookie-text");
  const acceptBtnElement = document.querySelector("#accept-cookies");
  const declineBtnElement = document.querySelector("#decline-cookies");

  cookieElement.textContent = cookieText[selectedLanguage] || cookieText["en"];
  const moreInfoLinkElement = document.getElementById("more-info-link");
  moreInfoLinkElement.textContent =
    buttonText[selectedLanguage].moreInfo || buttonText["en"].moreInfo;
  acceptBtnElement.textContent =
    buttonText[selectedLanguage].accept || buttonText["en"].accept;
  declineBtnElement.textContent =
    buttonText[selectedLanguage].decline || buttonText["en"].decline;
};

// Open modal and render its content based on selected language
const renderModalText = () => {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  const modalElement = document.getElementById("modal-text");
  modalElement.textContent = modalText[selectedLanguage] || modalText["en"];
};

// Call this function when the page loads to render cookie text
document.addEventListener("DOMContentLoaded", () => {
  const defaultLanguage = "en";
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || defaultLanguage;
  localStorage.setItem("selectedLanguage", selectedLanguage);
  renderCookieText();

  // Attach event listener for language change
  const languageDropdown = document.querySelector(".language-dropdown");
  languageDropdown.addEventListener("change", handleLanguageChange);
});

// Function to handle language change
const handleLanguageChange = (event) => {
  const newLanguage = event.target.value.toLowerCase();
  localStorage.setItem("selectedLanguage", newLanguage);
  renderCookieText();
  renderModalText();
};

// Open the modal when the link is clicked
document.getElementById("more-info-link").onclick = (e) => {
  e.preventDefault();
  renderModalText();
  document.getElementById("modal").style.display = "block";
};

// Close the modal when the close button is clicked
document.querySelector(".close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Function to set cookies with expiration date
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

// Function to get cookies
const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
};

// Check for cookie consent and display banner if not provided
document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!getCookie("cookieConsent")) {
    cookieConsent.style.display = "block";
  }

  // Set cookies based on user consent
  acceptButton.onclick = () => {
    setCookie("cookieConsent", "accepted", 30); // Set cookie for 30 days
    cookieConsent.style.display = "none";

    // Initialize Google Analytics only if consent is accepted
    gtag("config", "YOUR_TRACKING_ID");
  };

  declineButton.onclick = () => {
    setCookie("cookieConsent", "declined", 30); // Set cookie for 30 days
    cookieConsent.style.display = "none";
  };
});
