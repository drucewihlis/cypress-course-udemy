import {isMobile} from "../support/utils";

describe("Viewport iteration", () => {
    const viewportsToTest: Cypress.ViewportPreset[] = ['iphone-3', 'ipad-2', 'macbook-15']
    viewportsToTest.forEach((viewport)=>{
        it(viewport,()=>{
            cy.viewport(viewport)
        });
    });
});

describe("hybrid suite", () => {
    it('main menu test', function () {
        cy.log('desktop validation')
        if(isMobile()){
            cy.log('this a mobile validation')
        }
    });
});