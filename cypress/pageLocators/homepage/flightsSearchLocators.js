module.exports = {
    originSearchBox: '[data-testid="FlightSearchBox__FromAirportInput"]',
    destinationSearchBox: '[data-testid="FlightSearchBox__ToAirportInput"]',

    // option => which filter result option number needed ex: option = 1 
    flightDropDownValue: (option) => `[data-testid="FlightSearchBox__AirportOption${option}"]`,
    flightSearchBoxBtn: '[data-testid="FlightSearchBox__SearchButton"]',
}
