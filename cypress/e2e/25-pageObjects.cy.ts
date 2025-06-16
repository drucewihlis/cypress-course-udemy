import {LoginPage} from "../pages/Login"
import {ProfilePage} from "../pages/Profile"

Cypress.session.clearAllSavedSessions();

describe("Basics", () => {
    beforeEach(() => {
        LoginPage.visit()
    });

    it.only("Success login scenario", () => {
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()
        LoginPage.usernameElement.type('test')
        LoginPage.passwordElement.type('Test1234*')
        LoginPage.loginElement.click()
        cy.url().should('contain', 'profile')
        // ProfilePage.headerElement.should('have.text', 'Profile') // element header removed from website
        LoginPage.userElement.should('have.text', 'test')
    });

    it("Wrong use login scenario", () => {
        // cy.get('#userName').type('wrongUser')
        // cy.get('#password').type('wrongPass')
        // cy.get('#login').click()
        LoginPage.submitLogin('wrongUser', 'wrongPass')
        cy.url().should('contain', 'profile')
        // cy.get('#name').should('have.text', 'Invalid username or password!')
        LoginPage.invalidLoginMessageElement.should(
            'have.text',
            'Invalid username or password!'
        )
        // LoginPage.headerElement.should('have.text', 'Login') // element header removed from website

    });

})

