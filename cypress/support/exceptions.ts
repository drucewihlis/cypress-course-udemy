Cypress.on("uncaught:exception", (error, runnable) => {
    return false;
});