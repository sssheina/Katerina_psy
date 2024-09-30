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
    placeholder: "Ваш e-mail",
    author: "&copy; 2024 Therapeutic Journeys.&nbsp; <br> Все права защищены.",
    developed: "Разработано",
  },
  EN: {
    logoText:
      "Online consultations <br> with sex & relationship therapist <br> Katerina Tartary",
    consent: "agreement",
    consentLink: "Privacy policy",
    subscribe: "Subscribe to the news",
    contacts: "Contacts",
    placeholder: "Your e-mail",
    author: "&copy; 2024 Therapeutic Journeys.&nbsp; <br> All rights reserved",
    developed: "Created by",
  },
  FR: {
    logoText:
      "Les consultations <br> en ligne de sexothérapeute et consultante en relations <br> Katerina Tartary",
    consent: "Consentement à",
    consentLink: "la politique de confidentialité",
    subscribe: "S'inscrire aux nouvelles",
    contacts: "Contacts",
    placeholder: "Votre e-mail",
    author:
      "&copy; 2024 Therapeutic Journeys.&nbsp; <br> Tous les droits réservés",
    developed: "Développé par",
  },
};

const updateFooterContent = (language) => {
  const content = footerDataMap[language] || footerDataMap.EN;

  const inputSubscribe = document.querySelector(".footer__field");
  const consent = document.querySelector(".footer__consent-text");
  const consentLink = document.querySelector(".footer__consent-link");
  const logoText = document.querySelector(".footer__logo-text");
  const subscribeTitle = document.querySelector(".footer__subscribe-title");
  const contactsTitle = document.querySelector(".footer__contacts-title");
  const author = document.querySelector(".footer__copyright.author");
  const developed = document.querySelector(".footer__developed");

  inputSubscribe.placeholder = content.placeholder;
  consent.textContent = content.consent;
  consentLink.textContent = content.consentLink;
  logoText.innerHTML = content.logoText;
  subscribeTitle.textContent = content.subscribe;
  contactsTitle.textContent = content.contacts;
  author.innerHTML = content.author;
  developed.textContent = content.developed;
};

loadLanguage(updateFooterContent);
dropdown.addEventListener("change", changeLanguage(updateFooterContent));
