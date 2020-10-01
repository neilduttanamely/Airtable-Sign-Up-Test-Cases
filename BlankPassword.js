/// <reference types="Cypress" />


describe('AirTableSignUpTestCases', function()
{

it('Blank Password 8 spaces', function() {

    //test step
    cy.visit("https://airtable.com/signup")
    cy.get('.pr1 > .block > .rounded').type('Joe')
    cy.wait(2000)
    cy.get('.pl1 > .block > .rounded').type('Bloggs')
    cy.wait(2000)
    cy.get('.xs-mb1.block > .rounded').type('Joebloggs@testcity.com')
    cy.wait(2000)
    cy.get('.relative > .rounded').type('        ')
    cy.get('#sign-up-form-fields-root > :nth-child(1) > .link-quiet').click()
    cy.wait(2000)
    // ensure register page sends you to creator plan modal after success registered
    cy.url().should('contain', 'https://airtable.com')
    //click on continue
    cy.get('.flex > .huge').click()


}  )




})