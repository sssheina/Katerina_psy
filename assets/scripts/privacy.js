const privacyPolicies = {
    en: `<h2>Privacy Policy</h2>
         <p>Your privacy policy content in English goes here.</p>`,
    fr: `<h2>Politique de confidentialité</h2>
         <p>Your privacy policy content in English goes here.</p>`,
    ru: `<h2>Политика конфиденциальности</h2>
         <p>Содержание политики конфиденциальности на русском языке здесь.</p>`
};

function getPrivacyPolicyContent(language) {
    return privacyPolicies[language] || privacyPolicies['ru']; // Возвращает контент для указанного языка или по умолчанию 'ru'
}