const datajson=require('../fixtures/dataDrivenUI.json')

describe('UI data driven', () => {
    
    datajson.forEach((testData) => {
        
        it('UI data driven', () => {
            cy.visit('https://managementonschools.com/')
            cy.get('.justify-content-start > :nth-child(5)').click()
            cy.get('#name').type(testData.name)
            cy.get('#email').type(testData.email)
            cy.get('#subject').type(testData.subject)
            cy.get('#message').type(testData.message)
            cy.get('.fw-semibold').click()
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain',"Message Created")


        });
    });
});