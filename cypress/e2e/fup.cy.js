//describe('validate login test',()=>{
    //it('positive test',{tags:"@smoke"},()=>{
   //     cy.log('hello')
    //})
    //it('Negative test1',{tags:"@smoke,@sanity"},()=>{
      //  cy.log('and')
    //})
    //it('Negative test2',{tags:"@regression"},()=>{
  //      cy.log('sorry')
  //  })
  import LoginPage from "../POM/login";
  describe('Test ecommerce',()=>{
    let loginPage= new LoginPage();
    let data;
    before(()=>{
      cy.visit('/');
      cy.fixture('example').then((tdata)=>{
        data=tdata
      })  
    })
  
    it('validate loginpage',()=>{

      loginPage.typingUserName(data.username);
      loginPage.typingPassword(data.password);
      loginPage.clickingonLoginButton()

    })
  })