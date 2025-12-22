class LoginPage{
    constructor(){
        this.username='#user-name'
        this.password='#password'
        this.submit='#login-button'
    }
    typingUserName(usern){
        cy.get(this.username).type(usern)
    }
    typingPassword(pass){
        cy.get(this.password).type(pass)
    }
    clickingonLoginButton(){
        cy.get(this.submit).click()
    }
}
export default LoginPage