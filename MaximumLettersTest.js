/// <reference types="Cypress" />


describe('AirTableSignUpTestCases', function()
{

it('Maximum Letters Name Test case', function() {

    //test step Use 52 characters to test first name and last name fields
    cy.visit("https://airtable.com/signup")
    cy.get('.pr1 > .block > .rounded').type('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    cy.wait(2000)
    cy.get('.pl1 > .block > .rounded').type('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    cy.wait(2000)
    cy.get('.xs-mb1.block > .rounded').type('maximumletters@testmail.net')
    cy.wait(2000)
    cy.get('.relative > .rounded').type('Antelope1234!')
    cy.get('#sign-up-form-fields-root > :nth-child(1) > .link-quiet').click()
}  )




})