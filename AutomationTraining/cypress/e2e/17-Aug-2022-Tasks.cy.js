/// <reference types="cypress" />
describe('Visit a website', () => {
    it('Wait for 5 seconds', () => {
      cy.log('Navigate to website')
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.wait(5000) // wait for 5 seconds and then click
      cy.get('.oxd-button').click()
    })
    it('Clear the text', () => {
      cy.log('Navigate to website')
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="username"]').clear()
      cy.get('input[name="password"]').type('admin123')
      cy.get('input[name="password"]').clear()
    })
  })