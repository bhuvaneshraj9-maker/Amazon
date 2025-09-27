describe('LogIn test',() =>{
  it('validate login',() =>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type('student')
    cy.get('[id="password"]').type('Password123')
    cy.get('[id="submit"]').click()
    cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
    cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
    cy.get('a[href*="/practice-test-login/"]').should('be.visible')
  })
})
it('validate negative login 1',() =>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type(' incorrectUser ')
    cy.get('[id="password"]').type('Password123')
    cy.get('[id="submit"]').click()
    cy.get('[id="error"]').should('be.visible')
    cy.get('[id="error"]').should('have.text','Your username is invalid!')
    
    
})
it('validate negative password login 2',() =>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type('student')
    cy.get('[id="password"]').type(' incorrectPassword ')
    cy.get('[id="submit"]').click()
    cy.get('[id="error"]').should('be.visible')
    cy.get('[id="error"]').should('have.text','Your password is invalid!')
})