const { generate } = require("generate-password")

describe("Demo QA API", { tags: '@smoke' }, () => {
    let rdmUser = generate({length: 10, numbers: true, uppercase: true, symbols: true});
    it("Happy Flow: Creation of user account by using the api provided", () => {
        cy.request({
            method: 'POST',
            url: `https://demoqa.com/Account/v1/User`,
            failOnStatusCode: false,
            body: {
                'userName':rdmUser, 
                'password':'March23A!'
            }
        }).as('details')

        //Validate status code
        cy.get('@details').its('status').should('eq', 201)
        cy.get('@details').then((response) => {
            let res = response.body
            let att1 = res.id
            cy.log(att1)
        })
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it("Unhappy Flow: Creation of user account by using the api provided", () => {
        cy.request({
            method: 'POST',
            url: `https://demoqa.com/Account/v1/User`,
            failOnStatusCode: false,
            body: {
                'userName':rdmUser, 
                'password':'March23A!'
            }
        }).as('details')

        //Validate status code
        cy.get('@details').its('status').should('eq', 406)
        cy.get('@details').then((response) => {
            let res = response.body
            let att1 = res.id
            cy.log(att1)
        })
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })
  
    
    
})