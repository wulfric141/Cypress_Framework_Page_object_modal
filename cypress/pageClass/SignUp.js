class SignUp{
    btn_signup ="#signin2";
    inp_username = "#sign-username";
    inp_password = "#sign-password";
    btn_signup_on_modal = "#signInModal .btn.btn-primary";

    clickSignUp()
    {
        cy.get(this.btn_signup).click()
    }
    
    setUserName(username)
    {
        cy.get(this.inp_username).click().type(username);
    }

    setPassword(password)
    {
        cy.get(this.inp_password).click().type(password);
    }

    clickSubmit()
    {
        cy.get(this.btn_signup_on_modal).click();
    }
    
    verifySuccessMsg(successMsg)
    {
     cy.on('window:alert',(t)=>{
        expect(t).to.contains(successMsg);
     })   
    }

    verifyUserexist(userExistMsg)
    {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(userExistMsg);
         })
    }

    verifyInvalidData(InvalidDataMsg)
    {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(InvalidDataMsg);
         })
    }

}
export default SignUp;