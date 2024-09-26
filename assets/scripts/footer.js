import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const footerDataMap = {
  RU: {
    logoText: "Онлайн-консультации <br> секс-терапевта <br> Катерины Тартари",
    consent: "Cогласие с",
    consentLink: "Политикой конфиденциальности",
    subscribe: "Подпишитесь на новости",
    contacts: "Контакты",
  },
  EN: {
    logoText:
      "Online consultations <br> with sex & relationship therapist <br> Katerina Tartary",
    consent: "agreement",
    consentLink: "Privacy policy",
    subscribe: "Subscribe to the news",
    contacts: "Contacts",
  },
  FR: {
    logoText:
      "Les consultations <br> en ligne de sexothérapeute et consultante en relations <br> Katerina Tartary",
    consent: "Consentement à",
    consentLink: "la politique de confidentialité",
    subscribe: "S'inscrire aux nouvelles",
    contacts: "Contacts",
  },
};

const updateFooterContent = (language) => {
  const content = footerDataMap[language] || footerDataMap.EN;

  const consent = document.querySelector(".footer__consent-text");
  const consentLink = document.querySelector(".footer__consent-link");
  const logoText = document.querySelector(".footer__logo-text");
  const subscribeTitle = document.querySelector(".footer__subscribe-title");
  const contactsTitle = document.querySelector(".footer__contacts-title");

  consent.textContent = content.consent;
  consentLink.textContent = content.consentLink;
  logoText.innerHTML = content.logoText;
  subscribeTitle.textContent = content.subscribe;
  contactsTitle.textContent = content.contacts;
};

loadLanguage(updateFooterContent);
dropdown.addEventListener("change", changeLanguage(updateFooterContent));
