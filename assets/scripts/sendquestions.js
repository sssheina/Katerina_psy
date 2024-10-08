import { openModal } from "./composables/modal.js";
import { modalContent } from "./composables/modal.js";
import { checkPrivacyPolicyConsent } from "./composables/privacy-policy.js";
import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

let thanksMessage, errorMessage;
const form = document.querySelector(".questions__form");
const sendButton = document.querySelector(".questions__button");
const questionsComment = document.querySelector(".questions__comment");
const consentCheckbox = document.querySelector(".questions__checkbox");
const errorDiv = document.querySelector(".questions__errors");
const errorPolitics = document.querySelector(".questions__policy-error");

const modalMessageMap = {
  RU: {
    thanksTitle: "Спасибо!",
    thanksText: "Сообщение было успешно отправлено",
    errorTitle: "Ошибка",
    errorText: "Произошла ошибка при отправке формы",
  },
  EN: {
    thanksTitle: "Thank you!",
    thanksText: "Message was successfully sent",
    errorTitle: "Error",
    errorText: "An error occurred while submitting the form",
  },
  FR: {
    thanksTitle: "Merci !",
    thanksText: "Le message a été envoyé avec succès",
    errorTitle: "Erreur",
    errorText: "Une erreur s'est produite lors de l'envoi du formulaire",
  },
};

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

const updateModalContent = (language) => {
  const content = modalMessageMap[language] || modalMessageMap.EN;

  thanksMessage = `<div class="modal-content__small">
  <h4 class="h4-title text-center">${content.thanksTitle}</h4>
  <svg class="modal-content__icon icon-success">
    <use xlink:href="/assets/images/figures/sprite.svg#success"></use>
  </svg>
  <p class="paragraph-standard text-center">${content.thanksText}</p>
  </div> `;

  errorMessage = `<div class="modal-content__small">
  <h4 class="h4-title text-center">${content.errorTitle}</h4>
  <svg class="modal-content__icon icon-error">
    <use xlink:href="/assets/images/figures/sprite.svg#error"></use>
  </svg>
  <p class="paragraph-standard text-center">${content.errorText}</p>
  </div>
  `;
};

loadLanguage(updateModalContent);
dropdown.addEventListener("change", changeLanguage(updateModalContent));

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
      modalContent.innerHTML = thanksMessage;

      form.reset();
    } else {
      console.error("Unknown error occured");
      modalContent.innerHTML = errorMessage;
    }

    openModal();
  } catch (error) {
    console.error("Error:", error);
    modalContent.innerHTML = errorMessage;

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
