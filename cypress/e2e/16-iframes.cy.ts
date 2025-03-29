describe("Iframe example", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}nestedframes`);
    });

    it("Simple and nested iframe", () => {
        cy.get('#frame1')
            .then(function ($iframe) {
            const $body = $iframe.contents()
                .find("body");
            cy.wrap($body).should("have.text", "Parent frame");
            cy.wrap($body).find('iframe')
                .then(function ($childFrame) {
                    const $childBody = $childFrame.contents().find("body");
                    cy.wrap($childBody).find('p').should("have.text", "Child Iframe")
            })
        });

    });

})

describe("Typing on an Iframe using the internet app", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}iframe`);
    });

    // fails bcs website asks to pay
    it("Iframedemo", () => {
        cy.get('#mce_0_ifr').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').type("{selectAll}{del}Hello world");
        })

        cy.get('#mce_0_ifr').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').should("have.text", "Hello world");
            // possible alternative
            //         cy.wrap($body)
            //             .find('[data-id="tiny-react_52455342911680944561714"]') // or whatever the editor's content area ID is
            //             .should('have.attr', 'contenteditable', 'true')
            //             .clear()
            //             .type('Hello world');
        })
    });

})