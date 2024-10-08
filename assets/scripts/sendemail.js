import { openModal } from "./composables/modal.js";
import { modalContent } from "./composables/modal.js";
import { checkPrivacyPolicyConsent } from "./composables/privacy-policy.js";
import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

let thanksMessage, errorMessage;
const form = document.querySelector(".footer__form");
const inputSubscribe = document.querySelector(".footer__field");
const footerSendButton = document.querySelector(".footer__button");
const consentCheckbox = document.querySelector(".footer__checkbox");
const errorDiv = document.querySelector(".footer__errors");
const errorPolitics = document.querySelector(".footer__policy-error");

const modalMessageMap = {
  RU: {
    thanksTitle: "Спасибо!",
    thanksText: "Вы успешно подписались на рассылку новостей",
    errorTitle: "Ошибка",
    errorText: "Произошла ошибка при отправке формы",
  },
  EN: {
    thanksTitle: "Thank you!",
    thanksText: "You have successfully subscribed to the newsletter",
    errorTitle: "Error",
    errorText: "An error occurred while submitting the form",
  },
  FR: {
    thanksTitle: "Merci !",
    thanksText: "Vous vous êtes inscrit avec succès à la lettre d'information",
    errorTitle: "Erreur",
    errorText: "Une erreur s'est produite lors de l'envoi du formulaire",
  },
};

const validateRegFormEmail = (needShowMessages) => {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  let result = true;

  if (!inputSubscribe.value) {
    result = false;
    if (needShowMessages) {
      errorDiv.innerText = "Email не может быть пустым";
    }
  } else if (!re.test(inputSubscribe.value)) {
    result = false;
    if (needShowMessages) {
      errorDiv.innerText = "Неправильный адрес электронной почты";
    }
  } else {
    if (needShowMessages) {
      errorDiv.innerText = "";
    }
  }

  return result;
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

footerSendButton.addEventListener("click", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  if (!checkPrivacyPolicyConsent(consentCheckbox, errorPolitics)) {
    return;
  }

  if (!validateRegFormEmail(true)) {
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

inputSubscribe.addEventListener("input", function () {
  errorDiv.innerText = "";
});

consentCheckbox.addEventListener("change", function () {
  if (this.checked) {
    errorPolitics.innerText = "";
  }
});
