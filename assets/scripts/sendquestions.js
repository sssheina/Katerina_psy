import { openModal } from "./composables/modal.js";
import { modalContent } from "./composables/modal.js";
import { checkPrivacyPolicyConsent } from "./composables/privacy-policy.js";

const form = document.querySelector(".questions__form");
const sendButton = document.querySelector(".questions__button");
const questionsComment = document.querySelector(".questions__comment");
const consentCheckbox = document.querySelector(".questions__checkbox");
const errorDiv = document.querySelector(".questions__errors");
const errorPolitics = document.querySelector(".questions__policy-error");

const validateInput = (input) => {
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
  ];
  const regex = new RegExp(forbiddenWords.join("|"), "i");
  return !regex.test(input);
};

const checkMessageField = (userInput) => {
  console.log("userInput", userInput);

  if (!validateInput(userInput)) {
    errorDiv.innerHTML =
      "<p>Сообщение содержит недопустимые слова или символы.</p>";
    errorPolitics.innerText = "";
    return false;
  } else if (!userInput) {
    errorDiv.innerHTML = "<p>Сообщение не может быть пустым.</p>";
    errorPolitics.innerText = "";
    return false;
  } else {
    errorDiv.innerHTML = "";
    return true;
  }
};

sendButton.addEventListener("click", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const userInput = formData.get("message");

  if (!checkPrivacyPolicyConsent(consentCheckbox, errorPolitics)) {
    return;
  }

  if (!checkMessageField(userInput)) {
    return;
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

    openModal();
  } catch (error) {
    console.error("Ошибка:", error);
    modalContent.innerText = "Произошла ошибка при отправке формы.";
    openModal();
  }
});

questionsComment.addEventListener("input", function () {
  errorDiv.innerHTML = "";
});

consentCheckbox.addEventListener("change", function () {
  if (this.checked) {
    errorPolitics.innerText = "";
  }
});
