describe('Test ecommerce',()=>{
       let loginPage= new LoginPage();
     let data;
     before(()=>{
    cy.fixture('example').then((tdata)=>{
         data=tdata
      })  
    })
    it('validate adding products to the cart and successful order placement',()=>{
        cy.visit('/')
        cy.loginCredFills(data.usename,data.password)
        cy.get('#inventory_container .inventory_item').each(($productcards)=>{
             if($productcards.text().includes('Bike')){
                 cy.wrap($productcards).find('[class="btn_primary btn_inventory"]').click()
           }
            

        })
        cy.get('a[href="./cart.html"]').click()
        cy.contains('CHECKOUT').click()
        cy.get('[id="first-name"]').type('some')
        cy.get('[id="last-name"]').type('and')
        cy.get('[id="postal-code"]').type('6789')
        cy.get('input[type="submit"]').click()
        let sum=0;
        cy.get('[class="cart_list"] [class="cart_item"] [class="inventory_item_price"]').each(($pricementioned)=>{
            let shownPrice=$pricementioned.text()
            let splitted=shownPrice.split('$')
            let weWant=splitted[1].trim()
            sum=sum+Number(weWant)
        }).then(()=>{
            cy.log(sum)
        })
        cy.get('[class="summary_subtotal_label"]').then(($pricementioned)=>{
          let shownPrice=$pricementioned.text()
            let splitted=shownPrice.split('$')
            let weWant=splitted[1].trim()
            expect(Number(weWant)).to.eq(sum)  
        })
    })
   })