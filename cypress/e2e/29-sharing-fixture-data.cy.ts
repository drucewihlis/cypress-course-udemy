import { testData } from './model'

describe("Using a fixture", () => {
    beforeEach(function() {
        cy.fixture('jsonExample').as('testData')
    })
    it('Accessing the shared fixture 1', function(){
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Accessing testData property1', testData.property1)
        })
    });
    it('Accessing the shared fixture 2', function(){});
    it('Accessing the shared fixture 3', function(){});
});