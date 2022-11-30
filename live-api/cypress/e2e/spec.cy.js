describe('Page loads', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Adding a broken API works', () => {
  it('passes', () => {
    cy.get(':nth-child(1) > form > .input-container > .input')
    .type('https://weatherdbi.herokuapp.com/data/weather/london')
    .should('have.value','https://weatherdbi.herokuapp.com/data/weather/london')
    cy.get(':nth-child(2) > form > .input-container > .input')
    .type('Weather')
    .should('have.value','Weather')
    cy.get(':nth-child(3) > form > .input-container > .input')
    .type('https://weatherdbi.herokuapp.com')
    .should('have.value','https://weatherdbi.herokuapp.com')
    cy.get(':nth-child(4) > form > .input-container > .input')
    .type('weather')
    .should('have.value','weather')

    cy.get('.button').click()
    cy.get('.list-container').should('contain','Weather')
  })
})

describe('Deleting an API', () => {
  it('passes', () => {
    cy.get('button#8.delete').click()
    cy.wait(5000)
    cy.get('.list-container').should('not.contain','Weather')
  })
})