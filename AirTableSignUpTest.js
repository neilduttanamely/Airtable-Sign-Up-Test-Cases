/// <reference types="Cypress" />


describe('AirTableSignUpTestCases', function()
{

it('Tell us about yourself Test case', function() {
    //test step
    cy.visit("https://airtable.com/signup")
        //Generate random user name with each new test
        function generateNewUsername() {
            var text = "";
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
         //for loop
         for(let i=0; i <10; i++)
         text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
         return text;
        }
        //new variable for generated username
        const generateUsername = generateNewUsername()
    cy.get('.pr1 > .block > .rounded').type(generateUsername)
    cy.wait(2000)
    cy.get('.pl1 > .block > .rounded').type(generateUsername)
    cy.wait(2000)
    cy.get('.xs-mb1.block > .rounded').type(generateUsername+'@testmail.com')
    cy.wait(2000)
    cy.get('.relative > .rounded').type('Antelope1234!')
    cy.get('#sign-up-form-fields-root > :nth-child(1) > .link-quiet').click()
    cy.wait(2000)
    // ensure register page sends you to creator plan modal after success registered
    cy.url().should('contain', 'https://airtable.com')
    //click on continue
    cy.get('.flex > .huge').click()
    //static dropdown one for tell us a bit about yourself
    cy.get(':nth-child(4) > label > .overflow-auto > .focus-container > .rounded-big')
}  )




})
