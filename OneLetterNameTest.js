/// <reference types="Cypress" />


describe('AirTableSignUpTestCases', function()
{

it('OneLetterNames Test case', function() {

    //test step
    cy.visit("https://airtable.com/signup")
    cy.get('.pr1 > .block > .rounded').type('X')
    cy.wait(2000)
    cy.get('.pl1 > .block > .rounded').type('Y')
    cy.wait(2000)
    cy.get('.xs-mb1.block > .rounded').type('Onelettertest@testmail.net')
    cy.wait(2000)
    cy.get('.relative > .rounded').type('Antelope1234!')
    cy.get('#sign-up-form-fields-root > :nth-child(1) > .link-quiet').click()
}  )




})