describe('Demo Test', () => {

  it('Visits page and clicks button', () => {
    
    cy.visit('http://localhost:8080')
    
    cy.contains('Click Me').click()
    
    cy.contains('Button Clicked').should('be.visible')    
    
  })

})