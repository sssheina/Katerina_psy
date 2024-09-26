import "./cookie.js";
import "./about.js";
import "./benefits.js";
import "./clients.js";
import "./composables/privacy-policy.js";
import "./cover.js";
import "./expertise.js";
import "./faq.js";
import "./feedback.js";
import "./footer.js";
import "./main.js";
import "./menu.js";
import "./methods.js";
import "./price.js";
import "./privacy.js";
import "./questions.js";
import "./sendemail.js";
import "./sendquestions.js";
import "./steps.js";
import "./words.js";

// const cookieText = {
//   en: "We use cookies to enhance your experience. By using our website, you agree to our cookie policy.",
//   fr: "Nous utilisons des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez notre politique de cookies.",
//   ru: "Мы используем файлы cookie для улучшения вашего опыта. Используя наш сайт, вы соглашаетесь с нашей политикой использования файлов cookie.",
// };
//
// function renderCookieText() {
//   const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
//   const cookieElement = document.getElementById("cookie-text");
//   cookieElement.textContent = cookieText[selectedLanguage];
// }
//
// // Call this function when the page loads or when the language changes
// window.onload = renderCookieText;
//
// const setCookie = (name, value, days) => {
//   let expires = "";
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// };
//
// const getCookie = (name) => {
//   const nameEQ = name + "=";
//   const ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) === " ") c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// };
//
// document.addEventListener("DOMContentLoaded", () => {
//   const cookieConsent = document.getElementById("cookie-consent");
//   const acceptButton = document.getElementById("accept-cookies");
//   const declineButton = document.getElementById("decline-cookies");
//
//   // Check if the user has already given consent
//   if (!getCookie("cookieConsent")) {
//     cookieConsent.style.display = "block";
//   }
//
//   acceptButton.onclick = function () {
//     setCookie("cookieConsent", "accepted", 30); // Set cookie for 30 days
//     cookieConsent.style.display = "none";
//     // Initialize Google Analytics
//     gtag("config", "YOUR_TRACKING_ID");
//   };
//
//   declineButton.onclick = function () {
//     setCookie("cookieConsent", "declined", 30); // Set cookie for 30 days
//     cookieConsent.style.display = "none";
//   };
// });
//
// // Open the modal when the link is clicked
// document.getElementById("more-info-link").onclick = function () {
//   document.getElementById("modal").style.display = "block";
// };
//
// // Close the modal when the close button is clicked
// document.querySelector(".close").onclick = function () {
//   document.getElementById("modal").style.display = "none";
// };
//
// // Close the modal when clicking outside of it
// window.onclick = function (event) {
//   const modal = document.getElementById("modal");
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };
//
// const modalText = {
//   en: "We collect cookies to improve your experience. This includes tracking and analytics information.",
//   fr: "Nous collectons des cookies pour améliorer votre expérience. Cela inclut des informations de suivi et d'analyse.",
//   ru: "Мы собираем файлы cookie для улучшения вашего опыта. Это включает информацию о трекинге и аналитике.",
// };
//
// function renderModalText() {
//   const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
//   const modalElement = document.getElementById("modal-text");
//   modalElement.textContent = modalText[selectedLanguage];
// }
//
// // Call this function to render modal content based on language
// document
//   .getElementById("more-info-link")
//   .addEventListener("click", renderModalText);
