import { openModal } from "./composables/modal.js";
import { modalContent } from "./composables/modal.js";
import { checkPrivacyPolicyConsent } from "./composables/privacy-policy.js";

const form = document.querySelector(".footer__form");
const inputSubscribe = document.querySelector(".footer__field");
const footerSendButton = document.querySelector(".footer__button");
const consentCheckbox = document.querySelector(".footer__checkbox");
const errorDiv = document.querySelector(".footer__errors");
const errorPolitics = document.querySelector(".footer__policy-error");

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
      modalContent.innerHTML =
        '<div class="modal-text"><p>Спасибо!</p><p>Вы успешно подписались на рассылку новостей.</p></div>';
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

inputSubscribe.addEventListener("input", function () {
  errorDiv.innerText = "";
});

consentCheckbox.addEventListener("change", function () {
  if (this.checked) {
    errorPolitics.innerText = "";
  }
});
