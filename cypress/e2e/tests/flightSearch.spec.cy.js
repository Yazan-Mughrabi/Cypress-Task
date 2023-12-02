import flightsSearchLocators from "../../pageLocators/homepage/flightsSearchLocators";
import flightsPageLocator from "../../pageLocators/flightsPageLocator";

describe('Almosafer - Verify Flight Search', () => {

    beforeEach(() => {
        // global prefered coutry selection
        cy.visitPreferdCountry('continue')

        // validate that url set to global
        cy.url().should('not.contain', '?ncr=1').and('contain', 'global');
    });

    it('Verify Flight Search with a given criteria', function() {

        // Origin selection step
        cy.fillFlightSearchBox(flightsSearchLocators.originSearchBox, 'originData.json');

        // Destination selection step
        cy.fillFlightSearchBox(flightsSearchLocators.destinationSearchBox, 'destinationData.json');

        // Click on Search Flights button
        cy.get(flightsSearchLocators.flightSearchBoxBtn).first().click();

        // wait for Results to be shown
        cy.get(flightsPageLocator.searchLoadingProgressBar).should('not.exist');

        // assert that cheapest is selected by default 
        cy.get(flightsPageLocator.cheapestSort).should('exist');

        // Fetch the price filter minimum
        cy.get(flightsPageLocator.collapsePriceFilter).click();
        cy.get(flightsPageLocator.priceFilterMin).invoke('text').as('priceFilterMin');

        // Assert that price filter minimum matches first price result
        cy.get(flightsPageLocator.firstResultPriceLabel).invoke('text').then(priceLabelText=>{
            expect(this.priceFilterMin).contain(priceLabelText);
        });
    });
});