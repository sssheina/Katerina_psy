import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const footerDataMap = {
  RU: {
    consent: "Cогласие с",
    consentLink: "Политикой конфиденциальности",
  },
  EN: {
    consent: "agreement",
    consentLink: "Privacy policy",
  },
  FR: {
    consent: "Consentement à",
    consentLink: "la politique de confidentialité",
  },
};

const updateFooterContent = (language) => {
  const content = footerDataMap[language] || footerDataMap.EN;

  const consent = document.querySelector(".footer__consent-text");
  const consentLink = document.querySelector(".footer__consent-link");
  consent.textContent = content.consent;
  consentLink.textContent = content.consentLink;
};

loadLanguage(updateFooterContent);
dropdown.addEventListener("change", changeLanguage(updateFooterContent));
