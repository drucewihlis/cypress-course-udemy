describe("mySQL db testing", () => {
    it('create a movie table', () => {
        cy.task(
            "queryDb",
            "CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL, director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY_KEY(title));"
        )
    });

    it('insert a movie', () => {
        cy.task(
            "queryDb",
            `INSERT INTO movies VALUES("Joker", "Psychological thriller", "Todd Phillips", 2019);`
        ).then((result: any)=>{
            expect(result.affectedRows).to.equal(1)
        })
    });
});