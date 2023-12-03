# Cypress-UI-Task

#### Verify flight Search Box test scenario:

###### 1.  Navigate to​ a configurable base URL (almosafer.com)
###### 2. Check for current set language. If language is already set to English then proceed with the next steps. If not, then first change language to English and then proceed.
###### 3. Navigate to flights-home page, and enter the below criteria in flights search form to make flight search:
- Origin - (from a random array of origins - length 5) (Example: DXB, AUH, SHJ, JED, RUH)
- Destination - (from a random array of destinations - length 5) (Example: AMM, CAI, DEL, KHI, PAR)
- Departure and Return Dates (randomly generated dates in the future)
- Passengers (1Adult) (Default)
- Cabin Class (Economy) (Default)
###### 4. Wait for loading to be completed on the flight listing page
###### 5. Use the sort feature to ensure that flights are sorted by 'cheapest'
###### 6. After loading is complete, fetch and save the price of the first flight
###### 7. Assert the minimum price displayed for the price-range-filter equals the price of first-flight in the list

## How to run:

-   clone this repo 
-   install dependencies: `npm install`
-   run tests in headless mode: `cy:run:headless`
-   run cypress tests and generate allure report: `npm run cy:run:allure`
-   clear previous allure output `npm run allure:clear`
