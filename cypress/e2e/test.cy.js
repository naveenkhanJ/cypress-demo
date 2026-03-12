describe('Demo Test', () => {

  it('Visits page and clicks button', () => {

    cy.visit('index.html')

    cy.contains('Click Me').click()

    cy.contains('Button Clicked')

  })

})