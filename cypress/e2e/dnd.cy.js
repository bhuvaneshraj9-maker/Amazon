// describe('file upload',()=>{
//     it('validate file upload',()=>{
//         cy.visit('https://tus.io/demo');
//         cy.get('input[id="P0-0"]').as('fupInput')
//         cy//.wait('@fupInput')
//         cy.get("@fupInput").selectFile('cypress/fixtures/confidential txt')
        
//     })
// })
// describe('Basic Element Test',()=>{
//     it('Validate Basic elements',()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('input[value="radio2"]').check()
//         cy.get('fieldset input[type="checkbox"]').check(['option1','option2']).should('be.checked')
//         cy.get('select').select('option2').should('have.value','option2')
//         cy.get('[id="autocomplete"]').type('ind');
//         cy.get('li.ui-menu-item div').each(($Country)=>{
//             if($Country.text()==='India'){
//                 cy.wrap($Country).click()
//             }
//         })
//     })
// })
//             cy.get('[id="opentab"]').invoke('removeAttr','target').click()
//             cy.origin('https://www.qaclickacademy.com/',()=>{
//             cy.get('li[class="nav-item"] a[href="about.html"]').click()
//             cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//             cy.on('window:alert',(alt)=>{
//             expect(alt).to.equal('Hello , share this practice page and share your knowledge')
//             return true
//             })
//             cy.get('input[id="alertbtn"]').click()
//             cy.on('window:confirm',(cnt)=>{
//             expect(cnt).to.eq('Hello , Are you sure you want to confirm?')
//             return false
//             })
//             cy.get('[id="confirmbtn"]').click()
//         })
//     })
// })
// describe('Basic Element Test',()=>{
//     it('Validate Basic elements',()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.on('window:alert',(alt)=>{
//             expect(alt).to.equal('Hello , share this practice page and share your knowledge')
//             return true
//             })
//             cy.get('input[id="alertbtn"]').click()
//             cy.on('window:confirm',(cnt)=>{
//             expect(cnt).to.eq('Hello , Are you sure you want to confirm?')
//   //          return false
//             })
//             cy.get('[id="confirmbtn"]').click()
//         })
//     })
    // describe('Basic Element Test',()=>{
    // it('Validate Basic elements',()=>{
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.get('button[id="mousehover"]').invoke('show')
    // cy.contains('Top').click({ force: true })
    // cy.url().should('include','top')
    // })
    // })
        describe('Basic Element Test',()=>{
        it('Validate Basic elements',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="left-align"] table tr td:nth-child(2)').each(($cells)=>{
         if($cells.text().includes('TestNG')){
             cy.wrap($cells).then((crsname)=>{
                 const CourseName=crsname.text()
                cy.log(CourseName)
    cy.wrap($cells).next().then((PriceOfCourse)=>{
            const pfc = PriceOfCourse.text()
            expect(Number(pfc)).to.equal(20)
            })
        })
        }
      })
        })
    })

       
        
