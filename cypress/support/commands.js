import homepageLocators from "../pageLocators/homepage/homepageLocators";
import flightsSearchLocators from "../pageLocators/homepage/flightsSearchLocators";
import arrayUtil from "../utils/arrayUtil";


Cypress.Commands.add('visitPreferdCountry', (country) => {
    cy.visit('/');
    cy.get(homepageLocators.preferedCountryBtn(country)).click({ force: true });

    // change language to English
    cy.location('href').then((fullUrl) => {
        if (!fullUrl.includes('/en')) {
            cy.get(homepageLocators.languageSwitchBtn).click({ force: true });
        }
    });
});

Cypress.Commands.add('fillFlightSearchBox', (searchBoxLocator, searchDataFile, dropDownOption = 1) => {

    cy.fixture(searchDataFile).then(values => {
        // Get Random origin value
        const randomeValue = arrayUtil.getRandomValueArr(values);
        cy.get(searchBoxLocator).click().type(randomeValue);
        cy.get(flightsSearchLocators.flightDropDownValue(dropDownOption)).click();
    });
});