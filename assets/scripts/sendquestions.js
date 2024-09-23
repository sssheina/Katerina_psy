// Функция для проверки запрещенных слов
function validateInput(input) {
  const forbiddenWords = [
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
  ]; // запрещенные слова
  const regex = new RegExp(forbiddenWords.join("|"), "i");
  return !regex.test(input);
}

// Обработка отправки формы
document
  .querySelector(".questions__button")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const form = document.querySelector(".questions__form");
    const formData = new FormData(form);
    const modalContent = document.querySelector(".modal__content");
    const overlay = document.getElementById("overlay");
    const modalWindow = document.getElementById("modal_window");
    const errorDiv = document.querySelector(".questions__errors");
    const errorPolitics = document.querySelector(".questions__policy-error");
    const consentCheckbox = document.querySelector(".questions__checkbox");

    // Проверяем textarea
    const userInput = formData.get("message");
    if (!validateInput(userInput)) {
      errorDiv.innerHTML =
        "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
      errorPolitics.innerText = "";
      return;
    } else {
      errorDiv.innerHTML = "";
    }

    // Проверяем согласие с политикой
    if (!consentCheckbox.checked) {
      errorPolitics.innerText = "Прочтите и подтвердите согласие";
      return;
    } else {
      errorPolitics.innerText = "";
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
        form.reset();
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
    const errorDiv = document.querySelector(".questions__errors");
    errorDiv.innerHTML = "";
  });

// Очистка сообщения об ошибке при изменении состояния чекбокса
document
  .querySelector(".footer__checkbox")
  .addEventListener("change", function () {
    const errorPolitics = document.querySelector(".footer__error");
    if (this.checked) {
      errorPolitics.innerText = "";
    }
  });

// Функция для открытия модального окна с заданным контентом
const openModal = function (content) {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");
  let modalContent = document.querySelector(".modal__content");

  document.body.classList.add("no-scroll");

  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.body.style.overflow = "hidden";
};

// Функция для закрытия модального окна
const closeModal = function () {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");

  document.body.classList.remove("no-scroll");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  document.body.style.overflow = "";
};

// Обработка кнопок закрытия модального окна
document.querySelector(".button-close").addEventListener("click", closeModal);
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

document.querySelectorAll(".policy__link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const privacyPolicyContent = "";
    openModal(privacyPolicyContent);
  });
});
