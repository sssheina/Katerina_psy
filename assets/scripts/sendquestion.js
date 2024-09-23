/////////////////////////////////////////////////
//
// sendquestion.js
//
// Sending anonymous questions to the server (te be sent by email)
//

window.addEventListener("load", initSendQuestion);

function initSendQuestion() {
  let el = document.querySelector(".questions__button");
  el.addEventListener("click", submitForm);
  el.disabled = false;

  document.querySelector(".button-close").addEventListener("click", closeModal);
  document.getElementById("overlay").addEventListener("click", closeModal);
  document
    .getElementById("modal_window")
    .addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
}

async function submitForm() {
  try {
    // Validating the form
    //if (!validateRegForm(true)) {
    if (false) {
      openModal(REG_FORM_VALIDATION_MESSAGE_GENERAL);
      return;
    }

    // Check for profanity
    /*
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    if (
      !validateInput(userName) ||
      !validateInput(email) ||
      !validateInput(comment)
    ) {
      openModal(REG_FORM_VALIDATION_MESSAGE_PROFANITY);
      return;
    }*/

    // Формируем запрос
    const response = await fetch("send.php", {
      method: "POST",
      body: new FormData(questions__form),
    });
    // проверяем, что ответ есть
    if (!response.ok)
      throw (
        REG_FORM_RESPONSE_MESSAGE_SERVER_ERROR +
        `${response.status}` +
        REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV
      );
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw (
        REG_FORM_RESPONSE_MESSAGE_WRONG_DATA_TYPE +
        REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV
      );
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {
      // в случае успеха
      openModal("Thanks!");
      clearFormFields();
    } else {
      // в случае ошибки
      console.log(json);
      throw (
        REG_FORM_RESPONSE_MESSAGE_SERVER_INTERNAL_ERROR +
        json.info +
        REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV
      );
    }
  } catch (error) {
    // обработка ошибки
    openModal(error);
  }
}

const openModal = function (content) {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");
  // let modalContent = document.querySelector(".modal__content");
  document.body.classList.add("no-scroll");

  // modalContent.innerHTML = content;
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
