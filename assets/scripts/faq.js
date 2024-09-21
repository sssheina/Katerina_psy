import {
  dropdown,
  changeLanguage,
  loadLanguage,
} from "./composables/language.js";

const faqDataRu = [
  {
    question: "Как работает секс-терапия?",
    answer:
      "Секс-терапия работает с мыслями, эмоциями и действиями, помогает достичь гармоничных сексуальных отношений. Важно отметить, что секс-терапия - не медицинская помощь, это не заменяет консультацию эндокринолога, гинеколога или психиатра.",
  },
  {
    question: "Где вы получали образование?",
    answer:
      "Я обучалась секс-терапии в школе Психодемия (резидент “Сколково” на базе Национального Исследовательского Университета Высшей Школы Экономики в Москве), в объеме более 1600 часов. Там же проходила специализированные курсы по ACT и психологической помощи при травме насилия. Базовую сертификацию по ЭФТ для пар я получала при Международном Центре Передового Опыта в Области Эмоционально-Ориентированной Терапии (ICEEFT) во Франции.",
  },
  {
    question: "Сколько сессий нужно для результата и как часто?",
    answer:
      "Количество сессий и их частота зависят от ваших потребностей и целей. Это может быть несколько сеансов или несколько месяцев со встречами раз в неделю или раз в две недели. Мы подберем график, который подходит именно вам.",
  },
  {
    question: "Конфиденциальны ли эти консультации?",
    answer:
      "Да, все консультации проводятся строго конфиденциально. Ваши личные данные и содержание сессий будут защищены и не будут разглашаться, за исключением случаев, когда это требуется законом или существует потенциальная угроза вашей безопасности или безопасности других.",
  },
  {
    question: "Какие есть условия и способы оплаты? А переноса сессии?",
    answer:
      "Перенос или отмена сессии — бесплатно, если уведомите об этом не позднее, чем за 24 часа до начала. В таком случае оплаченная сумма сохранится для следующей консультации. Отмена сессии менее, чем за сутки — стоимость консультации не возвращается. Оплата принимается через банковский перевод в евро или с помощью приложения PayPal. Если у вас возникли вопросы или трудности, не стесняйтесь связаться со мной.",
  },
  {
    question: "Как понять, когда записаться индивидуально, а когда вместе?",
    answer:
      "Если проблемы касаются секса, общения или отношений, которые затрагивают всех в союзе, совместная консультация будет логичным выбором. Если вопросы скорее личные и требуют отдельного внимания, то индивидуальная сессия будет предпочтительнее. Если у вас есть сомнения, обсудите это со мной.",
  },
  {
    question: "Не нашли ответ на ваш вопрос?",
    answer:
      'Если у вас остались вопросы, просто напишите мне на электронную почту <a href="mailto:kat.tartary@gmail.com" target="_blank" class="faq-box__link link">kat.tartary@gmail.com</a> или найдите меня в Telegram: <a href="https://t.me/Sartari" target="_blank" class="faq-box__link">@Sartari</a> / WhatsApp <a href="https://wa.me/+33646811834" target="_blank" class="faq-box__link">+33 6 46 81 18 34</a>',
  },
];

const faqDataEn = [
  {
    question: "How does sex therapy work?",
    answer:
      "Sex therapy works with thoughts, emotions and behaviour and helps to achieve harmonious sexual relationships. It is important to note that sex therapy is not medical assistance and does not replace consultation with an endocrinologist, gynecologist or psychiatrist.",
  },
  {
    question: "Where did you study??",
    answer:
      "I studied sex therapy at the Psychodemia school (Skolkovo resident at the National Research University of Higher School of Economics in Moscow), more than 1600 academic hours. There I also took specialized courses in ACT and psychological help for trauma of violence. I received my basic certification in EFT for couples from the International Center of Excellence in Emotionally Focused Therapy (ICEEFT) in France.",
  },
  {
    question: "How many sessions and how often are needed to achieve results?",
    answer:
      "The number of sessions and their frequency depend on your needs and goals. This could be several sessions or several months with weekly or biweekly meetings. We will select a schedule that suits you to achieve desired results.",
  },
  {
    question: "Are these sessions confidential?",
    answer:
      "Yes, all consultations are strictly confidential. Your personal data and session content will be protected and will not be disclosed unless required by law or there is a potential threat to your safety or the safety of others",
  },
  {
    question: "What are the terms of session payment and rescheduling?",
    answer:
      "Rescheduling or cancelling a session is free if you notify me no later than 24 hours before the start. In this case, the paid amount will be saved for the next consultation. If cancelling a session less than 24 hours in advance, the cost of the consultation is not refundable. Payment is accepted via bank transfer in Euros or using the PayPal app. If you have any questions or difficulties, feel free to contact me.",
  },
  {
    question: "How to chose between individual and group therapy?",
    answer:
      "If the issues regarding sex, communication, or relationships affect everyone in the union, joint counselling is a logical choice. If the issues are rather personal and require special attention, then an individual session will be preferable. If you have any doubts, discuss it with me.",
  },
  {
    question: "Didn't find the answer to your question?",
    answer:
      'If you have any questions, just email me at <a href="mailto:kat.tartary@gmail.com" target="_blank" class="faq-box__link link">kat.tartary@gmail.com</a> or find me in Telegram: <a href="https://t.me/Sartari" target="_blank" class="faq-box__link">@Sartari</a> / WhatsApp <a href="https://wa.me/+33646811834" target="_blank" class="faq-box__link">+33 6 46 81 18 34</a>',
  },
];

const faqDataFr = [
  {
    question: "Comment fonctionne la sexothérapie?",
    answer:
      "La sexothérapie travaille avec les pensées, les émotions et les actions et aide à établir des relations sexuelles harmonieuses. Il est important de noter que la sexothérapie n’est pas une assistance médicale et ne remplace pas la consultation d'un endocrinologue, d'un gynécologue ou d'un psychiatre.",
  },
  {
    question: "Où avez-vous reçu votre éducation?",
    answer:
      "J'ai étudié la sexothérapie à l'école Psychodemia (résident de Skolkovo à l'Université Nationale de Recherche de l'École Supérieure d'Economie de Moscou), plus de 1 600 heures academiques. Là, j’ai également suivi des cours spécialisés en ACT et en assistance psychologique pour les traumatismes liés à la violence. J'ai reçu ma certification de base en EFT pour couples par le Centre International d'Excellence en Thérapie Centrée sur l’Émotions (ICEEFT) en France.",
  },
  {
    question:
      "Quelle est la durée et la fréquence de sessions pour avoir des résultats?",
    answer:
      "Le nombre de sessions et leur fréquence dépendent de vos besoins et de vos objectifs. Cela peut prendre plusieurs plusieurs mois avec des réunions hebdomadaires ou bihebdomadaires. Nous sélectionnerons un horaire qui vous convient.",
  },
  {
    question: "Ces consultations sont-elles confidentielles?",
    answer:
      "Oui, toutes les consultations sont strictement confidentielles. Vos données personnelles et le contenu de votre session seront protégés et ne seront pas divulgués sauf si la loi l'exige ou s'il existe une menace potentielle pour votre sécurité ou celle d'autrui.",
  },
  {
    question: "Quelles sont les modalités de paiement et de reprogrammation?",
    answer:
      "La reprogrammation ou l'annulation d'une session est gratuite si vous me prévenez au plus tard 24 heures avant le début. Dans ce cas, le montant payé sera conservé pour la prochaine consultation. Si l’annulation ou reprogrammation arrivent moins de 24 heures avant le début de la sessions, le coût de la consultation n'est pas remboursable. Le paiement est accepté par virement bancaire en euros ou via l'application PayPal. Si vous avez des questions ou des difficultés, n'hésitez pas à me contacter.",
  },
  {
    question: "Comment choisir entre une thérapie individuelle ou de groupe?",
    answer:
      "Si les problèmes concernant le sexe, la communication ou les relations affectent tous les membres d’une union ou un groupe, de faire une sessions toustes ensemble est un choix logique. Si les problématiques sont plutôt personnelles, alors une séance individuelle sera préférable. Si vous avez des doutes, parlez-en avec moi.",
  },
  {
    question: "Vous n'avez pas trouvé la réponse à votre question?",
    answer:
      'Si vous avez des questions, envoyez-moi simplement un e-mail <a href="mailto:kat.tartary@gmail.com" target="_blank" class="faq-box__link link">kat.tartary@gmail.com</a> ou contactez-moi via Telegram: <a href="https://t.me/Sartari" target="_blank" class="faq-box__link">@Sartari</a> / WhatsApp <a href="https://wa.me/+33646811834" target="_blank" class="faq-box__link">+33 6 46 81 18 34</a>',
  },
];

const faqDataMap = {
  RU: {
    data: faqDataRu,
    buttonText: "Запись на сессию",
  },
  EN: {
    data: faqDataEn,
    buttonText: "Let’s talk!",
  },
  FR: {
    data: faqDataFr,
    buttonText: "Inscription",
  },
};

const toggleAnswer = (e) => {
  const faqBox = e.target.closest(".faq-box");

  if (!faqBox) return;

  const answer = faqBox.querySelector(".faq-box__answer");

  faqBox.classList.toggle("active");
  answer.style.maxHeight = faqBox.classList.contains("active")
    ? answer.scrollHeight + "px"
    : 0;
};

const updateFaqSection = (language) => {
  const faqContent = document.querySelector(".faq__content");
  const button = document.querySelector(".faq__button");

  faqContent.innerHTML = "";
  button.textContent = faqDataMap[language].buttonText;

  faqDataMap[language].data.forEach((faq) => {
    const { question, answer } = faq;

    const faqBox = document.createElement("div");
    faqBox.className = "faq-box faq__box";
    faqBox.addEventListener("click", toggleAnswer);

    faqBox.innerHTML = `
      <div class="faq-box__question">
        <h4 class="faq-box__title h4-title">${question}</h4>
        <svg class="faq-box__cross icon-cross">
          <use xlink:href="/assets/images/figures/sprite.svg#cross"></use>
        </svg>
      </div>
      <div class="faq-box__answer">
        <p class="faq-box__text paragraph-standard">${answer}</p>
      </div>
    `;

    faqContent.appendChild(faqBox);
  });
};

loadLanguage(updateFaqSection);
dropdown.addEventListener("change", changeLanguage(updateFaqSection));
