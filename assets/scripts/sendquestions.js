// Функция для проверки запрещенных слов
function validateInput(input) {
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
  ]; // запрещенные слова
  const regex = new RegExp(forbiddenWords.join("|"), "i");
  return !regex.test(input);
}

// Обработка отправки формы
document
  .querySelector(".questions__button")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const form = document.querySelector(".questions__form");
    const formData = new FormData(form);
    const modalContent = document.getElementById("modal_window_content");
    const overlay = document.getElementById("overlay");
    const modalWindow = document.getElementById("modal_window");
    const errorDiv = document.querySelector(".questions__errors");
    const errorPolitics = document.querySelector(".questions__policy-error");
    const consentCheckbox = document.querySelector(".questions__checkbox");

    // Проверяем textarea
    const userInput = formData.get("message");
    if (!validateInput(userInput)) {
      errorDiv.innerHTML =
        "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
      errorPolitics.innerText = "";
      return;
    } else {
      errorDiv.innerHTML = "";
    }

    // Проверяем согласие с политикой
    if (!consentCheckbox.checked) {
      errorPolitics.innerText = "Прочтите и подтвердите согласие";
      return;
    } else {
      errorPolitics.innerText = "";
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
        modalContent.innerHTML =
          '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
        form.reset();
      } else {
        modalContent.innerText = "Произошла ошибка при отправке формы.";
      }

      // Показ модального окна
      overlay.classList.remove("hidden");
      modalWindow.classList.remove("hidden");
    } catch (error) {
      console.error("Ошибка:", error);
      modalContent.innerText = "Произошла ошибка при отправке формы.";
      overlay.classList.remove("hidden");
      modalWindow.classList.remove("hidden");
    }
  });

// Очистка сообщения об ошибке при изменении значения в textarea
document
  .querySelector(".questions__comment")
  .addEventListener("input", function () {
    const errorDiv = document.querySelector(".questions__errors");
    errorDiv.innerHTML = "";
  });

// Очистка сообщения об ошибке при изменении состояния чекбокса
document
  .querySelector(".footer__checkbox")
  .addEventListener("change", function () {
    const errorPolitics = document.querySelector(".footer__error");
    if (this.checked) {
      errorPolitics.innerText = "";
    }
  });

// Функция для открытия модального окна с заданным контентом
const openModal = function (content) {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");
  let modalContent = document.getElementById("modal_window_content");

  document.body.classList.add("no-scroll");

  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.body.style.overflow = "hidden";
};

// Функция для закрытия модального окна
const closeModal = function () {
  let modal = document.getElementById("modal_window");
  let overlay = document.getElementById("overlay");

  document.body.classList.remove("no-scroll");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  document.body.style.overflow = "";
};

// Обработка кнопок закрытия модального окна
document
  .getElementById("btn_close_modal")
  .addEventListener("click", closeModal);
document.getElementById("overlay").addEventListener("click", closeModal);

// Обработка закрытия модального окна клавишей Escape
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.getElementById("modal_window").classList.contains("hidden")
  ) {
    closeModal();
  }
});

// Обработка всех ссылок для открытия модального окна
document.querySelectorAll(".policy__link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Контент модального окна для Политики конфиденциальности
    const privacyPolicyContent = `
            <h2>Политика конфиденциальности</h2>
            <p>Мы уважаем конфиденциальность ваших данных и стремимся обеспечить их защиту в соответствии с Общим регламентом по защите данных (GDPR) и другими применимыми законами. 
    Данная Политика конфиденциальности объясняет, какие данные мы собираем, как мы их используем и как мы защищаем вашу информацию.</p>
    <p>1. <strong>Оператор данных</strong><br>
    Оператором данных является:<br>
    [Название вашей компании/ИП]<br>
    Контактная информация: [Ваш email]</p>

    <p>2. <strong>Какие данные мы собираем</strong><br>
    Мы собираем следующие данные:</p>
    <ul>
        <li><strong>Электронная почта</strong> — для отправки новостных и рекламных рассылок. Мы запрашиваем вашу электронную почту только с вашего согласия.</li>
        <li><strong>Анонимные вопросы</strong> — данные, которые не содержат имени или другой идентифицирующей информации, но могут быть использованы для анализа и улучшения наших услуг.</li>
        <li><strong>Данные аналитики</strong> — с помощью сервисов Google Analytics и Яндекс Метрики мы собираем информацию о посещении сайта, такую как:
            <ul>
                <li>IP-адрес;</li>
                <li>Тип устройства;</li>
                <li>Геолокация (обезличенная);</li>
                <li>Поведение на сайте (просмотры страниц, клики и т.д.).</li>
            </ul>
        </li>
    </ul>

    <p>3. <strong>Как мы используем ваши данные</strong><br>
    Мы используем собранные данные для следующих целей:
    <ul>
        <li><strong>Отправка информационных рассылок</strong>. С вашего согласия, мы используем ваш email для отправки новостей, акций и другой информации, связанной с нашими услугами.</li>
        <li><strong>Ответы на анонимные вопросы</strong>. Мы анализируем анонимные вопросы, чтобы улучшить наши услуги и отвечать на запросы пользователей.</li>
        <li><strong>Анализ и улучшение работы сайта</strong>. Сервисы аналитики (Google Analytics и Яндекс Метрика) позволяют нам собирать статистику о посещениях сайта, чтобы оптимизировать наш контент и улучшить пользовательский опыт.</li>
    </ul></p>

    <p>4. <strong>Передача данных третьим лицам</strong><br>
    Мы не передаем ваши персональные данные третьим лицам за исключением случаев, когда это необходимо для использования сторонних сервисов:
    <ul>
        <li><strong>Google Analytics и Яндекс Метрика</strong>. Эти сервисы могут получать обезличенные данные для анализа трафика на нашем сайте. Ваши данные передаются только таким сервисам, которые соответствуют требованиям GDPR.</li>
        <li><strong>Formspree.io</strong>. Мы используем сервис Formspree.io для обработки и отправки данных из форм на наш email. Formspree.io может получать данные, которые вы вводите в наши формы, чтобы передать их на указанный адрес электронной почты. Формы и данные, отправленные через Formspree.io, обрабатываются в соответствии с их Политикой конфиденциальности.</li>
    </ul></p>

    <p>5. <strong>Файлы cookie</strong><br>
    Мы используем файлы cookie для улучшения работы сайта и предоставления вам персонализированного контента. Файлы cookie позволяют нам:
    <ul>
        <li>Анализировать поведение пользователей на сайте;</li>
        <li>Улучшать структуру и содержание сайта;</li>
        <li>Соблюдать законные требования (например, показывать уведомления о файлах cookie).</li>
    </ul>
    Вы можете управлять настройками cookie в своем браузере и отказаться от их использования.</p>

    <p>6. <strong>Правовые основания для обработки данных</strong><br>
    Мы обрабатываем ваши персональные данные на следующих законных основаниях:
    <ul>
        <li><strong>Ваше согласие</strong> — для рассылки новостей и обработки данных аналитики;</li>
        <li><strong>Законный интерес</strong> — для анализа трафика и улучшения работы сайта.</li>
    </ul></p>

    <p>7. <strong>Как долго мы храним ваши данные</strong><br>
    Мы храним ваши данные до тех пор, пока это необходимо для целей, указанных в данной Политике конфиденциальности, или до тех пор, пока вы не отзовете свое согласие на обработку.</p>

    <p>8. <strong>Защита ваших данных</strong><br>
    Мы принимаем все разумные меры для защиты ваших данных от несанкционированного доступа, изменения, разглашения или уничтожения. Мы используем безопасные серверы и протоколы для передачи данных.</p>

    <p>9. <strong>Ваши права в соответствии с GDPR</strong><br>
    В соответствии с GDPR у вас есть следующие права:
    <ul>
        <li><strong>Право на доступ к вашим данным</strong> — вы можете запросить информацию о том, какие данные мы собираем и как они обрабатываются.</li>
        <li><strong>Право на исправление данных</strong> — вы можете потребовать исправления ваших данных, если они неточные или неполные.</li>
        <li><strong>Право на удаление данных ("право быть забытым")</strong> — вы можете потребовать удаления ваших персональных данных. Обратите внимание, что обезличенные данные, собранные через Google Analytics и Яндекс Метрику, не могут быть удалены, так как они не могут быть связаны с вашей личностью.</li>
        <li><strong>Право на ограничение обработки</strong> — вы можете потребовать ограничить обработку ваших персональных данных в определенных ситуациях.</li>
        <li><strong>Право на перенос данных</strong> — вы можете запросить передачу ваших данных в машиночитаемом формате.</li>
        <li><strong>Право на возражение против обработки</strong> — вы можете возразить против обработки ваших данных.</li>
        <li><strong>Право отозвать согласие на обработку данных</strong> — вы можете отозвать своё согласие на обработку данных в любое время.</li>
    </ul>
    Для обезличенных данных, которые собираются через Google Analytics и Яндекс Метрику, реализация некоторых прав невозможна, так как эти данные не идентифицируют вас как пользователя.</p>

    <p>Чтобы воспользоваться этими правами, свяжитесь с нами по адресу: [ваш email].</p>

    <p>10. <strong>Контактная информация</strong><br>
    Если у вас есть вопросы относительно данной Политики конфиденциальности или вы хотите воспользоваться своими правами, свяжитесь с нами по следующим контактам:
    [Название вашей компании/ИП]<br>
    Email: [ваш email]</p>

    <p>11. <strong>Изменения в Политике конфиденциальности</strong><br>
    Мы можем обновлять данную Политику конфиденциальности в любое время. Обновления будут опубликованы на этой странице. Мы рекомендуем регулярно проверять Политику конфиденциальности для получения актуальной информации о том, как мы защищаем ваши данные.</p>
        `;
    openModal(privacyPolicyContent);
  });
});

// // Функция для проверки запрещенных слов
// function validateInput(input) {
//     const forbiddenWords = [
//         "xxx", "viagra", "bitch", "slut", "whore", "cum", "fuck",
//         "виагра", "сучка", "сука", "хуй", "тварь", "потаскуха",
//         "блядина", "шалава", "трахать", "трахал", "трахаю",
//         "шлюха", "сперма", "блядь"
//     ]; // запрещенные слова
//     const regex = new RegExp(forbiddenWords.join("|"), "i");
//     return !regex.test(input);
// }

// // Обработка отправки формы
// document.getElementById("questions__button").addEventListener("click", async function (event) {
//     event.preventDefault(); // Предотвращаем обычное поведение формы

//     const form = document.getElementById("questions__form");
//     const formData = new FormData(form);
//     const modalContent = document.getElementById("modal_window_content");
//     const overlay = document.getElementById("overlay");
//     const modalWindow = document.getElementById("modal_window");
//     const errorDiv = document.getElementById("errorQuestions");
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     const consentCheckbox = document.getElementById("consentQuestionsCheckbox");

//     // Сначала проверяем textarea
//     const userInput = formData.get("message");
//     if (!validateInput(userInput)) {
//         errorDiv.innerHTML = "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
//         errorPolitics.innerText = ""; // Очищаем сообщение об ошибке согласия
//         return;
//     } else {
//         errorDiv.innerHTML = ""; // Очищаем сообщение об ошибке
//     }

//     // Затем проверяем согласие с политикой
//     if (!consentCheckbox.checked) {
//         errorPolitics.innerText = "Прочтите и подтвердите согласие";
//         return;
//     } else {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }

//     try {
//         const response = await fetch("https://formspree.io/f/xvgpvnov", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 Accept: "application/json",
//             },
//         });

//         if (response.ok) {
//             modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
//             form.reset(); // Очищаем поле textarea
//         } else {
//             modalContent.innerText = "Произошла ошибка при отправке формы.";
//         }

//         // Показ модального окна
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//     } catch (error) {
//         console.error("Ошибка:", error);
//         modalContent.innerText = "Произошла ошибка при отправке формы.";
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//     }
// });

// // Очистка сообщения об ошибке при изменении значения в textarea
// document.querySelector(".questions__comment").addEventListener("input", function () {
//     const errorDiv = document.getElementById("errorQuestions");
//     errorDiv.innerHTML = ""; // Очистка сообщения об ошибке при вводе текста
// });

// // Очистка сообщения об ошибке при изменении состояния чекбокса
// document.getElementById("consentQuestionsCheckbox").addEventListener("change", function () {
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     if (this.checked) {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }
// });

// // Функция для открытия модального окна с заданным контентом
// const openModal = function (content) {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");
//     let modalContent = document.getElementById("modal_window_content");

//     document.body.classList.add("no-scroll");

//     modalContent.innerHTML = content;
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");

//     document.body.style.overflow = "hidden";
// };

// // Функция для закрытия модального окна
// const closeModal = function () {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");

//     document.body.classList.remove("no-scroll");
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");

//     document.body.style.overflow = "";
// };

// // Обработка кнопок закрытия модального окна
// document.getElementById("btn_close_modal").addEventListener("click", closeModal);
// document.getElementById("overlay").addEventListener("click", closeModal);

// // Обработка закрытия модального окна клавишей Escape
// document.addEventListener("keydown", function (e) {
//     if (
//         e.key === "Escape" &&
//         !document.getElementById("modal_window").classList.contains("hidden")
//     ) {
//         closeModal();
//     }
// });

// // Обработка всех ссылок для открытия модального окна
// document.querySelectorAll(".openPrivacyPolicyLink").forEach(function (link) {
//     link.addEventListener("click", function (event) {
//         event.preventDefault(); // Предотвращаем переход по ссылке

//         // Контент модального окна для Политики конфиденциальности
//         const privacyPolicyContent = `
//             <h2>Политика конфиденциальности</h2>
//             <p>Мы уважаем конфиденциальность ваших данных и стремимся обеспечить их защиту в соответствии с Общим регламентом по защите данных (GDPR) и другими применимыми законами. Данная Политика конфиденциальности объясняет, какие данные мы собираем, как мы их используем и как мы защищаем вашу информацию.

// 1. **Оператор данных**
// Оператором данных является:
// [Название вашей компании/ИП]
// Контактная информация: [Ваш email]

// 2. **Какие данные мы собираем**
// Мы собираем следующие данные:

// - **Электронная почта** — для отправки новостных и рекламных рассылок. Мы запрашиваем вашу электронную почту только с вашего согласия.
// - **Анонимные вопросы** — данные, которые не содержат имени или другой идентифицирующей информации, но могут быть использованы для анализа и улучшения наших услуг.
// - **Данные аналитики** — с помощью сервисов Google Analytics и Яндекс Метрики мы собираем информацию о посещении сайта, такую как:
//   - IP-адрес;
//   - Тип устройства;
//   - Геолокация (обезличенная);
//   - Поведение на сайте (просмотры страниц, клики и т.д.).

// 3. **Как мы используем ваши данные**
// Мы используем собранные данные для следующих целей:
// - **Отправка информационных рассылок**. С вашего согласия, мы используем ваш email для отправки новостей, акций и другой информации, связанной с нашими услугами.
// - **Ответы на анонимные вопросы**. Мы анализируем анонимные вопросы, чтобы улучшить наши услуги и отвечать на запросы пользователей.
// - **Анализ и улучшение работы сайта**. Сервисы аналитики (Google Analytics и Яндекс Метрика) позволяют нам собирать статистику о посещениях сайта, чтобы оптимизировать наш контент и улучшить пользовательский опыт.

// 4. **Передача данных третьим лицам**
// Мы не передаем ваши персональные данные третьим лицам за исключением случаев, когда это необходимо для использования сторонних сервисов:
// - **Google Analytics и Яндекс Метрика**. Эти сервисы могут получать обезличенные данные для анализа трафика на нашем сайте. Ваши данные передаются только таким сервисам, которые соответствуют требованиям GDPR.
// - **Formspree.io**. Мы используем сервис Formspree.io для обработки и отправки данных из форм на наш email. Formspree.io может получать данные, которые вы вводите в наши формы, чтобы передать их на указанный адрес электронной почты. Формы и данные, отправленные через Formspree.io, обрабатываются в соответствии с их Политикой конфиденциальности.

// 5. **Файлы cookie**
// Мы используем файлы cookie для улучшения работы сайта и предоставления вам персонализированного контента. Файлы cookie позволяют нам:
// - Анализировать поведение пользователей на сайте;
// - Улучшать структуру и содержание сайта;
// - Соблюдать законные требования (например, показывать уведомления о файлах cookie).
// Вы можете управлять настройками cookie в своем браузере и отказаться от их использования.

// 6. **Правовые основания для обработки данных**
// Мы обрабатываем ваши персональные данные на следующих законных основаниях:
// - **Ваше согласие** — для рассылки новостей и обработки данных аналитики;
// - **Законный интерес** — для анализа трафика и улучшения работы сайта.

// 7. **Как долго мы храним ваши данные**
// Мы храним ваши данные до тех пор, пока это необходимо для целей, указанных в данной Политике конфиденциальности, или до тех пор, пока вы не отзовете свое согласие на обработку.

// 8. **Защита ваших данных**
// Мы принимаем все разумные меры для защиты ваших данных от несанкционированного доступа, изменения, разглашения или уничтожения. Мы используем безопасные серверы и протоколы для передачи данных.
// 9. **Ваши права в соответствии с GDPR**
// В соответствии с GDPR у вас есть следующие права:
// - **Право на доступ к вашим данным** — вы можете запросить информацию о том, какие данные мы собираем и как они обрабатываются.
// - **Право на исправление данных** — вы можете потребовать исправления ваших данных, если они неточные или неполные.
// - **Право на удаление данных ("право быть забытым")** — вы можете потребовать удаления ваших персональных данных. Обратите внимание, что обезличенные данные, собранные через Google Analytics и Яндекс Метрику, не могут быть удалены, так как они не могут быть связаны с вашей личностью.
// - **Право на ограничение обработки** — вы можете потребовать ограничить обработку ваших персональных данных в определенных ситуациях.
// - **Право на перенос данных** — вы можете запросить передачу ваших данных в машиночитаемом формате.
// - **Право на возражение против обработки** — вы можете возразить против обработки ваших данных.
// - **Право отозвать согласие на обработку данных** — вы можете отозвать своё согласие на обработку данных в любое время.
// Для обезличенных данных, которые собираются через Google Analytics и Яндекс Метрику, реализация некоторых прав невозможна, так как эти данные не идентифицируют вас как пользователя.

// Чтобы воспользоваться этими правами, свяжитесь с нами по адресу: [ваш email].

// 10. **Контактная информация**
// Если у вас есть вопросы относительно данной Политики конфиденциальности или вы хотите воспользоваться своими правами, свяжитесь с нами по следующим контактам:
// [Название вашей компании/ИП]
// Email: [ваш email]

// 11. **Изменения в Политике конфиденциальности**
// Мы можем обновлять данную Политику конфиденциальности в любое время. Обновления будут опубликованы на этой странице. Мы рекомендуем регулярно проверять Политику конфиденциальности для получения актуальной информации о том, как мы защищаем ваши данные.</p>
//             <p>Вы можете обновить текст Политики конфиденциальности в зависимости от ваших требований.</p>
//         `;
//         openModal(privacyPolicyContent);
//     });
// });

// // Функция для проверки запрещенных слов
// function validateInput(input) {
//     const forbiddenWords = [
//         "xxx", "viagra", "bitch", "slut", "whore", "cum", "fuck",
//         "виагра", "сучка", "сука", "хуй", "тварь", "потаскуха",
//         "блядина", "шалава", "трахать", "трахал", "трахаю",
//         "шлюха", "сперма", "блядь"
//     ]; // запрещенные слова
//     const regex = new RegExp(forbiddenWords.join("|"), "i");
//     return !regex.test(input);
// }

// // Обработка отправки формы
// document.getElementById("questions__button").addEventListener("click", async function (event) {
//     event.preventDefault(); // Предотвращаем обычное поведение формы

//     const form = document.getElementById("questions__form");
//     const formData = new FormData(form);
//     const modalContent = document.getElementById("modal_window_content");
//     const overlay = document.getElementById("overlay");
//     const modalWindow = document.getElementById("modal_window");
//     const errorDiv = document.getElementById("errorQuestions");
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     const consentCheckbox = document.getElementById("consentQuestionsCheckbox");

//     // Сначала проверяем textarea
//     const userInput = formData.get("message");
//     if (!validateInput(userInput)) {
//         errorDiv.innerHTML = "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
//         errorPolitics.innerText = ""; // Очищаем сообщение об ошибке согласия
//         return;
//     } else {
//         errorDiv.innerHTML = ""; // Очищаем сообщение об ошибке
//     }

//     // Затем проверяем согласие с политикой
//     if (!consentCheckbox.checked) {
//         errorPolitics.innerText = "Прочтите и подтвердите согласие";
//         return;
//     } else {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }

//     try {
//         const response = await fetch("https://formspree.io/f/xvgpvnov", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 Accept: "application/json",
//             },
//         });

//         if (response.ok) {
//             modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
//             form.reset(); // Очищаем поле textarea
//         } else {
//             modalContent.innerText = "Произошла ошибка при отправке формы.";
//         }

//         // Показ модального окна
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//     } catch (error) {
//         console.error("Ошибка:", error);
//         modalContent.innerText = "Произошла ошибка при отправке формы.";
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//     }
// });

// // Очистка сообщения об ошибке при изменении значения в textarea
// document.querySelector(".questions__comment").addEventListener("input", function () {
//     const errorDiv = document.getElementById("errorQuestions");
//     errorDiv.innerHTML = ""; // Очистка сообщения об ошибке при вводе текста
// });

// // Очистка сообщения об ошибке при изменении состояния чекбокса
// document.getElementById("consentQuestionsCheckbox").addEventListener("change", function () {
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     if (this.checked) {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }
// });

// // Функция для открытия модального окна с заданным контентом
// const openModal = function (content) {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");
//     let modalContent = document.getElementById("modal_window_content");

//     document.body.classList.add("no-scroll");

//     modalContent.innerHTML = content;
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");

//     document.body.style.overflow = "hidden";
// };

// // Функция для закрытия модального окна
// const closeModal = function () {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");

//     document.body.classList.remove("no-scroll");
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");

//     document.body.style.overflow = "";
// };

// // Обработка кнопок закрытия модального окна
// document.getElementById("btn_close_modal").addEventListener("click", closeModal);
// document.getElementById("overlay").addEventListener("click", closeModal);

// // Обработка закрытия модального окна клавишей Escape
// document.addEventListener("keydown", function (e) {
//     if (
//         e.key === "Escape" &&
//         !document.getElementById("modal_window").classList.contains("hidden")
//     ) {
//         closeModal();
//     }
// });

// // Обработка открытия модального окна Политики конфиденциальности
// document.getElementById("openPrivacyPolicy").addEventListener("click", function (event) {
//     event.preventDefault(); // Предотвращаем переход по ссылке

//     // Контент модального окна для Политики конфиденциальности
//     const privacyPolicyContent = `
//         <h2>Политика конфиденциальности</h2>
//         <p>Здесь будет текст вашей Политики конфиденциальности...</p>
//         <p>Вы можете обновить текст Политики конфиденциальности по вашему усмотрению.</p>
//     `;

//     openModal(privacyPolicyContent);
// });

//-----Анонимные вопросы-----

// document.getElementById("questions__button").addEventListener("click", async function (event) {
//     event.preventDefault(); // Предотвращаем обычное поведение формы

//     const form = document.getElementById("questions__form");
//     const formData = new FormData(form);
//     const modalContent = document.getElementById("modal_window_content");
//     const overlay = document.getElementById("overlay");
//     const modalWindow = document.getElementById("modal_window");
//     const errorDiv = document.getElementById("errorQuestions");
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     const consentCheckbox = document.getElementById("consentQuestionsCheckbox");

//     // Функция для проверки запрещенных слов
//     function validateInput(input) {
//         const forbiddenWords = [
//             "xxx",
//             "viagra",
//             "bitch",
//             "slut",
//             "whore",
//             "cum",
//             "fuck",
//             "виагра",
//             "сучка",
//             "сука",
//             "хуй",
//             "тварь",
//             "потаскуха",
//             "блядина",
//             "шалава",
//             "трахать",
//             "трахал",
//             "трахаю",
//             "шлюха",
//             "сперма",
//             "блядь"
//         ]; // запрещенные слова
//         const regex = new RegExp(forbiddenWords.join("|"), "i");
//         return !regex.test(input);
//     }

//     // Сначала проверяем textarea
//     const userInput = formData.get("message");
//     if (!validateInput(userInput)) {
//         errorDiv.innerHTML = "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
//         errorPolitics.innerText = ""; // Очищаем сообщение об ошибке согласия
//         return;
//     } else {
//         errorDiv.innerHTML = ""; // Очищаем сообщение об ошибке
//     }

//     // Затем проверяем согласие с политикой
//     if (!consentCheckbox.checked) {
//         errorPolitics.innerText = "Прочтите и подтвердите согласие";
//         return;
//     } else {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }

//     try {
//         const response = await fetch("https://formspree.io/f/xvgpvnov", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 Accept: "application/json",
//             },
//         });

//         if (response.ok) {
//             modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
//             form.reset(); // Очищаем поле textarea
//         } else {
//             modalContent.innerText = "Произошла ошибка при отправке формы.";
//         }

//         // Показ модального окна
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//     } catch (error) {
//         console.error("Ошибка:", error);
//         modalContent.innerText = "Произошла ошибка при отправке формы.";
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//     }
// });

// // Очистка сообщения об ошибке при изменении значения в textarea
// document.querySelector(".questions__comment").addEventListener("input", function () {
//     const errorDiv = document.getElementById("errorQuestions");
//     errorDiv.innerHTML = ""; // Очистка сообщения об ошибке при вводе текста
// });

// // Очистка сообщения об ошибке при изменении состояния чекбокса
// document.getElementById("consentQuestionsCheckbox").addEventListener("change", function () {
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     if (this.checked) {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }
// });

// // Функции для открытия и закрытия модального окна
// const openModal = function (content) {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");
//     let modalContent = document.getElementById("modal_window_content");

//     document.body.classList.add("no-scroll");

//     modalContent.innerHTML = content;
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");

//     document.body.style.overflow = "hidden";
// };

// const closeModal = function () {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");

//     document.body.classList.remove("no-scroll");
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");

//     document.body.style.overflow = "";
// };

// // Обработка кнопок закрытия модального окна
// document.getElementById("btn_close_modal").addEventListener("click", closeModal);
// document.getElementById("overlay").addEventListener("click", closeModal);

// // Обработка закрытия модального окна клавишей Escape
// document.addEventListener("keydown", function (e) {
//     if (
//         e.key === "Escape" &&
//         !document.getElementById("modal_window").classList.contains("hidden")
//     ) {
//         closeModal();
//     }
// });

// document.getElementById("questions__button").addEventListener("click", async function (event) {
//     event.preventDefault(); // Предотвращаем обычное поведение формы

//     const form = document.getElementById("questions__form");
//     const formData = new FormData(form);
//     const modalContent = document.getElementById("modal_window_content");
//     const overlay = document.getElementById("overlay");
//     const modalWindow = document.getElementById("modal_window");
//     const errorDiv = document.getElementById("errorQuestions");
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     const consentCheckbox = document.getElementById("consentQuestionsCheckbox");

//     // Функция для проверки запрещенных слов
//     function validateInput(input) {
//       const forbiddenWords = ["xxx",
//     "viagra",
//     "bitch",
//     "slut",
//     "whore",
//     "cum",
//     "fuck",
//     "виагра",
//     "сучка",
//     "сука",
//     "хуй",
//     "тварь",
//     "потаскуха",
//     "блядина",
//     "шалава",
//     "трахать",
//     "трахал",
//     "трахаю",
//     "шлюха",
//     "сперма",
//     "блядь"]; // запрещенные слова
//       const regex = new RegExp(forbiddenWords.join("|"), "i");
//       return !regex.test(input);
//     }

//     // Сначала проверяем textarea
//     const userInput = formData.get("message");
//     if (!validateInput(userInput)) {
//       errorDiv.innerHTML = "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
//       errorPolitics.innerText = ""; // Очищаем сообщение об ошибке согласия
//       return;
//     } else {
//       errorDiv.innerHTML = ""; // Очищаем сообщение об ошибке
//     }

//     // Затем проверяем согласие с политикой
//     if (!consentCheckbox.checked) {
//       errorPolitics.innerText = "Прочтите и подтвердите согласие";
//       return;
//     } else {
//       errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }

//     try {
//       const response = await fetch("https://formspree.io/f/xvgpvnov", {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
//         form.reset(); // Очищаем поле textarea
//       } else {
//         modalContent.innerText = "Произошла ошибка при отправке формы.";
//       }

//       // Показ модального окна
//       overlay.classList.remove("hidden");
//       modalWindow.classList.remove("hidden");
//     } catch (error) {
//       console.error("Ошибка:", error);
//       modalContent.innerText = "Произошла ошибка при отправке формы.";
//       overlay.classList.remove("hidden");
//       modalWindow.classList.remove("hidden");
//     }
//   });

// // Список запрещенных слов
// const profanityList = [
//     "xxx",
//     "viagra",
//     "bitch",
//     "slut",
//     "whore",
//     "cum",
//     "fuck",
//     "виагра",
//     "сучка",
//     "сука",
//     "хуй",
//     "тварь",
//     "потаскуха",
//     "блядина",
//     "шалава",
//     "трахать",
//     "трахал",
//     "трахаю",
//     "шлюха",
//     "сперма",
//     "блядь",
//   ];

//   // Функция проверки спама
//   function validateInput(input) {
//     if (/<|>/.test(input)) {
//       return false; // Наличие угловых скобок
//     }
//     for (let word of profanityList) {
//       if (input.toLowerCase().includes(word)) {
//         return false; // Наличие нецензурных слов
//       }
//     }
//     return true;
//   }

//   // Обработка кнопки отправки формы
//   document
//     .getElementById("questions__button")
//     .addEventListener("click", async function (event) {
//       event.preventDefault(); // Предотвращаем обычное поведение формы

//       const form = document.getElementById("questions__form");
//       const formData = new FormData(form);
//       const modalContent = document.getElementById("modal_window_content");
//       const overlay = document.getElementById("overlay");
//       const modalWindow = document.getElementById("modal_window");
//       const errorDiv = document.getElementById("errorQuestions");

//       // Проверка согласия с политикой
//       const consentCheckbox = document.getElementById("consentQuestionsCheckbox");
//       const errorPolitics = document.getElementById("errorQuestionsPolitics");

//       if (!consentCheckbox.checked) {
//         errorPolitics.innerText = "Прочтите и подтвердите согласие";
//         return; // Прерываем выполнение функции
//       } else {
//         errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//       }

//       // Получение значения из поля textarea
//       const userInput = formData.get("message");

//       // Проверка ввода на спам
//       if (!validateInput(userInput)) {
//         errorDiv.innerHTML =
//           "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
//         return; // Прерываем выполнение функции
//       } else {
//         errorDiv.innerHTML = ""; // Очистка сообщения об ошибке
//       }

//       try {
//         const response = await fetch("https://formspree.io/f/xvgpvnov", {
//           method: "POST",
//           body: formData,
//           headers: {
//             Accept: "application/json",
//           },
//         });

//         if (response.ok) {
//           modalContent.innerHTML =
//             '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
//           form.reset(); // Очищаем поле textarea
//         } else {
//           modalContent.innerText = "Произошла ошибка при отправке формы.";
//         }

//         // Показ модального окна
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//       } catch (error) {
//         console.error("Ошибка:", error);
//         modalContent.innerText = "Произошла ошибка при отправке формы.";
//         overlay.classList.remove("hidden");
//         modalWindow.classList.remove("hidden");
//       }
//     });

//   // Очистка сообщения об ошибке при изменении состояния чекбокса
//   document.getElementById("consentQuestionsCheckbox").addEventListener("change", function () {
//     const errorPolitics = document.getElementById("errorQuestionsPolitics");
//     if (this.checked) {
//       errorPolitics.innerText = ""; // Очистка сообщения об ошибке
//     }
//   });

//   // Очистка сообщения об ошибке при изменении значения в textarea
//   document
//     .querySelector(".questions__comment")
//     .addEventListener("input", function () {
//       const errorDiv = document.getElementById("errorQuestions");
//       errorDiv.innerHTML = ""; // Очистка сообщения об ошибке при вводе текста
//     });

//   // Функции для открытия и закрытия модального окна
//   const openModal = function (content) {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");
//     let modalContent = document.getElementById("modal_window_content");

//     document.body.classList.add("no-scroll");

//     modalContent.innerHTML = content;
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");

//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = function () {
//     let modal = document.getElementById("modal_window");
//     let overlay = document.getElementById("overlay");

//     document.body.classList.remove("no-scroll");
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");

//     document.body.style.overflow = "";
//   };

//   // Обработка кнопок закрытия модального окна
//   document
//     .getElementById("btn_close_modal")
//     .addEventListener("click", closeModal);
//   document.getElementById("overlay").addEventListener("click", closeModal);

//   // Обработка закрытия модального окна клавишей Escape
//   document.addEventListener("keydown", function (e) {
//     if (
//       e.key === "Escape" &&
//       !document.getElementById("modal_window").classList.contains("hidden")
//     ) {
//       closeModal();
//     }
//   });
