// Функция для проверки email
function validateRegFormEmail(needShowMessages) {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  let result = true;
  let el = document.getElementById("subscribe");
  let elError = document.getElementById("errorEmail");

  if (el.value === null || el.value === "") {
    result = false;
    if (needShowMessages) {
      elError.innerText = "Email не может быть пустым";
    }
  } else if (!re.test(el.value)) {
    result = false;
    if (needShowMessages) {
      elError.innerText = "Неправильный адрес электронной почты";
    }
  } else {
    if (needShowMessages) {
      elError.innerText = "";
    }
  }

  return result;
}

// Обработка кнопки отправки формы подписки
document
  .querySelector(".footer__form button")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Предотвращаем обычное поведение формы

    const form = document.querySelector(".footer__form");
    const formData = new FormData(form);
    const modalContent = document.getElementById("modal_window_content");
    const overlay = document.getElementById("overlay");
    const modalWindow = document.getElementById("modal_window");

    // Проверка валидности email
    if (!validateRegFormEmail(true)) {
      // Если email невалиден, прерываем выполнение функции
      return;
    }

    // Проверка согласия с политикой
    const consentCheckbox = document.getElementById("consentCheckbox");
    const errorPolitics = document.getElementById("errorPolitics");

    if (!consentCheckbox.checked) {
      errorPolitics.innerText = "Прочтите и подтвердите согласие";
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xblrpeez", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        modalContent.innerHTML =
          '<div class="modal-text"><p>Спасибо!</p><p>Вы успешно подписались на рассылку новостей.</p></div>';
        form.reset(); // Очищаем поле email
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

// Очистка сообщения об ошибке при изменении значения в поле email
document.getElementById("subscribe").addEventListener("input", function () {
  const errorDiv = document.getElementById("errorEmail");
  errorDiv.innerText = ""; // Очистка сообщения об ошибке при вводе текста
});

// Очистка сообщения об ошибке при изменении состояния чекбокса
document
  .querySelector(".footer__checkbox")
  .addEventListener("change", function () {
    const errorPolitics = document.querySelector(".footer__error");
    if (this.checked) {
      errorPolitics.innerText = ""; // Очистка сообщения об ошибке
    }
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
