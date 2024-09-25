import { openModal } from "./modal.js";

document.querySelectorAll(".policy__link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    openModal();
  });
});

export const checkPrivacyPolicyConsent = (consentCheckbox, errorPolitics) => {
  if (!consentCheckbox.checked) {
    errorPolitics.innerText = "Прочтите и подтвердите согласие";
    return false;
  } else {
    errorPolitics.innerText = "";
    return true;
  }
};
