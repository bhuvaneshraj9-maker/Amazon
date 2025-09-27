describe('validate login test',()=>{
    it('positive test',{tags:"@smoke"},()=>{
        cy.log('hello')
    })
    it('Negative test1',{tags:"@smoke,@sanity"},()=>{
        cy.log('and')
    })
    it('Negative test2',{tags:"@regression"},()=>{
        cy.log('sorry')
    })
})