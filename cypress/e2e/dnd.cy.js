describe('file upload',()=>{
    it('validate file upload',()=>{
        cy.visit('https://tus.io/demo');
        cy.get('input[id="P0-0"]').as('fupInput')
        cy//.wait('@fupInput')
        cy.get("@fupInput").selectFile('cypress/fixtures/confidential txt')
        
    })
})