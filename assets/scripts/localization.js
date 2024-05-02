/*************************************************************

localization.js

Contains localization related code

*************************************************************/

// REGISTRATION FORM CONSTANTS
let REG_FORM_VALIDATION_MESSAGE_NAME = "";
let REG_FORM_VALIDATION_MESSAGE_EMAIL = "";
let REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "";
let REG_FORM_VALIDATION_MESSAGE_AGE = "";
let REG_FORM_VALIDATION_MESSAGE_PRIVACY = "";
let REG_FORM_VALIDATION_MESSAGE_GENERAL = "";
let REG_FORM_THANKS_MODAL_CONTENT = "";
let REG_FORM_RESPONSE_MESSAGE_SERVER_ERROR = "";
let REG_FORM_RESPONSE_MESSAGE_WRONG_DATA_TYPE = "";
let REG_FORM_RESPONSE_MESSAGE_SERVER_INTERNAL_ERROR = "";
let REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV = "";

//What the html document language we have?
let langCode = document.getElementById("language_version").textContent;

if(langCode === "en"){
	//english version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Name should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Email should be filled in";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Invalid email address format";
	REG_FORM_VALIDATION_MESSAGE_AGE = "You should be older than 18 years old";
	REG_FORM_VALIDATION_MESSAGE_PRIVACY = "You have to accept the Privacy Policy";
	REG_FORM_VALIDATION_MESSAGE_GENERAL = "There are errors in the entered data. Check the messages under the input fields.";
	REG_FORM_VALIDATION_MESSAGE_PROFANITY = "There are incorrect characters in the data being sent. Replace them and try again.";
	REG_FORM_THANKS_MODAL_CONTENT = `<h3 style="font-weight: 600;">Thank you! <br>The request is submitted!</h3><br>
                            <p class="text">
                                I'll contact you soon to discuss the details.
                            </p>`;
	REG_FORM_RESPONSE_MESSAGE_SERVER_ERROR = "The server returned status ";
	REG_FORM_RESPONSE_MESSAGE_WRONG_DATA_TYPE = "The server returned wrong data.";
	REG_FORM_RESPONSE_MESSAGE_SERVER_INTERNAL_ERROR = "Internal server error. The message is: ";
	REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV = "<br />Try again. If the same error, contact the developer.";
}
else{
	//by default using russian version
	REG_FORM_VALIDATION_MESSAGE_NAME = "Имя должно быть заполнено";
	REG_FORM_VALIDATION_MESSAGE_EMAIL = "Адрес должен быть заполнен";
	REG_FORM_VALIDATION_MESSAGE_EMAIL_SYNTAX = "Некорректный формат адреса";
	REG_FORM_VALIDATION_MESSAGE_AGE = "Отметь, если тебе есть 18 лет";
	REG_FORM_VALIDATION_MESSAGE_PRIVACY = "Прочти и подтверди согласие";
	REG_FORM_VALIDATION_MESSAGE_GENERAL = "В отправляемых данных есть ошибки. Проверь сообщения под полями ввода.";
	REG_FORM_VALIDATION_MESSAGE_PROFANITY = "В отправляемых данных есть некорректные символы. Замените их и попробуйте ещё раз.";
	REG_FORM_THANKS_MODAL_CONTENT = `<h3 style="font-weight: 600;">Спасибо! <br>Заявка отправлена!</h3><br>
                            <p class="text">
                                Я свяжусь с тобой в ближайшее время для уточнения деталей и назначения времени
                                консультации.
                            </p>`;
	REG_FORM_RESPONSE_MESSAGE_SERVER_ERROR = "Ошибка обращения к серверу со статусом: ";
	REG_FORM_RESPONSE_MESSAGE_WRONG_DATA_TYPE = "Сервер вернул некорректные данные.";
	REG_FORM_RESPONSE_MESSAGE_SERVER_INTERNAL_ERROR = "Произошла ошибка на сервере. Получено сообщение: ";
	REG_FORM_RESPONSE_MESSAGE_CONTACT_DEV = "<br />Попробуйте еще раз. Если эта ошибка будет повторяться - обратитесь к разработчику.";
}