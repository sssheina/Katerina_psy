document.addEventListener("DOMContentLoaded", () => {
  const faqData = [
    {
      question: "Как работает секс-терапия?",
      answer:
        "Секс-терапия работает с мыслями, эмоциями и действиями, помогает достичь гармоничных сексуальных отношений. Важно отметить, что секс-терапия - не медицинская помощь, это не заменяет консультацию эндокринолога, гинеколога или психиатра.",
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

  const faqContent = document.getElementById("faq-content");

  faqData.forEach((faq) => {
    const faqBox = document.createElement("div");
    faqBox.className = "faq-box faq__box";

    faqBox.innerHTML = `
      <div class="faq-box__question">
        <h4 class="faq-box__title h4-title">${faq.question}</h4>
        <svg class="faq-box__cross icon-cross">
          <use xlink:href="/assets/images/figures/sprite.svg#cross"></use>
        </svg>
      </div>
      <div class="faq-box__answer">
        <p class="faq-box__text paragraph-standard">${faq.answer}</p>
      </div>
    `;

    faqContent.appendChild(faqBox);
  });

  const toggleAnswer = (e) => {
    const faqBox = e.target.closest(".faq-box");
    if (!faqBox) return;

    const answer = faqBox.querySelector(".faq-box__answer");

    faqBox.classList.toggle("active");
    answer.style.maxHeight = faqBox.classList.contains("active")
      ? answer.scrollHeight + "px"
      : 0;
  };

  const faqBoxes = document.querySelectorAll(".faq-box");
  faqBoxes.forEach((box) => {
    box.addEventListener("click", toggleAnswer);
  });

  // to manage cross icon separately
  const crossIcons = document.querySelectorAll(".faq-box__cross");
  crossIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAnswer(e);
    });
  });
});
