class Login
{
   btn_login = "#login2";
   inp_username = "#loginusername";
   inp_password = "#loginpassword ";
   btn_signin = "#logInModal .btn.btn-primary";
   msg_welcome = "#nameofuser";
    clickLogin()
    {
        cy.get(this.btn_login).click();
        
    }

    setUserName(username)
    {
        cy.wait(2000)
        cy.get(this.inp_username).click().type(username);
    }

    setPassword(password)
    {
        cy.get(this.inp_password).click().type(password);
    }

    clickLoginbtn()
    {
        cy.get(this.btn_signin).click();
    }
    
    verifyLoginSuccessMsg(successMsg)
    {
     cy.wait(4000)
     cy.get(this.msg_welcome).should('have.text',successMsg) 
    }

}

export default Login;