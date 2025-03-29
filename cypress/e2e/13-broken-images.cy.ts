let img: HTMLImageElement;
describe("Broken images with Demo QA", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}broken`);
    });

    it("Not broken image assertion", () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]')
            .should("be.visible")
            .then(($img) => {
                cy.log('This is the img yielded', $img);
                img = $img[0] as unknown as HTMLImageElement;
                expect(img.naturalWidth).to.be.greaterThan(0);
            });
    });

    // will fail
    it("Broken image assertion", () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
            .should('be.visible')
            .then(($img) => {
                cy.log('This is the broken img yielded', $img);
                img = $img[0] as unknown as HTMLImageElement;
                expect(img.naturalWidth).to.be.greaterThan(0);
            });
    });
});