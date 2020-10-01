/// <reference types="Cypress" />


describe('AirTableSignUpTestCases', function()
{

it('Special Characters Test case', function() {

    //test step
    cy.visit("https://airtable.com/signup")
    cy.get('.pr1 > .block > .rounded').type('!@#$%^&*?[]')
    cy.wait(2000)
    cy.get('.pl1 > .block > .rounded').type('!@#$%^&*?[]')
    cy.wait(2000)
    cy.get('.xs-mb1.block > .rounded').type('specialcharacters@testmail.net')
    cy.wait(2000)
    cy.get('.relative > .rounded').type('Antelope1234!')
    cy.get('#sign-up-form-fields-root > :nth-child(1) > .link-quiet').click()
}  )




})