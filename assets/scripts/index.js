// ----- SCROLL ANIMATION -----

gsap.registerPlugin(ScrollTrigger);

const h2_title = gsap.utils.toArray(".h2-title");

// h2_title.forEach((title) => {
//   const anim = gsap.from(title, {
//     x: -100,
//     opacity: 0,
//     paused: true,
//   });

//   ScrollTrigger.create({
//     trigger: title,
//     start: "center 90%",
//     onEnter: () => anim.play(),
//   });

//   ScrollTrigger.create({
//     trigger: title,
//     start: "top bottom",
//     onLeaveBack: () => anim.pause(0),
//   });
// });

const expertise_heading = gsap.utils.toArray(".expertise-heading");
expertise_heading.forEach((title) => {
  const anim = gsap.from(title, {
    x: -50,
    opacity: 0,
    paused: true,
  });

  ScrollTrigger.create({
    trigger: title,
    start: "top bottom",
    onEnter: () => anim.play(),
  });

  ScrollTrigger.create({
    trigger: title,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0),
  });
});

const expertise_picture = gsap.utils.toArray(".expertise-block__picture");
expertise_picture.forEach((picture) => {
  const anim = gsap.from(picture, {
    opacity: 0,
    delay: 0.5,
    duration: 3,
  });

  ScrollTrigger.create({
    trigger: picture,
    start: "top 10%",
    onEnter: () => anim.play(),
  });

  ScrollTrigger.create({
    trigger: picture,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0),
  });
});

const expertise_block = gsap.utils.toArray(".expertise-block-item");
expertise_block.forEach((box) => {
  const anim = gsap.from(box, {
    y: -20,
    opacity: 0,
    delay: 0.4,
    stagger: 0.2,
    paused: true,
  });

  ScrollTrigger.create({
    trigger: box,
    start: "top bottom",
    onEnter: () => anim.play(),
  });

  ScrollTrigger.create({
    trigger: box,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0),
  });
});

//  ----- HEADER COLOR -----

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 300) {
    header.classList.toggle("scrolled", true);
  } else {
    header.classList.toggle("scrolled", false);
  }
});

// ----- BURGER MENU -----

const burger = document.querySelector(".header-burger");
const overlay = document.querySelector(".header__overlay");
const headerMenuLinks = document.querySelectorAll(".header__menu-link");
let activeLink;

document.addEventListener("DOMContentLoaded", function () {
  burger.addEventListener("click", showHeaderMenu);
  overlay.addEventListener("click", showHeaderMenu);
});

const showHeaderMenu = () => {
  burger.classList.toggle("active");
  overlay.classList.toggle("show");

  const nav = document.querySelector(".header__nav");

  nav.classList.toggle("show");
  document.body.classList.toggle("lock");

  if (!nav.classList.contains("show")) {
    activeLink.classList.remove("active");
  }
};

headerMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    headerMenuLinks.forEach((otherLink) =>
      otherLink.classList.remove("active")
    );

    link.classList.add("active");
    activeLink = link;
  });
});

// FAQ

const questions = Array.from(document.querySelectorAll(".faq-box"));

const showQuestion = (e) => {
  let currentQuestion = e.target.closest(".faq-box");
  let currentAnswer = currentQuestion.querySelector(".faq-box__answer");

  currentQuestion.classList.toggle("active");

  if (currentQuestion.classList.contains("active")) {
    currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
  } else {
    currentAnswer.style.maxHeight = 0;
  }
};

questions.forEach((question) => {
  question.addEventListener("click", showQuestion);
});

// ----- FEEDBACK -----

const swiper = new Swiper(".swiper", {
  grabCursor: true,
  touchRatio: 2,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    428: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  loop: true,
  loopedSlides: 2,
  watchOverflow: true,
  spaceBetween: 37,
  slidesPerGroup: 1,
  // centeredSlides: true,
  initialSlide: 0,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1200,
});

// ----- BUTTON UP -----

const btnUp = document.querySelector(".button-up");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 400) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//----------Cookies---------

// function acceptCookies() {
//   document.getElementById("cookieConsent").style.display = "none";
//   // Дополнительные действия, которые вы хотите выполнить при согласии с куками
//   // Активация кода отслеживания Google Analytics
//   gtag("config", "GTM-5M7R6KBB");
// }

// ----- SWITCHING CLASSES to show or hide the burger menu (mobile or PC version) -----

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   document.body.classList.add("_touch");

//   let menuArrow = document.querySelector(".menu__arrow");

//   menuArrow.addEventListener("click", function () {
//     menuArrow.parentElement.classList.toggle("_active");
//     console.log(menuArrow.parentElement);
//   });
// } else {
//   document.body.classList.add("_pc");
// }

// ----- Privacy Policy -----

// const modalPrivacy = document.querySelector(".privacy-policy__concent");
// const overlayPrivacy = document.querySelector(".privacy-policy");
// const openModalBtnPrivacy = document.querySelector(".privacy-policy__link");
// const closeModalBtnPrivacy = document.querySelector(
//   ".privacy-policy__btn-close"
// );

// const openModalPrivacy = function () {
//   modalPrivacy.classList.remove("hidden");
//   overlayPrivacy.classList.remove("hidden");
//   document.body.style.overflow = "hidden";
// };

// openModalBtnPrivacy.addEventListener("click", openModalPrivacy);

// const closeModalPrivacy = function () {
//   modalPrivacy.classList.add("hidden");
//   overlayPrivacy.classList.add("hidden");
//   document.body.style.overflow = ""; // Разблокируем прокрутку
// };

// closeModalBtnPrivacy.addEventListener("click", closeModalPrivacy);

// overlayPrivacy.addEventListener("click", closeModalPrivacy);

// modalPrivacy.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modalPrivacy.classList.contains("hidden")) {
//     closeModalPrivacy();
//   }
// });

// document
//   .querySelector(".privacy-policy__concent")
//   .addEventListener("show.bs.modal", function () {
//     document.body.style.overflow = "hidden";
//   });

// document
//   .querySelector(".privacy-policy__concent")
//   .addEventListener("hide.bs.modal", function () {
//     document.body.style.overflow = "";
//   });

// ----- DOWNLOAD FILE -----

// function downloadPDF() {
//   const link = document.createElement("a");
//   link.href = "./assets/docs/guide.pdf";
//   link.download = "guide.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }

// function downloadPdfEn() {
//   const linkEn = document.createElement("a");
//   linkEn.href = "./assets/docs/guide_en.pdf";
//   linkEn.download = "guide_en.pdf";
//   document.body.appendChild(linkEn);
//   linkEn.click();
//   document.body.removeChild(linkEn);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const downloadBtn = document.getElementById("downloadBtn");
//   downloadBtn.addEventListener("click", function () {
//     const language = navigator.language || navigator.userLanguage;
//     if (language.startsWith("en")) {
//       downloadPdfEn();
//     } else {
//       downloadPDF();
//     }
//   });
// });

// _______________________________________________________

// function scrollToRegistration() {
//   const targetBlock = document.getElementById("registration");
//   targetBlock.scrollIntoView({ behavior: "smooth" });
// }

// //----- Common modal window -----

// const openModalBtn = document.querySelector(".thanx-message__link");
// const closeModalBtn = document.querySelector(".btn-close");

// const openModal = function (content) {
//   let modal = document.getElementById("modal_window");
//   let overlay = document.getElementById("overlay");
//   let modalContent = document.getElementById("modal_window_content");
//   document.body.classList.add("no-scroll");
//   modalContent.innerHTML = content;
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   document.body.style.overflow = "hidden"; // Блокируем прокрутку
// };

// const closeModal = function () {
//   let modal = document.getElementById("modal_window");
//   let overlay = document.getElementById("overlay");
//   document.body.classList.remove("no-scroll");
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   document.body.style.overflow = ""; // Разблокируем прокрутку
// };

// document
//   .getElementById("btn_close_modal")
//   .addEventListener("click", closeModal);
// document.getElementById("overlay").addEventListener("click", closeModal);
// document
//   .getElementById("modal_window")
//   .addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   });

// ____________________________PHPMailer__________________________

// async function submitForm() {
//   try {
//     // Validating the form
//     if (!validateRegForm(true)) {
//       openModal(REG_FORM_VALIDATION_MESSAGE_GENERAL);
//       return;
//     }

//     // Check for profanity
//     let userName = document.getElementById("userName").value;
//     let email = document.getElementById("email").value;
//     let comment = document.getElementById("comment").value;
//     if (
//       !validateInput(userName) ||
//       !validateInput(email) ||
//       !validateInput(comment)
//     ) {
//       openModal(REG_FORM_VALIDATION_MESSAGE_PROFANITY);
//       return;
//     }

//     // Формируем запрос
//     const response = await fetch("send.php", {
//       method: "POST",
//       body: new FormData(emailform),
//     });
//     // проверяем, что ответ есть
//     if (!response.ok)
//       throw (
//         REG_FORM_RESPONSE_MESSAGE_SERVER_ERROR +
//         `${response.status}` +
//         REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV
//       );
//     // проверяем, что ответ действительно JSON
//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw (
//         REG_FORM_RESPONSE_MESSAGE_WRONG_DATA_TYPE +
//         REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV
//       );
//     }
//     // обрабатываем запрос
//     const json = await response.json();
//     if (json.result === "success") {
//       // в случае успеха
//       openModal(REG_FORM_THANKS_MODAL_CONTENT);
//       clearFormFields();
//     } else {
//       // в случае ошибки
//       console.log(json);
//       throw (
//         REG_FORM_RESPONSE_MESSAGE_SERVER_INTERNAL_ERROR +
//         json.info +
//         REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV
//       );
//     }
//   } catch (error) {
//     // обработка ошибки
//     openModal(error);
//   }
// }

// function showThankYouMessage() {
//   modal.style.display = "block";
// }

//___________Registration form______________________________

// const form = document.querySelector(".formWithValidation");
// //const email = document.querySelector("#email");
// const checkboxAdult = document.querySelectorAll(".checkbox_18");
// const checkboxPrivat = document.querySelectorAll(".checkboxPrivat");
// const errorsInfo = document.querySelector("#errorsInfo");
// const whatsappInput = document.querySelector("#whatsApp");

// let submitted = false;

// const profanityList = [
//   "xxx",
//   "viagra",
//   "bitch",
//   "slut",
//   "whore",
//   "cum",
//   "fuck",
//   "виагра",
//   "сучка",
//   "сука",
//   "хуй",
//   "тварь",
//   "потаскуха",
//   "блядина",
//   "шалава",
//   "трахать",
//   "трахал",
//   "трахаю",
//   "шлюха",
//   "сперма",
//   "блядь",
// ]; // Add more words as needed

// // Function to check for angle brackets and profanity
// function validateInput(input) {
//   if (/<|>/.test(input)) {
//     return false; // Found angle brackets
//   }
//   for (let word of profanityList) {
//     if (input.toLowerCase().includes(word)) {
//       return false; // Found profanity
//     }
//   }
//   return true;
// }

// // Function to clear form fields
// function clearFormFields() {
//   document.getElementById("userName").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("whatsApp").value = "";
//   document.getElementById("telegram").value = "";
//   document.getElementById("comment").value = "";
// }

// Registration form validation functions
//----------------------------------------

//If needShowMessages = true, the validation messages will be displayed beneath the name field
//Return true if validation is ok, false otherwise
// function validateRegFormName(needShowMessages) {
//   //Doing the basic validation - the name field should not be empty
//   let result = true;
//   let el = document.getElementById("userName");
//   let elError = document.getElementById("errorUserName");

//   if (el.value === null || el.value === "" || !validateInput(el.value)) {
//     result = false;
//   }

//   if (needShowMessages) {
//     elError.innerText = result ? "" : REG_FORM_VALIDATION_MESSAGE_NAME;
//   }

//   return result;
// }

// function validateRegFormEmail(needShowMessages) {
//   const re =
//     /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

//   let result = true;
//   let el = document.getElementById("email");
//   let elError = document.getElementById("errorEmail");

//   if (el.value === null || el.value === "") {
//     result = false;

//     if (needShowMessages) {
//       elError.innerText = REG_FORM_VALIDATION_MESSAGE_EMAIL;
//     }
//   } else if (!re.test(el.value)) {
//     result = false;

//     if (needShowMessages) {
//       elError.innerText = REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX;
//     }
//   } else {
//     elError.innerText = "";
//   }

//   return result;
// }

// function validateRegFormAge(needShowMessages) {
//   let result = true;
//   let el = document.getElementById("checkbox_18");
//   let elError = document.getElementById("errorAge");

//   if (el.value === null || el.value === "" || !el.checked) {
//     result = false;
//   }

//   if (needShowMessages) {
//     elError.innerText = result ? "" : REG_FORM_VALIDATION_MESSAGE_AGE;
//   }

//   return result;
// }

// function validateRegFormPrivacy(needShowMessages) {
//   let result = true;
//   let el = document.getElementById("checkboxPrivat");
//   let elError = document.getElementById("errorPrivacy");

//   if (el.value === null || el.value === "" || !el.checked) {
//     result = false;
//   }

//   if (needShowMessages) {
//     elError.innerText = result ? "" : REG_FORM_VALIDATION_MESSAGE_PRIVACY;
//   }

//   return result;
// }

// function validateRegForm(needShowMessages) {
//   let result = true;

//   result = validateRegFormName(needShowMessages);

//   if (result) {
//     result = validateRegFormEmail(needShowMessages);
//   }

//   if (result) {
//     result = validateRegFormAge(needShowMessages);
//   }

//   if (result) {
//     result = validateRegFormPrivacy(needShowMessages);
//   }

//   let button_element = document.getElementById("registration_button");
//   button_element.disabled = !result;

//   return result;
// }

// document.getElementById("userName").addEventListener("blur", (event) => {
//   validateRegFormName(true);
// });
// document.getElementById("userName").addEventListener("keyup", (event) => {
//   validateRegForm(true);
// });
// document.getElementById("email").addEventListener("blur", (event) => {
//   validateRegFormEmail(true);
// });
// document.getElementById("email").addEventListener("keyup", (event) => {
//   validateRegForm(true);
// });
// document.getElementById("checkbox_18").addEventListener("click", (event) => {
//   validateRegForm(true);
// });
// document.getElementById("checkboxPrivat").addEventListener("click", (event) => {
//   validateRegForm(true);
// });

// function validateCheckboxes(checkboxes) {
//   return [...checkboxes].some((checkbox) => checkbox.checked);
// }

// ----- Прокрутка при клике -----
// const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top +
//         pageYOffset -
//         document.querySelector("header").offsetHeight;

//       if (iconMenu.classList.contains("_active")) {
//         document.body.classList.remove("_lock");
//         iconMenu.classList.remove("_active");
//         menuBody.classList.remove("_active");
//       }

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth",
//       });
//       e.preventDefault();
//     }
//   }
// }

//  ----- BUTTON GLOW EFFECT -----

// (function setGlowEffectRx() {
//   const glowEffects = document.querySelectorAll(".glow-effect");

//   glowEffects.forEach((glowEffect) => {
//     const glowLines = glowEffect.querySelectorAll("rect");
//     const rx = getComputedStyle(glowEffect).borderRadius;

//     glowLines.forEach((line) => {
//       line.setAttribute("rx", rx);
//     });
//   });
// })();

// ---------Cookie------
// function acceptCookies() {
// document.getElementById("cookieConsent").style.display = "none";
// Дополнительные действия, которые вы хотите выполнить при согласии с куками
// Активация кода отслеживания Google Analytics
// gtag("config", "GTM-5M7R6KBB");
// }

// function acceptCookies1() {
// document.getElementById("cookieConsent").style.display = "none";
// Дополнительные действия, которые вы хотите выполнить при согласии с куками
// Активация кода отслеживания Google Analytics
// gtag("config", "GTM-5M7R6KBB");
// }
