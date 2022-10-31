import user from '../fixtures/example.json';
describe('login with credentails', () => {
  it('passes', () => {
    cy.visit('/login')
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('.loginsub').click()
  })
})