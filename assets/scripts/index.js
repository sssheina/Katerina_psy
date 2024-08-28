document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("language-dropdown");

  // Get saved language from localStorage
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    dropdown.value = savedLanguage;
  }

  // Save the selected language
  dropdown.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
  });
});

//-----Анонимные вопросы-----

// Список запрещенных слов
const profanityList = [
  "xxx",
  "viagra",
  "bitch",
  "slut",
  "whore",
  "cum",
  "fuck",
  "виагра",
  "сучка",
  "сука",
  "хуй",
  "тварь",
  "потаскуха",
  "блядина",
  "шалава",
  "трахать",
  "трахал",
  "трахаю",
  "шлюха",
  "сперма",
  "блядь",
];

// Функция проверки спама
function validateInput(input) {
  if (/<|>/.test(input)) {
    return false; // Наличие угловых скобок
  }
  for (let word of profanityList) {
    if (input.toLowerCase().includes(word)) {
      return false; // Наличие нецензурных слов
    }
  }
  return true;
}

// Обработка кнопки отправки формы
document
  .getElementById("questions__button")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Предотвращаем обычное поведение формы

    const form = document.getElementById("questions__form");
    const formData = new FormData(form);
    const modalContent = document.getElementById("modal_window_content");
    const overlay = document.getElementById("overlay");
    const modalWindow = document.getElementById("modal_window");
    const errorDiv = document.getElementById("errorQuestions");

    // Получение значения из поля textarea
    const userInput = formData.get("message");

    // Проверка ввода на спам
    if (!validateInput(userInput)) {
      errorDiv.innerHTML =
        "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
      return; // Прерываем выполнение функции
    } else {
      errorDiv.innerHTML = ""; // Очистка сообщения об ошибке
    }

    try {
      const response = await fetch("https://formspree.io/f/xvgpvnov", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        modalContent.innerHTML =
          '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
        form.reset(); // Очищаем поле textarea
      } else {
        modalContent.innerText = "Произошла ошибка при отправке формы.";
      }

      // Показ модального окна
      overlay.classList.remove("hidden");
      modalWindow.classList.remove("hidden");
    } catch (error) {
      console.error("Ошибка:", error);
      modalContent.innerText = "Произошла ошибка при отправке формы.";
      overlay.classList.remove("hidden");
      modalWindow.classList.remove("hidden");
    }
  });

// Очистка сообщения об ошибке при изменении значения в textarea
document
  .querySelector(".questions__comment")
  .addEventListener("input", function () {
    const errorDiv = document.getElementById("errorQuestions");
    errorDiv.innerHTML = ""; // Очистка сообщения об ошибке при вводе текста
  });

// Функции для открытия и закрытия модального окна
const openModal = function (content) {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");
  let modalContent = document.getElementById("modal_window_content");

  document.body.classList.add("no-scroll");

  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.body.style.overflow = "hidden";
};

const closeModal = function () {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");

  document.body.classList.remove("no-scroll");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  document.body.style.overflow = "";
};

// Обработка кнопок закрытия модального окна
document
  .getElementById("btn_close_modal")
  .addEventListener("click", closeModal);
document.getElementById("overlay").addEventListener("click", closeModal);

// Обработка закрытия модального окна клавишей Escape
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.getElementById("modal_window").classList.contains("hidden")
  ) {
    closeModal();
  }
});

//  // Список запрещенных слов
// const profanityList = ['xxx', 'viagra', 'bitch', 'slut', 'whore', 'cum', 'fuck', 'виагра', 'сучка', 'сука', 'хуй', 'тварь', 'потаскуха', 'блядина', 'шалава', 'трахать', 'трахал', 'трахаю', 'шлюха', 'сперма', 'блядь'];

// // Функция проверки спама
// function validateInput(input) {
//   if (/<|>/.test(input)) {
//     return false; // Наличие угловых скобок
//   }
//   for (let word of profanityList) {
//     if (input.toLowerCase().includes(word)) {
//       return false; // Наличие нецензурных слов
//     }
//   }
//   return true;
// }

// // Обработка кнопки отправки формы
// document.getElementById('questions__button').addEventListener('click', async function(event) {
//   event.preventDefault(); // Предотвращаем обычное поведение формы

//   const form = document.getElementById('questions__form');
//   const formData = new FormData(form);
//   const errorDiv = document.getElementById('errorQuestions');
//   const modalContent = document.getElementById('modal_window_content');
//   const overlay = document.getElementById('overlay');
//   const modalWindow = document.getElementById('modal_window');

//   // Получение значения из поля textarea
//   const userInput = formData.get('message');

//   // Проверка ввода на спам
//   if (!validateInput(userInput)) {
//     errorDiv.innerText = 'Форма содержит недопустимые слова или символы.';
//     return; // Прерываем выполнение функции
//   } else {
//     errorDiv.innerText = ''; // Очистить сообщения об ошибках
//   }

//   try {
//     const response = await fetch('https://formspree.io/f/xvgpvnov', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Форма была успешно отправлена.</p></div>';
//       form.reset(); // Очищаем поле textarea
//     } else {
//       modalContent.innerText = 'Произошла ошибка при отправке формы.';
//     }

//     // Показ модального окна
//     overlay.classList.remove('hidden');
//     modalWindow.classList.remove('hidden');
//   } catch (error) {
//     console.error('Ошибка:', error);
//     modalContent.innerText = 'Произошла ошибка при отправке формы.';
//     overlay.classList.remove('hidden');
//     modalWindow.classList.remove('hidden');
//   }
// });

// // Функции для открытия и закрытия модального окна
// const openModal = function(content) {
//   let modal = document.getElementById('modal_window');
//   let overlay = document.getElementById('overlay');
//   let modalContent = document.getElementById('modal_window_content');

//   document.body.classList.add('no-scroll');

//   modalContent.innerHTML = content;
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');

//   document.body.style.overflow = 'hidden';
// };

// const closeModal = function() {
//   let modal = document.getElementById('modal_window');
//   let overlay = document.getElementById('overlay');

//   document.body.classList.remove('no-scroll');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');

//   document.body.style.overflow = '';
// };

// // Обработка кнопок закрытия модального окна
// document.getElementById('btn_close_modal').addEventListener('click', closeModal);
// document.getElementById('overlay').addEventListener('click', closeModal);

// // Обработка закрытия модального окна клавишей Escape
// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Escape' && !document.getElementById('modal_window').classList.contains('hidden')) {
//     closeModal();
//   }
// });

//  //-----Анонимные вопросы-----
//   // Список запрещенных слов
// const profanityList = ['xxx', 'viagra', 'bitch', 'slut', 'whore', 'cum', 'fuck', 'виагра', 'сучка', 'сука', 'хуй', 'тварь', 'потаскуха', 'блядина', 'шалава', 'трахать', 'трахал', 'трахаю', 'шлюха', 'сперма', 'блядь'];

// // Функция проверки спама
// function validateInput(input) {
//   if (/<|>/.test(input)) {
//     return false; // Наличие угловых скобок
//   }
//   for (let word of profanityList) {
//     if (input.toLowerCase().includes(word)) {
//       return false; // Наличие нецензурных слов
//     }
//   }
//   return true;
// }

// // Обработка кнопки отправки формы
// document.getElementById('questions__button').addEventListener('click', async function(event) {
//   event.preventDefault(); // Предотвращаем обычное поведение формы

//   const form = document.getElementById('questions__form');
//   const formData = new FormData(form);
//   const modalContent = document.getElementById('modal_window_content');
//   const overlay = document.getElementById('overlay');
//   const modalWindow = document.getElementById('modal_window');

//   // Получение значения из поля textarea
//   const userInput = formData.get('message');

//   // Проверка ввода на спам
//   if (!validateInput(userInput)) {
//     modalContent.innerHTML = '<div class="modal-text"><p>Ошибка!</p><p>Форма содержит недопустимые слова или символы.</p></div>';
//     overlay.classList.remove('hidden');
//     modalWindow.classList.remove('hidden');
//     return; // Прерываем выполнение функции
//   }

//   try {
//     const response = await fetch('https://formspree.io/f/xvgpvnov', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Форма была успешно отправлена</p></div>';
//       form.reset(); // Очищаем поле textarea
//     } else {
//       modalContent.innerText = 'Произошла ошибка при отправке формы.';
//     }

//     // Показ модального окна
//     overlay.classList.remove('hidden');
//     modalWindow.classList.remove('hidden');
//   } catch (error) {
//     console.error('Ошибка:', error);
//     modalContent.innerText = 'Произошла ошибка при отправке формы.';
//     overlay.classList.remove('hidden');
//     modalWindow.classList.remove('hidden');
//   }
// });

// // Функции для открытия и закрытия модального окна
// const openModal = function(content) {
//   let modal = document.getElementById('modal_window');
//   let overlay = document.getElementById('overlay');
//   let modalContent = document.getElementById('modal_window_content');

//   document.body.classList.add('no-scroll');

//   modalContent.innerHTML = content;
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');

//   document.body.style.overflow = 'hidden';
// };

// const closeModal = function() {
//   let modal = document.getElementById('modal_window');
//   let overlay = document.getElementById('overlay');

//   document.body.classList.remove('no-scroll');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');

//   document.body.style.overflow = '';
// };

// // Обработка кнопок закрытия модального окна
// document.getElementById('btn_close_modal').addEventListener('click', closeModal);
// document.getElementById('overlay').addEventListener('click', closeModal);

// // Обработка закрытия модального окна клавишей Escape
// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Escape' && !document.getElementById('modal_window').classList.contains('hidden')) {
//     closeModal();
//   }
// });

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

const aboutVideoBlock = gsap.from(".about__video-block", {
  y: 30,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: ".about__video-block",
  start: "center 80%",
  onEnter: () => aboutVideoBlock.play(),
});

ScrollTrigger.create({
  trigger: ".about__video-block",
  start: "top bottom",
  onLeaveBack: () => aboutVideoBlock.pause(0),
});

const aboutTextBlock = gsap.from(".about__text-block", {
  y: 30,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: ".about__text-block",
  start: "center 80%",
  onEnter: () => aboutTextBlock.play(),
});

ScrollTrigger.create({
  trigger: ".about__text-block",
  start: "top bottom",
  onLeaveBack: () => aboutTextBlock.pause(0),
});

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

// const clientsCards = gsap.utils.toArray(".clients-card");
// clientsCards.forEach((picture) => {
//   const anim = gsap.from(picture, {
//     y: -20,
//     opacity: 0.5,
//     stagger: 0.2,
//   });

//   ScrollTrigger.create({
//     trigger: picture,
//     start: "top bottom",
//     onEnter: () => anim.play(),
//   });

//   ScrollTrigger.create({
//     trigger: picture,
//     start: "top bottom",
//     onLeaveBack: () => anim.pause(0),
//   });
// });

// gsap.from(".clients-card", {
//   scrollTrigger: {
//     trigger: ".clients-card",
//     // toggleActions: "restart pause resume pause",
//     toggleActions: "play",

//     // start: "top bottom",
//     // end: "bottom center",
//   },
//   duration: 1,
//   y: -60,
//   // opacity: 0,
//   stagger: 0.8,
// });

const clients = gsap.utils.toArray(".clients-card");

clients.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      toggleActions: "play",
    },
    y: -30,
    stagger: 0.8,
  });
});

const methods = gsap.utils.toArray(".methods-card");

methods.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 75%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
    y: 30,
    stagger: 0.8,
  });
});

// let animationFrameId;
// let currentAnimationIndex = 0;

// const animateCards = () => {
//   if (currentAnimationIndex >= methods.length) {
//     cancelAnimationFrame(animationFrameId);
//     return;
//   }

//   const card = methods[currentAnimationIndex];
//   gsap.from(card, {
//     scrollTrigger: {
//       trigger: card,
//       start: "top 75%",
//       end: "bottom top",
//       markers: true,
//     },
//     y: -30,
//   });

//   currentAnimationIndex++;
//   animationFrameId = requestAnimationFrame(animateCards);
// };

// animationFrameId = requestAnimationFrame(animateCards);

const benefits = gsap.utils.toArray(".methods-card");

benefits.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
    y: 30,
    stagger: 0.8,
  });
});

const faqBox = gsap.utils.toArray(".faq-box");
faqBox.forEach((box) => {
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

const words = gsap.from(".words__content", {
  y: 30,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: ".words__content",
  start: "top 75%",
  onEnter: () => words.play(),
});

ScrollTrigger.create({
  trigger: ".words__content",
  start: "top bottom",
  onLeaveBack: () => words.pause(0),
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
let activeLink = null;

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

  if (!nav.classList.contains("show") && activeLink) {
    activeLink.classList.remove("active");
    activeLink = null; // Сбросить activeLink после удаления класса
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

// const burger = document.querySelector(".header-burger");
// const overlay = document.querySelector(".header__overlay");
// const headerMenuLinks = document.querySelectorAll(".header__menu-link");
// let activeLink;

// document.addEventListener("DOMContentLoaded", function () {
//   burger.addEventListener("click", showHeaderMenu);
//   overlay.addEventListener("click", showHeaderMenu);
// });

// const showHeaderMenu = () => {
//   burger.classList.toggle("active");
//   overlay.classList.toggle("show");

//   const nav = document.querySelector(".header__nav");

//   nav.classList.toggle("show");
//   document.body.classList.toggle("lock");

//   if (!nav.classList.contains("show")) {
//     activeLink.classList.remove("active");
//   }
// };

// headerMenuLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     headerMenuLinks.forEach((otherLink) =>
//       otherLink.classList.remove("active")
//     );

//     link.classList.add("active");
//     activeLink = link;
//   });
// });

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
