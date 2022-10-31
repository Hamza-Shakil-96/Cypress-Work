/// <reference types="cypress" />
describe('Visit a website', () => {
  it('run first test', () => {
    cy.log('Navigate to website')
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
  })
})