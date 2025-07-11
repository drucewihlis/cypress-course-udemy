import json = Mocha.reporters.json;

describe("Excel Playground", () => {
    it('read data from excel', () => {
        cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData)=>{
            cy.log(jsonData);
            cy.log(jsonData[0].data)

            let data: [] = jsonData[0].data;
            let dataLength = data.length;
            data.forEach(row => {
                cy.log(row[0])
                cy.log(row[1])
            })

            data.forEach((row)=>{
                cy.writeFile('cypress/fixtures/excelData.json', {
                    username: row[0],
                    password: row[1]
                })
            })
        })
    });

});