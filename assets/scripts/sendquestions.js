//-----Анонимные вопросы-----

//-----Анонимные вопросы-----

document.getElementById("questions__button").addEventListener("click", async function (event) {
    event.preventDefault(); // Предотвращаем обычное поведение формы

    const form = document.getElementById("questions__form");
    const formData = new FormData(form);
    const modalContent = document.getElementById("modal_window_content");
    const overlay = document.getElementById("overlay");
    const modalWindow = document.getElementById("modal_window");
    const errorDiv = document.getElementById("errorQuestions");
    const errorPolitics = document.getElementById("errorQuestionsPolitics");
    const consentCheckbox = document.getElementById("consentQuestionsCheckbox");

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
            "блядь"
        ]; // запрещенные слова
        const regex = new RegExp(forbiddenWords.join("|"), "i");
        return !regex.test(input);
    }

    // Сначала проверяем textarea
    const userInput = formData.get("message");
    if (!validateInput(userInput)) {
        errorDiv.innerHTML = "<p>Ошибка! Сообщение содержит недопустимые слова или символы.</p>";
        errorPolitics.innerText = ""; // Очищаем сообщение об ошибке согласия
        return;
    } else {
        errorDiv.innerHTML = ""; // Очищаем сообщение об ошибке
    }

    // Затем проверяем согласие с политикой
    if (!consentCheckbox.checked) {
        errorPolitics.innerText = "Прочтите и подтвердите согласие";
        return;
    } else {
        errorPolitics.innerText = ""; // Очистка сообщения об ошибке
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
            modalContent.innerHTML = '<div class="modal-text"><p>Спасибо!</p><p>Сообщение было успешно отправлено</p></div>';
            form.reset(); // Очищаем поле textarea
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
document.querySelector(".questions__comment").addEventListener("input", function () {
    const errorDiv = document.getElementById("errorQuestions");
    errorDiv.innerHTML = ""; // Очистка сообщения об ошибке при вводе текста
});

// Очистка сообщения об ошибке при изменении состояния чекбокса
document.getElementById("consentQuestionsCheckbox").addEventListener("change", function () {
    const errorPolitics = document.getElementById("errorQuestionsPolitics");
    if (this.checked) {
        errorPolitics.innerText = ""; // Очистка сообщения об ошибке
    }
});

// Функции для открытия и закрытия модального окна
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

const closeModal = function () {
    let modal = document.getElementById("modal_window");
    let overlay = document.getElementById("overlay");

    document.body.classList.remove("no-scroll");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");

    document.body.style.overflow = "";
};

// Обработка кнопок закрытия модального окна
document.getElementById("btn_close_modal").addEventListener("click", closeModal);
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
  