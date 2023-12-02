module.exports = {
    languageSwitchBtn: '[data-testid="Header__LanguageSwitch"]',

    // country: global USD => value continue | Saudi SAR => value saudi
    preferedCountryBtn: (country) => `[type=button].cta__${country}`
}
