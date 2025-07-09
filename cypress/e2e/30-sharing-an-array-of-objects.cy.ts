import {User} from './model'

describe("Array of objects - users", () => {
    it('Getting user info based on my fixture', () => {
        cy.fixture<{users: User[]}>('example.json')
            .its('users')
            .then((users) => {
                users.forEach(user => {
                    cy.visit(`${Cypress.env("demoQA")}login`);
                    // cy.log(user.username)
                    // cy.log(user.password)
                    cy.login(user.username, user.password)
                    if (user.valid) {
                        cy.url().should('contain', 'profile')
                    } else {
                        cy.url().should('contain', 'login')
                    }

                    cy.clearCookies()
                    cy.clearLocalStorage()
                })
            })
    });

});