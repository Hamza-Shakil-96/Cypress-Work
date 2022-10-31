import dayjs from "dayjs"

/// <reference types="cypress" />
describe('Edit the form', () => {
 
  it('Login to the portal', () => {
    cy.viewport(1366, 768)
    cy.log('Navigate to website')
    cy.visit('/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.xpath("//a[@href='/web/index.php/pim/viewMyDetails']").click()
    cy.get('input[name="firstName"]').clear().type('M')
    cy.get('input[name="middleName"]').clear().type('Hamza')
    cy.get('input[name="lastName"]').clear().type('Shakil')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().click().type('1996-12-29')
    //cy.xpath('form/div[1]/div[2]/div/div/div[2]/input').clear().type('hamza')
    cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('hamza')
    cy.get('.oxd-form > :nth-child(5) > :nth-child(1) > :nth-child(1)').click().contains("Pakistani").click()
    // cy.xpath("//*[contains(text(),\"Pakistan\")]").click()
    cy.get('.oxd-form > :nth-child(5) > :nth-child(1) > :nth-child(2)').click().contains("Single").click()
    // cy.xpath("//*[contains(text(),\"Single\")]").click()
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > [type="radio"]').check('1')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
   

    //*[contains(text(),'$state')]

    
   
  })
})