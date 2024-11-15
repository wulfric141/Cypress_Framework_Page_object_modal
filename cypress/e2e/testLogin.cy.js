import Login from "../pageClass/Login";
import '../support/commands';

const startTime = Date.now();
describe('Validate login scenario',()=>{

    beforeEach(() => {
        // Launch the application URL
        cy.visit(Cypress.env('url'));
        cy.logger('application',"Launched Application-->Login Test");
      });
    
   
    it('Verify User is able to login',()=>{
        cy.fixture('signupData').then((registerUserdata) => {
                    const loginobj = new Login();
                       loginobj.clickLogin();
                       loginobj.setUserName(registerUserdata.UserName);
                       loginobj.setPassword(registerUserdata.UserPassword);
                       cy.logger('application',"Entered User Details-->Login Test");
                       loginobj.clickLoginbtn();
                       loginobj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
                       cy.logger('application',"Validated success Login Msg-->Login Test");
                       const loadTime = Date.now() - startTime;
                       cy.logger('performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
           })
        
    })

})