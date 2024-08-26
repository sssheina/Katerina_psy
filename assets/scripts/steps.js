document.addEventListener("DOMContentLoaded", () => {
  const stepsData = [
    {
      number: "01",
      subtitle: "Запись",
      text: `Выберите в календаре консультаций удобное время для первой бесплатной 30-минутной сессии`,
    },
    {
      number: "02",
      subtitle: "Подтверждение",
      text: `На вашу электронную почту придет письмо с датой консультации и ссылкой Google Meet — подтвердите участие и внесите в свой календарь. Второе письмо — с документом об информированном согласии на консультацию`,
    },
    {
      number: "03",
      subtitle: "Первая сессия",
      text: `Перейдите по ссылке Google Meet из письма с приглашением или из вашего календаря. Если вы потеряли ссылку, напишите мне в WhatsApp или Telegram`,
    },
    {
      number: "04",
      subtitle: "Последующие сессии",
      text: `Мы проведем столько сеансов, сколько вам потребуется. Информация о способах оплаты присылается в отдельном письме. Оплата сессии — не позднее 24 часов до начала. Полная сессия длится 50 - 70 минут`,
    },
  ];

  const stepTemplate = document.getElementById("step-template").content;
  const stepsContainer = document.querySelector(".steps__items");

  stepsData.forEach((step) => {
    const stepClone = document.importNode(stepTemplate, true);
    stepClone.querySelector(".steps__number").textContent = step.number;
    stepClone.querySelector(".steps__subtitle").textContent = step.subtitle;
    stepClone.querySelector(".steps__text").textContent = step.text;
    stepsContainer.appendChild(stepClone);
  });
});
