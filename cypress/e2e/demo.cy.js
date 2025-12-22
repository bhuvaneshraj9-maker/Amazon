describe('verify the username login',()=>{
    it('swaglabs',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.url('').should('include','https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[class="product_sort_container"]').select('Name (A to Z)')
        cy.get('[class="product_sort_container"]').select('Price (low to high)')
        cy.url('').should('include','https://www.saucedemo.com/v1/inventory.html')
        cy.get('div[class="inventory_item_img"] a[id="item_4_img_link"]').click()
        cy.get('button[class="btn_primary btn_inventory"]').click()
        cy.go('back')
        cy.get('[id="item_1_img_link"]').click()
        cy.get('button[class="btn_primary btn_inventory"]').click()
        cy.go('back')
        cy.get('[id="item_2_img_link"]').click()
        cy.get('button[class="btn_primary btn_inventory"]').click()
        cy.go('back')
        cy.get('[fill="currentColor"]').click()
        cy.get('[fill="currentColor"]').click()
        cy.get('[class="btn_action checkout_button"]').click()
        cy.get('#first-name').type('Bhuvanesh')
        cy.get('#last-name').type('kumar')
        cy.get('#postal-code').type('607002')
        cy.get('[type="submit"]').click()
        cy.get('[class="btn_action cart_button"]').click()
        
    
        
    
    })
})
